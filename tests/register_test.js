Feature('register');

const NEW_USER = {
firstName: "Anna",
lastName: "Doe",
email: Date.now() + '@test.com',
password: '1234Qwer()',
};

Scenario('register',  ({ I, basePage }) => {
basePage.clickRegister();
basePage.verifyRegisterTitle();
basePage.fillRegisterForm(NEW_USER);
basePage.submitRegisterForm();
basePage.verifyRegisterSuccess();
pause();
});
//npx
