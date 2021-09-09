/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    get cartNavButton () { return $('a=Cart') }
    get productNavButton () { return $('ul.navbar-nav li:nth-child(1) a') }
    get contactNavButton () { return $('a=Contact') }
    get signinNavButton () { return $('a=Log in') }
    get aboutusNavButton () { return $('a=About us') }
    get signupNavButton () { return $('a=Sign up') }
    get next () { return $('button=Next') }
    get previous () { return $('button=Previous') }

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path: string) {
        return browser.url(`https://demoblaze.com/${path}`)
    }
}
