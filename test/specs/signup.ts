import SignupPage from  '../pageobjects/signup.page';
import { v4 as uuid } from 'uuid'

describe('My Login application', () => {
    let username: string

    before(() => {
        // storing username before tests run for reusability 
        username = uuid()
    })

    it('should sign up with new credentials', async () => {
        await SignupPage.open();
        await SignupPage.signup(username, 'SuperSecretPassword!');

        await browser.waitUntil(browser.isAlertOpen)
        const alertText = await browser.getAlertText()

        expect(alertText).toEqual('Sign up successful.')
        await browser.acceptAlert()
    });
    
    it('should not sign up with credentials already in system', async () => {
        await SignupPage.open();
        await SignupPage.signup(username, 'SuperSecretPassword!');

        await browser.waitUntil(browser.isAlertOpen)
        const alertText = await browser.getAlertText()

        expect(alertText).toEqual('This user already exist.')
    });
});