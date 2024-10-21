import { expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'

describe("LOGIN", () => {
    beforeEach( async () =>{
        await loginPage.openLoginPage()
    })

    it("Login dengan memasukkan username dan password yang valid", async () => {
        await loginPage.loginProcess("standard_user", "secret_sauce")

        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html")
    })

    it("Login dengan tanpa memasukan username dan password", async () => {
        await loginPage.loginProcess("","")

        await expect(loginPage.errorMsg).toHaveText(
            expect.stringContaining("Username is required")
        )
    })

    it("Login dengan tanpa memasukan username", async () => {
        await loginPage.loginProcess("", "secret_sauce")

        await expect(loginPage.errorMsg).toHaveText(
            expect.stringContaining("Username is required")
        )
    })

    it("Login dengan tanpa memasukan password", async () => {
        await loginPage.loginProcess("standard_user", "")

        await expect(loginPage.errorMsg).toHaveText(
            expect.stringContaining("Password is required")
        )
    })

    it("Login dengan memasukan username tidak valid namun password valid", async () => {
        await loginPage.loginProcess("123456", "secret_sauce")

        await expect(loginPage.errorMsg).toHaveText(
            expect.stringContaining("Username and password do not match")
        )
    })

    it("Login dengan memasukan password tidak valid namun username valid", async () => {
        await loginPage.loginProcess("standard_user", "123456")

        await expect(loginPage.errorMsg).toHaveText(
            expect.stringContaining("Username and password do not match")
        )
    })
})


