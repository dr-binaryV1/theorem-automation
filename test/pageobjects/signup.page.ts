import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignupPage extends Page {
    /**
     * define selectors using getter methods
     */
    get signupNavButton () { return $('a#signin2') }
    get signupModalLabel () { return $('div.modal-header h5#signInModalLabel') }
    get inputUsername () { return $('input#sign-username') }
    get inputPassword () { return $('input#sign-password') }
    get btnSubmit () { return $('button=Sign up') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
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

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('#');
    }
}

export default new SignupPage();
