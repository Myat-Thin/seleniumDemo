//the command to run Mocha file
//npx mocha --no-timeouts '*.js'

const { Builder, By ,Key} = require("selenium-webdriver");




//Testing With Mocha
//descirbe function
describe("Another Lists to do",function(){


    //it function (need to use async function inside in 'it' function)
    //valid case
    it("Successfully done another list", async function(){
            //Launch the browser
            let driver = await new Builder().forBrowser("chrome").build();

            //navigate to our apps
            await driver.get("http://103.203.132.252:8080/");

            //add to do
            //for login Section
            await driver.findElement(By.name("username")).sendKeys("Admin",Key.RETURN) //adding user name
            await driver.findElement(By.name("password")).sendKeys("password",Key.RETURN) //adding password

            //to check all order list 
            await driver.get("http://103.203.132.252:8080/admin/order-all-management/list#demo")
            
            
    });

    //invalid case
    it("Testing invalid user login", async function(){
        //Launch the browser
        let driver = await new Builder().forBrowser("chrome").build();

        //navigate to our apps
        await driver.get("http://103.203.132.252:8080/");

        //add to do
        //for login Section
        await driver.findElement(By.name("username")).sendKeys("khinenyeinko",Key.RETURN) //adding user name
        await driver.findElement(By.name("password")).sendKeys("WD469K",Key.RETURN) //adding password
        await driver.get("http://103.203.132.252:8080/admin/qc-management/qc_list")



        
    });

});



