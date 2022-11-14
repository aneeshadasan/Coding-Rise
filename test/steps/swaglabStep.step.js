 
 const loginPage = require('../pages/login.page');
 const InventoryPage = require('../pages/inventory.page');
 const chai = require("chai");
 const expect = chai.expect;

  class swaglabStep{

    async loginToApplicationWithValidCredntials(){
        await loginPage.launchApplication();
         console.log("inside step")
        await loginPage.login("standard_user", "secret_sauce");  
     
    await expect( InventoryPage.isDisplayedProducts()).to.be.true;

 }


 async loginToApplicationWithInvalidCredntials(){
    await loginPage.launchApplication();
    await loginPage.login("standard_user", "wrongpswd");  
    await  expect( loginPage.isDisplayedError()).to.be.true;
 
}

async addProductToCart(){
    // await loginPage.launchApplication();
    // await loginPage.login("standard_user", "secret_sauce");  
    await InventoryPage.addProductsToCart();
    await  expect( InventoryPage.isProductAddedTocart()).to.be.equals(3);
   
 
}



}module.exports = new swaglabStep();