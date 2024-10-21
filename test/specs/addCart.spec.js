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
        await expect(inventoryPage.bedge).toBeEnabled()
    })

    it("Menambahkan barang ke keranjang pada halaman utama", async () => {
        await inventoryPage.btnAddToCartHome.click()

        await expect(inventoryPage.bedge).toBeEnabled()
    })

    it.skip("Menghapus barang di keranjang pada halaman detail produk", async () => {
        const productName = $(`div[data-test="inventory-item-name"]`)
        await productName.click()

        const btnAddToCart = $("button#add-to-cart")
        await btnAddToCart.click()
    })

    it.skip("Menghapus barang di keranjang pada halaman utama", async () => {
        const btnAddToCartHome = $("button#add-to-cart-sauce-labs-backpack")
        await btnAddToCartHome.click()
    })

    afterEach( async () => {
        const btnBurger = $("Button#react-burger-menu-btn")
        await btnBurger.click()

        const btnReset = $("a#reset_sidebar_link")
        await btnReset.click()
    })

})