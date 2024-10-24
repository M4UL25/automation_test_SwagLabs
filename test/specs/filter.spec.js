import {$$, browser, expect} from "@wdio/globals"
import { isAscending, isDescending} from "../helper/sorting.js"
import loginPage from "../pageobjects/login.page.js"
import inventoryPage from "../pageobjects/inventory.page.js"

describe("FILTER PRODUK",() => {
    beforeEach( async () => {
        loginPage.openLoginPage()
        loginPage.loginProcess("standard_user", "secret_sauce")
        
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html")
    })

    it("Menyaring produk dari huruf A ke Z", async () => {
        const allNameProduct = inventoryPage.getAllNameProduct()
        const allNameProductAscend = isAscending(allNameProduct)
        
        await expect(allNameProductAscend).toBe(true)
    })

    it("Menyaring produk dari huruf Z ke A", async () => {
        inventoryPage.changeFilterZtoA()

        const allNameProduct = inventoryPage.getAllNameProduct()
        const allNameProductDescend = isDescending(allNameProduct)

        await expect(allNameProductDescend).toBe(true)
    })

    it("Menyaring produk dari harga rendah ke tinggi", async () => {
        inventoryPage.changeFilterLohi()

        const allPriceProduct = inventoryPage.getAllPriceProduct()
        const allPriceProductAscend = isAscending(allPriceProduct)
        
        await expect(allPriceProductAscend).toBe(true)
    })

    it("Menyaring produk dari harga tinggi ke rendah", async () => {
        inventoryPage.changeFilterLohi()

        const allPriceProduct = inventoryPage.getAllPriceProduct()
        const allPriceProductAscend = isDescending(allPriceProduct)
        
        await expect(allPriceProductAscend).toBe(true)
    })

    afterEach( async () => {
        await inventoryPage.cekMenuReset()
    })
})