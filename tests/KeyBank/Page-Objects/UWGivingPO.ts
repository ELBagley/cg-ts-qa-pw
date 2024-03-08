import { Page, expect } from "@playwright/test";
import { examinePortletHelper } from "../Fixtures/ExaminePortlet"

export class extUWGiving extends examinePortletHelper{

    constructor(page: Page) {
        super(page)
    }
    
    async navigateToUWGivingpage(){ // NO PAGE TO GO TO??
        await this.page.goto('https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10762&x_pl_id=50464');
    }
    async selectMakeAPayrollDonation(){

    }
    async selectDonateviaCreditCard(){

    }
    async selectRequestaMatchForAPreviousDonation(){

    }
    // United Way Match Balance (get_balances)
    // United Way Credit Card Transactions (giving History)
    // Payroll Contributions  (giving History)
}