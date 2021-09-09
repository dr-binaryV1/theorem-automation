import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SigninPage extends Page {
    get signupModalLabel () { return $('h5=Log in') }
    get nameOfUserLabel () { return $('a#nameofuser') }
    get logOutNav () { return $('a=Log out') }
    get inputUsername () { return $('input#loginusername') }
    get inputPassword () { return $('input#loginpassword') }
    get btnSubmit () { return $('button=Log in') }
    get modalCloseButton () { return $('div.modal:nth-child(3) div.modal-footer button:nth-child(1)') }

    /**
     * Function that clicks log in navigation then enter credentials in modal and clicking submit button afterwards
     * @param username username to be used to sign in user
     * @param password password to be used to sign in user
     */
    async signin (username: string, password: string) {
        await this.signinNavButton.waitForClickable()
        await this.signinNavButton.click()
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

export default new SigninPage();
