import {$} from "@wdio/globals"

class CartPage {
    // element lecators
    get btnContinueShop() {return $("button#continue-shopping")}
    get btnCheckout() {return $("button#checkout")}

    // page actions
}

export default new CartPage()