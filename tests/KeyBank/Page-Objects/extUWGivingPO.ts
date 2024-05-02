import { Page, expect } from "@playwright/test";
import { extPageManager }  from "../Page-Objects/extPageManagerPO"

import { examinePortletHelper } from "../Fixtures/ExaminePortlet2"


// Closed campaign: Sept 1 to Dec 10th
// 26 and 12 pay periods
// not contractors

//PORTLETS
// United Way Match Balance (get_balances)
// United Way Credit Card Transactions (giving History)
// Payroll Contributions  (giving History)

export class extUWGiving extends examinePortletHelper{

    constructor(page: Page) {
        super(page)
    }
    async navigateToUWGivingPage(){ // NO PAGE TO GO TO??
        await this.page.goto('https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10762&x_pl_id=50464');
    }

    // PT: 97840 United Way - CC Match .5:1, not contractors
    // PT: 97838 United Way Donate Via Credit Card, not contractors
    async createDonateViaCreditCardOT(testData: any){ // can specify a match
        const pm = new extPageManager(this.page)
        await this.page.getByRole('link', { name: 'Donate via Credit Card' }).click();


    }

    // 96918 United Way One-Time Payroll Deduction
    async selectMakeAPayrollDeduction_UWOT(testData: any){
        const pm = new extPageManager(this.page)
        // call the PayrollDeduction page's makePayrollDeduction() method
        await this.page.getByRole('link', { name: 'Make a Payroll Donation' }).click(); //opens deduction options popup
        //await this.page.getByRole('link', { name: 'United Way One-Time Payroll Deduction' }).click();
    }
    // 96920 United Way Recurring Payroll Deduction
    async selectMakeAPayrollDeduction_UWR(testData: any){
        const pm = new extPageManager(this.page)
        await this.page.getByRole('link', { name: 'Make a Payroll Donation' }).click(); //opens deduction options popup
        //await this.page.getByRole('link', { name: 'United Way Recurring Payroll Deduction' }).click();
    }
    
    // 96930 United Way Payroll Match
    async selectRequestaMatchForAPreviousDonation(testData: any){ //needs previous donation verification from charity
        const pm = new extPageManager(this.page)
        await this.page.getByRole('link', { name: 'Request a Match for a' }).click();
        await pm.useOrganizationSearchPage().selectOrganization(testData.organizationName,"") //select organization
        await pm.useBoardServiceMatchingGiftsPage().submitBoardServiceMatch(testData)
    }
    //TODO: select from previus organizations
    async checkUnitedWayGiveAgain(ExistingOrganization: string){

    }

}