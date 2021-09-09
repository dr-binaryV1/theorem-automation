import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ContactPage extends Page {
    get newMessageHeader () { return $('h5=New message') }
    get emailInput () { return $('input#recipient-email') }
    get contactNameInput () { return $('input#recipient-name') }
    get contactMessageInput () { return $('textarea#message-text') }
    get sendMessageButton () { return $('button=Send message') }
    get modalCloseButton () { return $('div.modal:nth-child(1) div.modal-footer button:nth-child(1)') }

    async sendMessage (email: string, name: string, message: string) {
        await this.contactNavButton.waitForClickable()
        await this.contactNavButton.click()

        await this.emailInput.waitForDisplayed()
        await this.emailInput.clearValue()
        await this.emailInput.setValue(email)

        await this.contactNameInput.clearValue()
        await this.contactNameInput.setValue(name)

        await this.contactMessageInput.clearValue()
        await this.contactMessageInput.setValue(message)

        await this.sendMessageButton.waitForClickable()
        await this.sendMessageButton.click()
    }
    
    open () {
        return super.open('index.html');
    }
}

export default new ContactPage();
