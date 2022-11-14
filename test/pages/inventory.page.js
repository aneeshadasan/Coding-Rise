const { default: $ } = require('webdriverio/build/commands/browser/$');
const { default: isDisplayed } = require('webdriverio/build/commands/element/isDisplayed');
const Page = require('./page');

class InventoryPage extends Page{

    get addToCartButtons()
    {
        return $$('button[id^=add-to-cart-]');
    }

    get shoppngCartBadge()
    {
        return $$('.shopping_cart_badge');
    }

    get productTitle()
    {
        return $('.title');
    }



    async addProductsToCart(noOfProducts){
        for (let i=0;i < 3;i++)
        {
        let addToCartBtn = this.addToCartButtons[i];
        await addToCartBtn.click();
        }
    
    }

    async isDisplayedProducts(){

        let productTitle = await this.productTitle
        await isDisplayed(productTitle);

    }

    async isProductAddedTocart(){

        let shoppngCartBadge  = await this.shoppngCartBadge
        let count = await shoppngCartBadge.getText();
        console.log("Count :" + count)
       
    }
    





} module.exports = new InventoryPage();