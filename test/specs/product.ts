import ProductPage from  '../pageobjects/product.page'

describe('Product component', () => {
    it('Should correctly search for items on the phone page', async () => {
        await ProductPage.open();

        await ProductPage.selectProductType('Phones')
        const elemsFound = await $$(`a=${'Sony xperia z5'}`)
        expect(elemsFound.length).toBeGreaterThanOrEqual(1)
    });

    it('Should correctly search for items on the Laptops page', async () => {
        await ProductPage.open();

        await ProductPage.selectProductType('Laptops')
        const elemsFound = await $$(`a=${'Sony vaio i5'}`)
        expect(elemsFound.length).toBeGreaterThanOrEqual(1)
    });

    it('Should correctly search for items on the Monitors page', async () => {
        await ProductPage.open();

        await ProductPage.selectProductType('Monitors')
        const elemsFound = await $$(`a=${'ASUS Full HD'}`)
        expect(elemsFound.length).toBeGreaterThanOrEqual(1)
    });
});