

const LoginPage = require('../pages/login.page');
const InventoryPage = require('../pages/inventory.page')

const chai = require("chai");
const loginPage = require('../pages/login.page');
const expect = chai.expect;



describe('My SwagLabs application Tests', () => {
    it('should login with valid credentials', async () => {
         
        await LoginPage.launchApplication();       
        await LoginPage.loginWithValidCredentials("standard_user", "secret_sauce");
        await  expect( InventoryPage.isDisplayedProducts()).to.be.true;

    });

    it('should login with invalid credentials', async () => {
           
        await LoginPage.launchApplication();       
        await LoginPage.loginWithValidCredentials("standard_user", "wrongpswd");
        await  expect( loginPage.isDisplayedError()).to.be.true;

    });


     it('should be able to add Products to Cart', async () => {  

        await LoginPage.launchApplication();       
        await LoginPage.loginWithValidCredentials("standard_user", "secret_sauce");
        await InventoryPage.addProductsToCart();
        await  expect( InventoryPage.isProductAddedTocart()).to.be.equals(3);
        
    });
});


