import { Page, expect } from "@playwright/test";
import { examinePortletHelper } from "../Fixtures/ExaminePortlet"

export class extUWGiving extends examinePortletHelper{
    constructor(page: Page) {
        super(page)
    }
    
    async navigateToUWGivingpage(){ // NO PAGE TO GO TO??
        await this.page.goto('https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10762&x_pl_id=50464');
    }
    async selectMakeAPayrollDonation_UWOT(){
        // call the PayrollDeduction page's makePayrollDeduction() method
        await this.page.getByRole('button', { name: 'Make a Payroll Donation' }).click();
        await this.page.getByRole('link', { name: 'United Way One-Time Payroll' }).click();
        await this.page.getByRole('heading', { name: 'Organization Search' }).click();
        await this.page.getByRole('button', { name: 'Close' }).click();
        // lands on 'Organization Search'
    }
    async selectMakeAPayrollDonation_UWR(){
        await this.page.getByRole('button', { name: 'Make a Payroll Donation' }).click();
        await this.page.getByRole('link', { name: 'United Way Giving' }).click();
        await this.page.getByRole('button', { name: 'Close' }).click();
        // lands on 'Organization Search'
    }
    async selectDonateviaCreditCard(){
        await this.page.getByRole('link', { name: 'Donate via Credit Card' }).click();
        // lands on 'Organization Search'
    }
    async selectRequestaMatchForAPreviousDonation(){
        await this.page.getByRole('link', { name: 'Request a Match for a' }).click();
        // lands on 'Organization Search'
    }
    async checkUnitedWayGiveAgain (){


    }
    
    // United Way Match Balance (get_balances)
    // United Way Credit Card Transactions (giving History)
    // Payroll Contributions  (giving History)
}