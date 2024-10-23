import {$, browser} from "@wdio/globals"
import { isAscending, isDescending } from "../helper/sorting.js"

class InventoryPage {
    // element lecators
    get btnTwitter() {return $(`a[data-test="social-twitter"]`)}
    get nameAccountTwitter() {return $("span=Sauce Labs")}
    get btnFacebook() {return $(`a[data-test="social-facebook"]`)}
    get nameAccountFacebook() {return $("h1=Sauce Labs")}
    get btnLinkedin() {return $(`a[data-test="social-linkedin"]`)}
    get nameAccountLinkedin() {return $("h1=Sauce Labs")}
    get allProductElementName() {return $$(`div[data-test="inventory-item-name"]`)}
    get btnBurger() {return $("button#react-burger-menu-btn")}
    get btnAllItems() {return $("a#inventory_sidebar_link")}
    get btnAbout() {return $("a#about_sidebar_link")}
    get btnLogout() {return $("a#logout_sidebar_link")}
    get productName() {return $(`div[data-test="inventory-item-name"]`)}
    get btnBackProduct() {return $("button#back-to-products")}
    get btnAddToCart() {return $("button#add-to-cart")}
    get btnAddToCartHome() {return $("button#add-to-cart-sauce-labs-backpack")}
    get badge() {return $(`span[data-test="shopping-cart-badge"]`)}
    get btnCart() {return $(`a[data-test="shopping-cart-link"]`)}
    get btnRemoveCart() {return $("button#remove")}
    get btnRemoveCartHome() {return $("button#remove-sauce-labs-backpack")}
    get btnReset() {return $("a#reset_sidebar_link")}

    // page actions
    cekTwitter = async () => {
        await browser.scroll(0,1000)
        await this.btnTwitter.click();
        await browser.switchWindow("https://x.com/saucelabs")
    }

    cekFacebook = async () => {
        await browser.scroll(0,1000)
        await this.btnFacebook.click();
        await browser.switchWindow("https://www.facebook.com/saucelabs")
    }

    cekLinkedin = async () => {
        await browser.scroll(0,1000)
        await this.btnLinkedin.click();
        await browser.switchWindow("https://www.linkedin.com/company/sauce-labs")
    }

    filterAtoZ = async () => {
        // 
    }

    cekMenuAllItems = async () => {
        await this.btnBurger.click()
        await this.btnAllItems.click()
    }

    cekMenuAbout = async () => {
        await this.btnBurger.click()
        await this.btnAbout.click()
    }

    cekMenuReset = async () => {
        await this.btnBurger.click()
        await this.btnReset.click()
    }

    cekMenuLogout = async () => {
        await this.btnBurger.click()
        await this.btnLogout.click()
    }

    addCartOnDetail = async () => {
        await this.productName.click()
        await this.btnAddToCart.click()
    }

    cekCart = async () => {
        await this.btnAddToCartHome.click()
        await this.btnCart.click()
    }

}

export default new InventoryPage()