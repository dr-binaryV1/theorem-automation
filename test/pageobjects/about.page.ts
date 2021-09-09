import Page from './page';
class ProductPage extends Page {
    get playButton () { return $('button.vjs-big-play-button') }
    get aboutusTitle () { return $('h5=About us') }
    get player () { return $('div.video-js') }
    get smallPlayButton () { return $('button[title="Play"]') }
    get smallPauseButton () { return $('button[title="Pause"]') }
    get modalCloseButton () { return $('div.modal:nth-child(4) div.modal-footer button:nth-child(1)') }

    /**
     * Function play the about us video by clicking the large play button span over the player
     */
    async playAboutusVideo () {
        await this.aboutusTitle.waitForDisplayed()
        await this.playButton.waitForClickable()
        await this.playButton.click()
    }

    /**
     * Function that will pause the about us video by clicking the pause button on the player
     */
    async pauseAboutusVideo () {
        await this.smallPauseButton.waitForClickable()
        await this.smallPauseButton.click()
    }

    /**
     * Function that will resume the about us video by clicking the play button on the player
     */
    async resumeAboutusVideo () {
        await this.smallPlayButton.waitForClickable()
        await this.smallPlayButton.click()
    }
    
    open () {
        return super.open('#');
    }
}

export default new ProductPage();
