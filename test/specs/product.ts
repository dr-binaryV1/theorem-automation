import ProductPage from  '../pageobjects/product.page'
import { productData, productCategories } from '../testdata.json'

describe('Product component', () => {
    it('Should correctly search for items on the phone page', async () => {
        await ProductPage.open();

        await ProductPage.selectProductType(productCategories.Phone)
        const elemsFound = await $$(`a=${productData.phone.name}`)
        expect(elemsFound.length).toBeGreaterThanOrEqual(1)
    });

    it('Should correctly search for items on the Laptops page', async () => {
        await ProductPage.open();

        await ProductPage.selectProductType(productCategories.Laptop)
        const elemsFound = await $$(`a=${productData.laptop.name}`)
        expect(elemsFound.length).toBeGreaterThanOrEqual(1)
    });

    it('Should correctly search for items on the Monitors page', async () => {
        await ProductPage.open();

        await ProductPage.selectProductType(productCategories.Monitor)
        const elemsFound = await $$(`a=${productData.monitor.name}`)
        expect(elemsFound.length).toBeGreaterThanOrEqual(1)
    });
});