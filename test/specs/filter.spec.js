import {$$, browser, expect} from "@wdio/globals"
import { isAscending, isDescending } from "../helper/sorting.js"

describe("FILTER PRODUK", () => {
    beforeEach( async () => {
        await browser.url("https://www.saucedemo.com/")

        const inputUsername = $("input#user-name")
        await inputUsername.setValue("standard_user")

        const inputPassword = $("input#password")
        await inputPassword.setValue("secret_sauce")

        const btnLogin = $("input#login-button")
        await btnLogin.click()
        
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html")
    })

    it("Menyaring produk dari huruf A ke Z", async () => {
        const allProductElement = await $$(`div[data-test="inventory-item-name"]`)

        const allNameProduct = []

        for(const productName of allProductElement){
            const nameProduct = await productName.getText()
            allNameProduct.push(nameProduct)
        }

        const allNameProductAscend = isAscending(allNameProduct)
        await expect(allNameProductAscend).toBe(true)
    })

    it("Menyaring produk dari huruf Z ke A", async () => {
        const btnFilter = $(`select[data-test="product-sort-container"]`)
        await btnFilter.click()

        const btnZtoA = btnFilter.$(`[value="za"]`)
        await btnZtoA.click()

        const allProductElement = await $$(`div[data-test="inventory-item-name"]`)

        const allNameProduct = []

        for(const productName of allProductElement){
            const nameProduct = await productName.getText()
            allNameProduct.push(nameProduct)
        }
        
        console.log(allNameProduct);
        const allNameProductDescend = isDescending(allNameProduct)
        await expect(allNameProductDescend).toBe(true)
    })

    it.skip("Menyaring produk dari harga rendah ke tinggi", async () => {
        const btnFilter = $(`select[data-test="product-sort-container"]`)
        await btnFilter.click()

        const btnLohi = btnFilter.$(`[value="lohi"]`)
        await btnLohi.click()

        const allPriceElement = await $$(`div[data-test="inventory-item-price"]`)

        const allPriceProduct = []

        for(const priceProduct of allPriceElement){
            const productPrice = priceProduct.getText()
            allPriceProduct.push(productPrice)
        }

        console.log(allPriceProduct)
        // await expect(test).toEqual(7)
    })

    it.skip("Menyaring produk dari harga tinggi ke rendah", async () => {
        const btnFilter = $(`select[data-test="product-sort-container"]`)
        await btnFilter.click()

        const btnHilo = btnFilter.$(`[value="hilo"]`)
        await btnHilo.click()

        const allPriceElement = await $$(`div[data-test="inventory-item-price"]`)

        const allPriceProduct = []

        for(const priceProduct of allPriceElement){
            const productPrice = priceProduct.getText()
            allPriceProduct.push(productPrice)
        }

        console.log(allPriceProduct)
        // await expect(test).toEqual(7)
    })
})