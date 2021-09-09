import Page from './page';

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

        // Explicit wait was applied as there was no element that suggest a change in the categories therefore,
        // There was no wait to do an implicit wait for any particular element to be visible that i've seen
        await browser.pause(2000)
    }

    /**
     * 
     * @param category category in which the items fall into ie Phones | Laptops | Monitors
     * @param productName name of product to add to cart
     */
    async addItemToCart (category: string, productName: string) {
        await this.productNavButton.click()
        // Category is passed to function that will then click that category on the page
        await this.selectProductType(category)
        // select find elements on the DOM that matches the pattern.
        // This returns a list of items but the assumption was made that only one item will have the productName
        // So we select the first item in the list
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
    }
    
    open () {
        return super.open('index.html');
    }
}

export default new ProductPage();
