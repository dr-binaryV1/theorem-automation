import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
    /**
     * define selectors using getter methods
     */
    get productPhones () { return $('a=Phones') }
    get productLaptops () { return $('a=Laptops') }
    get productMonitors () { return $('a=Monitors') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
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

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('index.html');
    }
}

export default new ProductPage();
