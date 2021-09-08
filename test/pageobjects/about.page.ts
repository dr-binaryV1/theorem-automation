import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
    /**
     * define selectors using getter methods
     */
    get playButton () { return $('button.vjs-big-play-button') }
    get aboutusTitle () { return $('h5=About us') }
    get player () { return $('div.video-js') }
    get smallPlayButton () { return $('button[title="Play"]') }
    get smallPauseButton () { return $('button[title="Pause"]') }
    get modalCloseButton () { return $('div.modal:nth-child(4) div.modal-footer button:nth-child(1)') }

    async playAboutusVideo () {
        await this.aboutusTitle.waitForDisplayed()
        await this.playButton.waitForClickable()
        await this.playButton.click()
    }

    async pauseAboutusVideo () {
        await this.smallPauseButton.waitForClickable()
        await this.smallPauseButton.click()
    }

    async resumeAboutusVideo () {
        await this.smallPlayButton.waitForClickable()
        await this.smallPlayButton.click()
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('#');
    }
}

export default new ProductPage();
