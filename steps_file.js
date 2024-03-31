// in this file you can append custom step methods to 'I' object
 

module.exports = function() {
  emailField = { xpath: '//input[@id="email"]'};
  passwordField = { xpath: '//input[@id="pass"]'};
  signInLink = {xpath: '/html/body/div[2]/header/div[1]/div/ul/li[2]/a'};
  signInBtn = {xpath: '//button[@id="send2"]'};
  miniCartBtn = { xpath: '//button[@id="top-cart-btn-checkout"]'}
 

  return actor({

    login(user) {
      this.click(signInLink);
      this.fillField(emailField, user.email);
      this.fillField(passwordField, user.password);
      this.click(signInBtn);
  
    
    },

    proceedToCheckout (){
      this.click(miniCartBtn);
    }
  });
}
