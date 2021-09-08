/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    get signinNavButton () { return $('a=Log in') }
    get aboutusNavButton () { return $('a=About us') }
    get signupNavButton () { return $('a#signin2') }
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
