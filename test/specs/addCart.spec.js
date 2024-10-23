import {expect} from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'

describe("ADD TO CART", () => {
    beforeEach( async () => {
        await loginPage.openLoginPage()
        await loginPage.loginProcess("standard_user", "secret_sauce")

        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html")
    })

    it("Menambahkan barang ke keranjang pada halaman detail produk", async () => {
        await inventoryPage.addCartOnDetail()

        await expect(inventoryPage.badge).toBeEnabled()
    })

    it("Menambahkan barang ke keranjang pada halaman utama", async () => {
        await inventoryPage.btnAddToCartHome.click()

        await expect(inventoryPage.badge).toBeEnabled()
    })

    it("Menghapus barang di keranjang pada halaman detail produk", async () => {
        await inventoryPage.addCartOnDetail()
        await expect(inventoryPage.badge).toExist()

        await inventoryPage.btnRemoveCart.click()
        await expect(inventoryPage.badge).not.toExist()
    })

    it("Menghapus barang di keranjang pada halaman utama", async () => {
        await inventoryPage.btnAddToCartHome.click()
        await expect(inventoryPage.badge).toExist()

        await inventoryPage.btnRemoveCartHome.click()
        await expect(inventoryPage.badge).not.toExist()
    })

    afterEach( async () => {
        await inventoryPage.cekMenuReset()
    })

})