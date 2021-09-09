import signUpPage from '../pageobjects/signup.page';
import signInPage from '../pageobjects/signin.page'
import { v4 as uuid } from 'uuid'
import signinPage from '../pageobjects/signin.page';

describe('Login Component', () => {
    let username: string
    const password = 'somesecretpassword'

    before(async () => {
        // storing username before tests run for reusability 
        // using uuid to get random strings to use for username to prevent clash and premature failures
        username = uuid()
        signUpPage.open()

        // Calling the sign up function to create a valid user to carry out tests
        await signUpPage.signup(username, password)
        await browser.waitUntil(browser.isAlertOpen)
        await browser.acceptAlert()
    })

    it('should not send request with empty strings', async () => {
        await signInPage.signin('', '');
        await browser.waitUntil(browser.isAlertOpen)
        const alertText = await browser.getAlertText()
        expect(alertText).toEqual('Please fill out Username and Password.')
        await browser.acceptAlert()
        await signinPage.modalCloseButton.click()
    });

    it('should not sign in with invalid credentials', async () => {
        await signInPage.signin('invaliduser101', password);
        await browser.waitUntil(browser.isAlertOpen)
        const alertText = await browser.getAlertText()
        expect(alertText).toEqual('User does not exist.')
        await browser.acceptAlert()
        await signinPage.modalCloseButton.click()
    });

    it('should sign in with valid credentials', async () => {
        await signInPage.signin(username, password);
        await signInPage.nameOfUserLabel.waitForDisplayed()
        const welcomeLabel = await signInPage.nameOfUserLabel.getText()
        expect(welcomeLabel).toEqual(`Welcome ${username}`)
        expect(signInPage.logOutNav).toBeDisplayed()
    });
});