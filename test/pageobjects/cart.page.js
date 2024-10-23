import {$} from "@wdio/globals"

class CartPage {
    // element lecators
    get btnContinueShop() {return $("button#continue-shopping")}
    get btnCheckout() {return $("button#checkout")}
    get btnRemoveCart() {return $("button#remove-sauce-labs-backpack")}

    // page actions
}

export default new CartPage()