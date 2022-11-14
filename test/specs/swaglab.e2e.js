const swaglabStep  = require('../steps/swaglabStep.step');

describe('My SwagLabs application Tests', () => {

    it('should be able to login with valid credentials', async () => {
         swaglabStep.loginToApplicationWithValidCredntials();   
    
    });

    it('Login Should fail with  invalid credentials', async () => {
        swaglabStep.loginToApplicationWithInvalidCredntials();
        
    });


     it('should be able to add Products to Cart', async () => {  
        swaglabStep.loginToApplicationWithValidCredntials();  
        swaglabStep.addProductToCart();      
        
    });
});


