import {$} from "@wdio/globals";

class OverviewPage {
    // element lecators
    get btnCancel() {return $("button#cancel")}
    get btnFinish() {return $("button#finish")}
    
    // page actions

}

export default new OverviewPage()