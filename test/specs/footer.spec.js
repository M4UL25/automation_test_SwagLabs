import {browser, expect} from "@wdio/globals"
import loginPage from "../pageobjects/login.page.js"
import inventoryPage from "../pageobjects/inventory.page.js"

describe("FOOTER PAGE", () => {
    beforeEach( async () => {
        await loginPage.openLoginPage()
        await loginPage.loginProcess("standard_user", "secret_sauce")

        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html")
    })

    it("Menuju Halaman Twitter Sauce Labs", async () => {
        await inventoryPage.cekTwitter()

        await expect(inventoryPage.nameAccountTwitter).toHaveText("Sauce Labs")
    })

    it("Menuju Halaman Facebook Sauce Labs", async () => {
        await inventoryPage.cekFacebook()

        await expect(inventoryPage.nameAccountFacebook).toHaveText("Sauce Labs")
    })

    it("Menuju Halaman Linkedin Sauce Labs", async () => {
        await inventoryPage.cekLinkedin()

        await expect(inventoryPage.nameAccountLinkedin).toHaveText("Sauce Labs")
    })

})