const Page = require('./page');
const readLine = require('readline');



class LoginPage extends Page {

    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    get errorButton () {
        return $('.error-button');
    }

    async launchApplication () {
        return super.open();
    }
    
    async login (username , password) {       
      
        let usrName = await this.inputUsername;
        let pswd = await this.inputPassword;
        let loginBtn = await this.btnSubmit;

        console.log ("UserName ");
        await usrName.setValue(username);
        console.log ("UserName: "+ username);
        await pswd.setValue(password);
        console.log("Enter password"+password);          

        await loginBtn.click();
        await browser.pause(2000);

    }

   async isDisplayedError()
    {
        let error = await this.errorButton
        await isDisplayed(error);
    }

   



}

module.exports = new LoginPage();
