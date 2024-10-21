import {$} from "@wdio/globals"

class LoginPage {
    // element lecators
    get inputUsername() {return $("input#user-name")}
    get inputPassword() {return $("input#password")}
    get btnLogin() {return $("input#login-button")}
    get errorMsg() {return $(`h3[data-test="error"]`)}

    // page actions
    openLoginPage = async () => {
        await browser.url("https://www.saucedemo.com/")
    }

    loginProcess = async (username, password) => {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnLogin.click()
    }

}

export default new LoginPage()