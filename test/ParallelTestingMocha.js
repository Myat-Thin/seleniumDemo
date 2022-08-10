//the command to run Mocha file
//npx mocha --no-timeouts '*.js'

const { Builder, By ,Key} = require("selenium-webdriver");
// var mocha = require('mocha')
// var describe = mocha.describe
// var it = mocha.it


// describe("adds to do lists",function(){
//     it("Successfully done", async function(){
//         console.log("hello")
//     });
// });



//Testing With Mocha
//descirbe function
describe("Another Lists to do",function(){


    //it function (need to use async function inside in 'it' function)
    it("Successfully done another list", async function(){
            //Launch the browser
            let driver = await new Builder().forBrowser("chrome").build();

            //navigate to our apps
            await driver.get("http://103.203.132.254:8888/");

            //add to do
            //for login Section
            await driver.findElement(By.name("username")).sendKeys("Admin",Key.RETURN) //adding user name
            await driver.findElement(By.name("password")).sendKeys("password",Key.RETURN) //adding password



            //to create the orders from sale team
            await driver.get("http://103.203.132.254:8888/admin/sale-management/create")

            //adding data
            //await driver.findElement(By.name("townships")).sendKeys("Ahlone",Key.RETURN)


            //closing the browser
        //await driver.quit()
    });

});



