import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
    get productPhones () { return $('a=Phones') }
    get productLaptops () { return $('a=Laptops') }
    get productMonitors () { return $('a=Monitors') }
    get addToCartButton () { return $('a=Add to cart') }
    
    async selectProductType (category: string) {
        // Conditional statement used to determine which category should be clicked before searching for item
        if (category === 'Phones') {
            await this.productPhones.click()
        } else if (category === 'Laptops') {
            await this.productLaptops.click()
        } else if (category === 'Monitors') {
            await this.productMonitors.click()
        }

        await browser.pause(2000)
    }

    async addItemToCart (category: string, productName: string) {
        await this.selectProductType(category)
        const elemsFound = await $$(`a=${productName}`)[0]
        await elemsFound?.click()
        const elemsTitle = await $$(`h2=${productName}`)[0]
        await elemsTitle?.waitForDisplayed()
        await this.addToCartButton.waitForClickable()
        await this.addToCartButton.click()

        await browser.waitUntil(browser.isAlertOpen)
        const alertText = await browser.getAlertText()

        expect(alertText).toEqual('Product added')
        await browser.acceptAlert()
        await this.productNavButton.click()
    }
    
    open () {
        return super.open('index.html');
    }
}

export default new ProductPage();
