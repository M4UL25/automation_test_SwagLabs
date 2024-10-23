import {browser, expect} from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'
import cartPage from '../pageobjects/cart.page.js'

describe("CART", () => {
    beforeEach( async () => {
        // login
        await loginPage.openLoginPage()
        await loginPage.loginProcess("standard_user", "secret_sauce")

        // tambah dan menuju cart
        await inventoryPage.cekCart()
    })

    it("Melanjutkan untuk berbelanja", async () => {
        await cartPage.btnContinueShop.click()

        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html")
    })

    it("Menghapus barang pada keranjang", async () => {
        await expect(inventoryPage.badge).toExist()
        await cartPage.btnRemoveCart.click()
        
        await expect(inventoryPage.badge).not.toExist()
    })

    it("Melanjukan untuk pembayaran", async () => {
        await cartPage.btnCheckout.click()

        await expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-step-one.html")
    })

    afterEach( async () => {
        await inventoryPage.cekMenuReset()
    })
})