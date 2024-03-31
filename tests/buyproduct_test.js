

const USER = {
    email: 'jegig30174@nimadir.com',
    password: '1q2w3e$R%T',
};

const ADDRESS = {
    streetAddress: '433 Lincoln Rd',
    city: 'Miami Beach',
    postcode: '33139',
    phone: '(305) 534-3676'
    };

Feature('buyproduct');

Scenario('buyproduct @buyproduct', async ({ I, productPage }) => {
I.amOnPage('https://magento.softwaretestingboard.com/');
I.login(USER);
I.amOnPage('https://magento.softwaretestingboard.com/portia-capri.html');
productPage.selectSize()
productPage.selectColor()
productPage.addtoCart()
productPage.verifyAddToCart()
productPage.clickCart()
//const productPrice = await productPage.pullPrice(productPage.price)
I.proceedToCheckout()
I.amOnPage('https://magento.softwaretestingboard.com/checkout/#shipping');
productPage.fillShippingForm(ADDRESS)
productPage.clickNext()
const priceSubtotal = await productPage.pullPrice(productPage.priceSubtotal)
const priceShipping = await productPage.pullPrice(productPage.priceShipping)
const priceTotal = await productPage.pullPrice(productPage.priceTotal)
const totalPrice = priceSubtotal + priceShipping;
pause();
});




//npx codeceptjs run --grep '@buyproduct'