import ProductPage from  '../pageobjects/product.page';
import CartPage from '../pageobjects/cart.page'
import testData from '../testdata.json'
describe('Contact component', () => {
    const { productData } = testData
    before(async () => {
        await ProductPage.open()
    })

    it('Should add items to shopping cart and checkout successfully', async () => {
        const testDataArr = [{
            ...productData.phone,
            category: 'Phones'
        }, {
            ...productData.laptop,
            category: 'Laptops'
        }]
        let cartPrice = 0

        for (let i = 0; i < testDataArr.length; i ++) {
            await ProductPage.addItemToCart(testDataArr[i].category, testDataArr[i].name)
            cartPrice += testDataArr[i].price
        }

        await ProductPage.cartNavButton.click()
        await CartPage.pageHeader.waitForDisplayed()
        await CartPage.totalPriceLabel.waitForDisplayed()
        const totalText = await CartPage.totalPriceLabel.getText()
        expect(totalText).toEqual(cartPrice + "")

        await CartPage.placeOrder(testData.checkout)

        await CartPage.purchaseModal.waitForDisplayed()
        await CartPage.successModalText.waitForDisplayed()
        
        const successText = await CartPage.thankYouTextLabel.getText()
        expect(successText).toEqual("Thank you for your purchase!")

        await CartPage.successModalConfirmButton.waitForClickable()
        await CartPage.successModalConfirmButton.click()
    })
});