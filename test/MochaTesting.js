//the command to run Mocha file
//npx mocha --no-timeouts '*.js'

const { Builder, By ,Key, Browser} = require("selenium-webdriver");
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
describe("The Lists to do",function(){


    //it function (need to use async function inside in 'it' function)
    it("Successfully done", async function(){
            //Launch the browser
            let driver = await new Builder().forBrowser("chrome").build();

            //navigate to our apps
            await driver.get("http://103.203.132.254:8888/");
            //await driver.get("http://103.203.134.6:7070/")

            //add to do
            //for login Section
            await driver.findElement(By.name("username")).sendKeys("Admin",Key.RETURN) //adding user name
            await driver.findElement(By.name("password")).sendKeys("password",Key.RETURN) //adding password



            //to create the orders from sale team
            await driver.get("http://103.203.132.254:8888/admin/sale-management/create")
            //await driver.get("http://103.203.134.6:7070/admin/sale-management/create")

            //adding data
            await driver.findElement(By.xpath("//*[@id='vs1__combobox']/div[1]/span")).sendKeys("Ahlone",Key.RETURN).click  //township for ygn

           // await driver.findElement(By.xpath("//*[@id='vs1__combobox']/div[1]/input")).sendKeys("Amarapura",Key.RETURN).click //township for mdy

            await driver.findElement(By.xpath("/html/body/div/div[3]/div/div/form/div/div/div/div[2]/div[2]/div/div[2]/div/input")).sendKeys("14.1218,98.1988",Key.RETURN) //Lat Long
            await driver.findElement(By.xpath("//*[@id='vs2__combobox']/div[1]/input")).sendKeys("Onl",Key.RETURN).click //Order Category
            await driver.findElement(By.xpath("//*[@id='vs3__combobox']/div[1]/input")).sendKeys("Mahar Net",Key.RETURN).click  //Brand Name
            await driver.findElement(By.xpath("//*[@id='vs4__combobox']/div[1]/input")).sendKeys("Home Plan - 20 Mbps",Key.RETURN).click  //Service Plan

           var radiobutton = driver.findElement(By.name("selectPlan"))
           radiobutton[1].click
        //    if(radiobutton.isSelected){
        //         console.log("Radio button is selected")
        //    }else{
        //         console.log("can't be selected")
        //    }
           
           //var radiobutton = driver.findElement(By.cssSelector("input[value='Monthly Prepaid - 20 Mbps - 24,500 MMK/month']")).click
          
          // await driver.findElement(By.xpath("/html/body/div/div[3]/div/div/form/div/div/div/div[2]/div[2]/div/div[6]/div/div[1]/label")).click
           //await driver.findElement(By.xpath("/html/body/div/div[3]/div/div/form/div/div/div/div[2]/div[2]/div/div[6]/div/div[1]/input")).sendKeys("Monthly",Key.RETURN).click
            
            

            await driver.findElement(By.xpath("/html/body/div/div[3]/div/div/form/div[1]/div/div/div[2]/div[2]/div/div[8]/div/input")).sendKeys("Aug 22 Order 1",Key.RETURN)
            await driver.findElement(By.xpath("/html/body/div/div[3]/div/div/form/div[1]/div/div/div[2]/div[2]/div/div[9]/div/input")).sendKeys("??????/?????????(???????????????)??????????????????",Key.RETURN)
            await driver.findElement(By.xpath("/html/body/div/div[3]/div/div/form/div[1]/div/div/div[2]/div[2]/div/div[10]/div/input")).sendKeys("0999899712",Key.RETURN)
            let address = await driver.findElement(By.xpath("/html/body/div/div[3]/div/div/form/div/div/div/div[2]/div[2]/div/div[13]/div/input"))
            address.sendKeys("Ygn",Key.RETURN)       
                         



        //closing the browser
        //await driver.quit()
    });

});



