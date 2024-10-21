import {expect} from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'

describe("DETAIL PRODUCT", () => {
    beforeEach( async () => {
        await loginPage.openLoginPage()
        await loginPage.loginProcess("standard_user", "secret_sauce")

        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html")
    })

    it("Melihat detail Produk", async () => {
        await inventoryPage.productName.click()

        await expect(inventoryPage.btnBackProduct).toHaveText(
            expect.stringContaining("Back to products")
        )
    })
})