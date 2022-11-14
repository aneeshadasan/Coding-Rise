
module.exports = class Page {
 
    async open (path) {
         browser.url(`https://www.saucedemo.com`)
        await browser.pause(3000);         
    }
}
