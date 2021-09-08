import SignupPage from  '../pageobjects/signup.page';
import { v4 as uuid } from 'uuid'
import signupPage from '../pageobjects/signup.page';

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
        await signupPage.modalCloseButton.click()
    });

    it('should not sign up with empty form', async () => {
        await SignupPage.open();
        await SignupPage.signup('', '');

        await browser.waitUntil(browser.isAlertOpen)
        const alertText = await browser.getAlertText()
        expect(alertText).toEqual('Please fill out Username and Password.')
        await browser.acceptAlert()
        await signupPage.modalCloseButton.click()
    });
});