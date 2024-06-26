const { I } = inject();

module.exports = {

  size: { xpath: '//div[@class="swatch-option text"][1]'},
  productColor: { xpath: '//div[@class="swatch-option color"][1]'},
  addtoCartBtn: { xpath: '//button[@id="product-addtocart-button"]'},
  cart: {xpath: '//span[@class="text"]'},
  title: {xpath: '//span[contains(text(), "Add to Cart")]'},
  streetAddressField: { xpath: '//input[@name="street[0]"]'},
  cityAddressField: { xpath: '//input[@name="city"]'},
  provinceSelector: { xpath: '//select[@name="region_id"]'},
  province: { xpath: '//select[@name="region_id"]//option[@value="18"]'},
  postcode: { xpath: '//input[@name="postcode"]'},
  phone: { xpath: '//input[@name="telephone"]'},
  shippingMethod: { xpath: '//input[@value="flatrate_flatrate"]'},
  next: { xpath: '//button[@data-role="opc-continue"]'},
  priceSubtotal: {xpath: '//span[@data-th="Cart Subtotal"]'},
  priceShipping: {xpath: '//span[@data-th="Shipping"]'},
  priceTotal: {xpath: '//td[@data-th="Order Total"]//span[@class="price"]'},




async selectVariations() {
  if (await this.checkColorExist()){  
  I.click(this.size);
  I.click(this.productColor);
}else {
  console.log("Color and size options not found.");
}
 },

 addtoCart() {
  I.click(this.addtoCartBtn);
 },
 
 verifyAddToCart() {
 I.waitForVisible(this.title, 10);
},

 clickCart() {
 I.click(this.cart);
},

fillShippingForm(address) {
  I.fillField(this.streetAddressField, address.streetAddress);
  I.fillField(this.cityAddressField, address.city);
  I.click(this.provinceSelector);
  I.selectOption(this.provinceSelector, 'Florida');
  I.fillField(this.postcode, address.postcode);
  I.fillField(this.phone, address.phone);
  I.click(this.shippingMethod)
},
clickNext() {
  I.click(this.next);
 },

 async pullPrice(element) {
  const priceString = await I.grabTextFrom(element);
  const priceNumber = parseFloat(priceString.replace(/[^\d.-]/g, ''));
  return priceNumber;
},
async checkColorExist() {
  return Boolean(await I.grabNumberOfVisibleElements(this.size))
 },
}