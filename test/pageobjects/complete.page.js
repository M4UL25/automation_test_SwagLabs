import {$} from "@wdio/globals"

class CompletePage {
    // element lecators
    get btnBackHome() {return $("button#back-to-products")}

    // page actions
}

export default new CompletePage()