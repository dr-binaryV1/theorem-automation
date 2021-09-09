import ProductPage from  '../pageobjects/product.page';
import CartPage from '../pageobjects/cart.page'
import { productData, checkout } from '../testdata.json'
describe('Contact component', () => {
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

        await CartPage.placeOrder(checkout)

        await CartPage.purchaseModal.waitForDisplayed()
        await CartPage.successModalText.waitForDisplayed()
        
        const successText = await CartPage.thankYouTextLabel.getText()
        expect(successText).toEqual("Thank you for your purchase!")

        await CartPage.successModalConfirmButton.waitForClickable()
        await CartPage.successModalConfirmButton.click()
    })

    it('Should delete item from the cart successfully', async () => {
        const testDataArr = [{
            ...productData.phone,
            category: 'Phones'
        }]

        for (let i = 0; i < testDataArr.length; i ++) {
            await ProductPage.addItemToCart(testDataArr[i].category, testDataArr[i].name)
        }

        await ProductPage.cartNavButton.click()
        await CartPage.pageHeader.waitForDisplayed()

        const nameColText = await CartPage.firstRowNameCol.getText()
        expect(nameColText).toEqual(productData.phone.name)

        const priceColText = await CartPage.firstRowPriceCol.getText()
        expect(priceColText).toEqual(productData.phone.price + "")
        
        await CartPage.firstRowDelButton.click()

        // Minor Explicit wait here as there were no element to wait on before making assertions
        // Assertions was being made before the page refreshes which caused tests to fail prematurely
        await browser.pause(1000)
        const cartPriceText = await CartPage.totalPriceLabel.getText()
        expect(cartPriceText).toEqual("")

        const isRowVisible = await CartPage.firstRow.isDisplayed()
        expect(isRowVisible).toBeFalsy()
    })

    it('Should not submit purchase order if credit card and name information missing', async () => {
        const testDataArr = [{
            ...productData.phone,
            category: 'Phones'
        }]

        for (let i = 0; i < testDataArr.length; i ++) {
            await ProductPage.addItemToCart(testDataArr[i].category, testDataArr[i].name)
        }

        await ProductPage.cartNavButton.click()
        await CartPage.pageHeader.waitForDisplayed()

        await CartPage.placeOrder({ ...checkout, name: '', card: '' })
        await browser.waitUntil(browser.isAlertOpen)
        const alertText = await browser.getAlertText()

        expect(alertText).toEqual('Please fill out Name and Creditcard.')
        await browser.acceptAlert()
    })
});