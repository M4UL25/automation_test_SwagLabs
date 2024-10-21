import {expect} from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'
import cartPage from '../pageobjects/cart.page.js'
import checkoutPage from '../pageobjects/checkout.page.js'

describe("CHECKOUT INFORMATION", () => {
    beforeEach( async () => {
        // login
        await loginPage.openLoginPage()
        await loginPage.loginProcess("standard_user", "secret_sauce")

        // tambah dan menuju cart
        await inventoryPage.cekCart()

        // checkout page
        await cartPage.btnCheckout.click()
    })

    it("Melanjutkan pembayaran dengan memasukan data informasi pembayaran dengan valid", async () => {
        checkoutPage.inputInformation("maulana", "sandi", 12345)

        await expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-step-two.html")
    })

    it("Kembali menuju ke cart", async () => {
        await checkoutPage.btnCancel.click()

        await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html")
    })

    it("Melanjutkan pembayaran dengan tanpa memasukan data informasi pembayaran", async () => {
        await checkoutPage.inputInformation("","","")

        await expect(checkoutPage.errorMsg).toHaveText(
            expect.stringContaining("First Name is required")
        )
    })

    it("Melanjutkan pembayaran dengan tanpa memasukan data nama depan", async () => {
        await checkoutPage.inputInformation("","sandi", 12345)

        await expect(checkoutPage.errorMsg).toHaveText(
            expect.stringContaining("First Name is required")
        )
    })

    it("Melanjutkan pembayaran dengan tanpa memasukan data nama belakang", async () => {
        await checkoutPage.inputInformation("maulana","", 12345)

        await expect(checkoutPage.errorMsg).toHaveText(
            expect.stringContaining("Last Name is required")
        )
    })

    it("Melanjutkan pembayaran dengan tanpa memasukan data kode pos", async () => {
        await checkoutPage.inputInformation("maulana","sandi","")

        await expect(checkoutPage.errorMsg).toHaveText(
            expect.stringContaining("Postal Code is required")
        )
    })

    it("Melanjutkan pembayaran dengan memasukan data nama depan yang tidak valid", async () => {
        await checkoutPage.inputInformation(12345,"sandi",12345)

        await expect(checkoutPage.errorMsg).toHaveText(
            expect.stringContaining("error")
        )
    })

    it("Melanjutkan pembayaran dengan tanpa memasukan data nama belakang yang tidak valid", async () => {
        await checkoutPage.inputInformation("maulana",12345,12345)

        await expect(checkoutPage.errorMsg).toHaveText(
            expect.stringContaining("error")
        )
    })

    it("Melanjutkan pembayaran dengan tanpa memasukan data kode pos yang tidak valid", async () => {
        await checkoutPage.inputInformation("maulana","sandi","satuDuaTiga")

        await expect(checkoutPage.errorMsg).toHaveText(
            expect.stringContaining("error")
        )
    })

    afterEach( async () => {
        await inventoryPage.cekMenuReset()
    })
})