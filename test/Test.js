//the command to run Mocha file
//npx mocha --no-timeouts '*.js'

const { Builder, By ,Key, Browser} = require("selenium-webdriver");

//Testing With Mocha
//descirbe function
describe("The Lists to do",function(){


    //it function (need to use async function inside in 'it' function)
    it("Successfully done", async function(){
        await driver.get("http://103.203.132.254:8888/login")
        await driver.manage().window().setRect({ width: 1312, height: 741 })
        await driver.findElement(By.name("username")).click()
        await driver.findElement(By.name("username")).sendKeys("Admin")
        await driver.findElement(By.name("password")).sendKeys("password")
        //await driver.findElement(By.css(".btn:nth-child(1)")).click()
        //await driver.findElement(By.css(".nav-item:nth-child(3) p")).click()
    });

});



