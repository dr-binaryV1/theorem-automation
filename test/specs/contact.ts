import ContactPage from  '../pageobjects/contact.page';
import { contactData } from '../testdata.json'

describe('Contact component', () => {
    before(async () => {
        await ContactPage.open()
    })

    it('Should successfully submit a contact form', async () => {
        await ContactPage.sendMessage(contactData.email, contactData.name, contactData.message)
        await browser.waitUntil(browser.isAlertOpen)
        const alertText = await browser.getAlertText()

        expect(alertText).toEqual('Thanks for the message!!')
        await browser.acceptAlert()
    })

    it('Should close contact modal when close button clicked', async () => {
        await ContactPage.contactNavButton.click()
        await ContactPage.modalCloseButton.waitForClickable()
        await ContactPage.modalCloseButton.click()

        // Waiting got the contact nav button to be clickable asserts that the modal has been closed so we can carry on with the tests
        await browser.waitUntil(ContactPage.contactNavButton.isClickable)
        const isModalVisible = await ContactPage.newMessageHeader.isDisplayed()
        expect(isModalVisible).toBeFalsy()
    })

    // Test fail as user is currently able to submit an empty form. This should not be the case
    it('Should not submit empty contact form', async () => {
        await ContactPage.sendMessage('', '', '')
        await browser.waitUntil(browser.isAlertOpen)
        const alertText = await browser.getAlertText()

        await browser.acceptAlert()
        expect(alertText !== 'Thanks for the message!!').toBeTruthy()
    })
});