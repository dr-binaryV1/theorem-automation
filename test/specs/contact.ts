import ContactPage from  '../pageobjects/contact.page';
import testData from '../testdata.json'

describe('Contact component', () => {
    before(async () => {
        await ContactPage.open()
    })

    it('Should successfully submit a contact form', async () => {
        await ContactPage.sendMessage(testData.contactData.email, testData.contactData.name, testData.contactData.message)
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

    it('Should not submit empty contact form', async () => {
        await ContactPage.sendMessage('', '', '')
        await browser.waitUntil(browser.isAlertOpen)
        const alertText = await browser.getAlertText()

        await browser.acceptAlert()
        expect(alertText !== 'Thanks for the message!!').toBeTruthy()
    })
});