import ProductPage from  '../pageobjects/product.page'
import ProductJson from '../testdata.json'

describe('Product component', () => {
    it('Should correctly search for items on the phone page', async () => {
        await ProductPage.open();

        await ProductPage.selectProductType('Phones')
        const elemsFound = await $$(`a=${ProductJson.productData.PhoneName}`)
        expect(elemsFound.length).toBeGreaterThanOrEqual(1)
    });

    it('Should correctly search for items on the Laptops page', async () => {
        await ProductPage.open();

        await ProductPage.selectProductType('Laptops')
        const elemsFound = await $$(`a=${ProductJson.productData.LaptopName}`)
        expect(elemsFound.length).toBeGreaterThanOrEqual(1)
    });

    it('Should correctly search for items on the Monitors page', async () => {
        await ProductPage.open();

        await ProductPage.selectProductType('Monitors')
        const elemsFound = await $$(`a=${ProductJson.productData.MonitorName}`)
        expect(elemsFound.length).toBeGreaterThanOrEqual(1)
    });
});