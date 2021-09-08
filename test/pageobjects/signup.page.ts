import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignupPage extends Page {
    /**
     * define selectors using getter methods
     */
    get signupModalLabel () { return $('div.modal-header h5#signInModalLabel') }
    get inputUsername () { return $('input#sign-username') }
    get inputPassword () { return $('input#sign-password') }
    get btnSubmit () { return $('button=Sign up') }
    get modalCloseButton () { return $('div.modal:nth-child(2) div.modal-footer button:nth-child(1)') }

    /**
     * 
     * @param username string value for username/email when signing up
     * @param password string value used for password when signing up
     * Function takes a username and password then go through the website clicking on
     * then sign up button in the nav bar.
     * clear values in modal before start to set values
     * click submit button to complete account creation
     */
    async signup (username: string, password: string) {
        await this.signupNavButton.click()
        await this.signupModalLabel.waitForDisplayed()
        await this.inputUsername.clearValue()
        await this.inputPassword.clearValue()
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnSubmit.click()
    }
    
    open () {
        return super.open('#');
    }
}

export default new SignupPage();
