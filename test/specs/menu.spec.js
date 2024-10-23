import {browser, expect} from "@wdio/globals"
import loginPage from "../pageobjects/login.page.js"
import inventoryPage from "../pageobjects/inventory.page.js"

describe("PAGE MENU", () => {
    beforeEach( async () => {
        await loginPage.openLoginPage()
        await loginPage.loginProcess("standard_user", "secret_sauce")

        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html")
    })

    it("Berpindah menuju halaman Produk", async () => {
        await inventoryPage.cekMenuAllItems()

        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html")
    })

    it("Berpindah menuju halaman Tentang Sauce Labs", async () => {
        await inventoryPage.cekMenuAbout()

        await expect(browser).toHaveUrl("https://saucelabs.com/")
    })

    it("Berpindah kembali menuju halaman Login", async () => {
        await inventoryPage.cekMenuLogout()

        await expect(browser).toHaveUrl("https://www.saucedemo.com/")
    })

    it("Mereset kembali halaman Utama", async () => {
        await inventoryPage.addCartOnDetail()
        await expect(inventoryPage.badge).toExist()
        
        await inventoryPage.cekMenuReset()
        await expect(inventoryPage.badge).not.toExist()
    })
})