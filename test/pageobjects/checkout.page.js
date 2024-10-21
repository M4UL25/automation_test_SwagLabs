import {$} from "@wdio/globals"

class CheckoutPage {
    // element lecators
    get inputFirstName() {return $("input#first-name")}
    get inputLastName() {return $("input#last-name")}
    get inputPostalCode() {return $("input#postal-code")}
    get btnCancel() {return $("button#cancel")}
    get btnContinue() {return $("input#continue")}
    get errorMsg() {return $(`h3[data-test="error"]`)}

    // page actions
    inputInformation = async (firstName, lastName, postalCode) => {
        await this.inputFirstName.setValue(firstName)
        await this.inputLastName.setValue(lastName)
        await this.inputPostalCode.setValue(postalCode)
        await this.btnContinue.click()
    }
}

export default new CheckoutPage()