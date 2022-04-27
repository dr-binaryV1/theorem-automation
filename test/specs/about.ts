import AboutusPage from  '../pageobjects/about.page';

describe('About us component', () => {
    console.log('Some Random FIle');
    console.log('I made a change here');
    before(async () => {
        await AboutusPage.open()
        await AboutusPage.aboutusNavButton.click()
    })

    it('should be able to click and start, pause and resume video', async () => {
        await AboutusPage.playAboutusVideo()
        expect(AboutusPage.player).toHaveElementClass('vjs-playing')

        //Video should be playing so clicking the small pause button on the player should pause video
        await AboutusPage.pauseAboutusVideo()
        expect(AboutusPage.player).toHaveElementClass('vjs-paused')

        //Video should be paused so clicking the small play button should resume the player
        await AboutusPage.resumeAboutusVideo()
        expect(AboutusPage.player).toHaveElementClass('vjs-playing')
        
        await AboutusPage.modalCloseButton.waitForClickable()
        await AboutusPage.modalCloseButton.click()
    });
});