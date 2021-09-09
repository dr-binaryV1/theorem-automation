import Page from './page';

class CartPage extends Page {
    get pageHeader () { return $('h2=Products') }
    get placeOrderButton () { return $('button=Place Order') }
    get totalPriceLabel () { return $('h3#totalp') }
    get nameInput () { return $('input#name') }
    get countryInput () { return $('input#country') }
    get cityInput () { return $('input#city') }
    get creditCardInput () { return $('input#card') }
    get monthInput () { return $('input#month') }
    get yearInput () { return $('input#year') }
    get purchaseButton () { return $('button=Purchase') }
    get placeOrderTitle () { return $('h5=Place order') }
    get purchaseModal () { return $('div.showSweetAlert.visible') }
    get thankYouTextLabel () { return $('div.showSweetAlert.visible h2') }
    get successModalText () { return $('div.showSweetAlert.visible p') }
    get successModalConfirmButton () { return $('div.sa-confirm-button-container button') }
    get firstRowNameCol () { return $('tr.success td:nth-child(2)') }
    get firstRowPriceCol () { return $('tr.success td:nth-child(3)') }
    get firstRowDelButton () { return $('tr.success td:nth-child(4) a') }
    get firstRow () { return $('tr.success') }

    /**
     * placeOrder function that clicks button to place order then proceed to input form information then purchase items.
     * @param formData forData object used to fill out the information on the place order modal
     */
    async placeOrder (formData: any) {
        await this.placeOrderButton.waitForClickable()
        await this.placeOrderButton.click()

        await this.placeOrderTitle.waitForDisplayed()

        await this.nameInput.clearValue()
        await this.nameInput.setValue(formData.name)

        await this.countryInput.clearValue()
        await this.countryInput.setValue(formData.country)

        await this.cityInput.clearValue()
        await this.cityInput.setValue(formData.city)

        await this.creditCardInput.clearValue()
        await this.creditCardInput.setValue(formData.card)

        await this.monthInput.clearValue()
        await this.monthInput.setValue(formData.month)

        await this.yearInput.clearValue()
        await this.yearInput.setValue(formData.year)

        await this.purchaseButton.click()
    }
    
    open () {
        return super.open('cart.html');
    }
}

export default new CartPage();
