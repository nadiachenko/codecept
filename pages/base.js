const { I } = inject();

module.exports = {
registerLink: {xpath: '/html/body/div[2]/header/div[1]/div/ul/li[3]/a'},
firstName: {xpath: '/html/body/div[2]/main/div[3]/div/form/fieldset[1]/div[1]/div/input'},
lastName:{xpath: '/html/body/div[2]/main/div[3]/div/form/fieldset[1]/div[2]/div/input'},
emailField:{xpath: '/html/body/div[2]/main/div[3]/div/form/fieldset[2]/div[1]/div/input'},
passField:{xpath: '/html/body/div[2]/main/div[3]/div/form/fieldset[2]/div[2]/div/input'}, 
confirmPassField:{xpath: '/html/body/div[2]/main/div[3]/div/form/fieldset[2]/div[3]/div/input'}, 

clickRegister() {
  I.click(this.registerLink);
 },

 verifyRegisterTitle() {
const registerTitle = 'Create New Customer Account'
    I.see(registerTitle)
 },

fillRegisterForm(user) {
  I.fillField (this.firstName, user.firstName )
  I.fillField (this.lastName, user.lastName )
  I.fillField (this.emailField, user.email )
  I.fillField (this.passField, user.password )
  I.fillField (this.confirmPassField, user.password )
},

submitRegisterForm() {
  I.click({xpath: '/html/body/div[2]/main/div[3]/div/form/div/div[1]/button'});
 },

 verifyRegisterSuccess() {
  const accountMessage = 'Thank you for registering with Main Website Store'
      I.see(accountMessage)
   },
}
