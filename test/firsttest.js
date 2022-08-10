const { Builder, By ,Key} = require("selenium-webdriver");

//creating function
async function example(){
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
   // await driver.quit()
}

example()