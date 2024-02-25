import { Page, expect } from "@playwright/test";

export class Comcast_extPaymentPopup {

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    async selectCreditCard(){
        const CreditCard = ".css-1pn8f3r > a:nth-of-type(1)"
    }
    async selectRecurringPayroll(){
        const CreditCard = ".css-1pn8f3r > a:nth-of-type(2)"
    }
    /*
    const dialog = "div[role='dialog']"
    const Close = ".css-14optbf-Button"
    */
}
