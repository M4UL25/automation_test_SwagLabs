import {expect} from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'
import cartPage from '../pageobjects/cart.page.js'
import checkoutPage from '../pageobjects/checkout.page.js'
import overviewPage from '../pageobjects/overview.page.js'


describe("OVERVIEW", () => {
    beforeEach( async () => {
        // login
        await loginPage.openLoginPage()
        await loginPage.loginProcess("standard_user", "secret_sauce")

        // tambah dan menuju cart
        await inventoryPage.cekCart()

        // checkout page
        await cartPage.btnCheckout.click()

        // input information
        await checkoutPage.inputInformation("maulana", "sandi", 12345)
    })

    it("Menyelesaikan pembayaran produk", async () => {
        await overviewPage.btnFinish.click()

        await expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-complete.html")
    })

    it("Membatalkan pembayaran dan kembali ke halaman utama", async () =>{
        await overviewPage.btnCancel.click()

        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html")
    })

})