

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
    
    let productLink = new DataTable(['productLink']);
    let productLinks = ['pierce-gym-short.html', 'deirdre-relaxed-fit-capri.html'];


Feature('buyproduct');

Data(productLinks).Scenario('buyproduct @buyproduct', async ({ I, productPage, current }) => {

I.amOnPage('https://magento.softwaretestingboard.com/');
I.login(USER);
I.amOnPage('https://magento.softwaretestingboard.com/' + current);
//console.log(await productPage.checkColorExist())
await productPage.selectVariations()
productPage.addtoCart()
productPage.verifyAddToCart()
productPage.clickCart()
I.proceedToCheckout()
I.amOnPage('https://magento.softwaretestingboard.com/checkout/#shipping');
productPage.fillShippingForm(ADDRESS)
productPage.clickNext()
const priceSubtotal = await productPage.pullPrice(productPage.priceSubtotal)
const priceShipping = await productPage.pullPrice(productPage.priceShipping)
const priceTotal = await productPage.pullPrice(productPage.priceTotal)
const totalPrice = priceSubtotal + priceShipping;

});
Scenario('convertprice', async ({ I }) => {

    const currency = (await I.sendGetRequest('/exchange?valcode=USD&json')).data[0].rate;
    console.log(currency)
    }).tag("convert");
    


//npx codeceptjs run --grep '@buyproduct'