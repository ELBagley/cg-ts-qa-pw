import { Page, expect } from "@playwright/test";
import { extPageManager }  from "../Page-Objects/extPageManagerPO"

import { examinePortletHelper } from "../Fixtures/ExaminePortlet"
import { fillOutForm } from "../Fixtures/Forms"

export class extUWGiving{
    private readonly curPage: Page
    private readonly PMpage: Page

    constructor(curpage: Page) {
        this.curPage = curpage
    }

    // PT: 97840 United Way - CC Match .5:1, not contractors
    // PT: 97838 United Way Donate Via Credit Card, not contractors
    async createDonateviaCreditCardOT(testData: any){ // can specify a match
        const pm = new extPageManager(this.PMpage)
        await this.curPage.getByRole('link', { name: 'Donate via Credit Card' }).click();
        await pm.useOrganizationSearchPage().searchForOrganization(testData.organizationName) //select organization
        await pm.useCreditCardDonationPage().submitCreditCardOneTimeWithMatch(testData)
    }

    async navigateToUWGivingPage(){ // NO PAGE TO GO TO??
        await this.curPage.goto('https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10762&x_pl_id=50464');
    }
    // 96918 United Way One-Time Payroll Deduction
    async selectMakeAPayrollDonation_UWOT(testData: any){
        const pm = new extPageManager(this.PMpage)
        // call the PayrollDeduction page's makePayrollDeduction() method
        await this.curPage.getByRole('button', { name: 'Make a Payroll Donation' }).click(); //opens deduction options popup
        await this.curPage.getByRole('link', { name: 'United Way One-Time Payroll' }).click();
        await pm.useOrganizationSearchPage().searchForOrganization(testData.organizationName) //select organization
        await pm.usePayrollDeductionPage().makePayrollDeductionRecurring(testData) // return to home page
        
    }
    // 96920 United Way Recurring Payroll Deduction
    async selectMakeAPayrollDonation_UWR(testData: any){
        const pm = new extPageManager(this.PMpage)
        await this.curPage.getByRole('button', { name: 'Request a Match for a Previous Donation' }).click();
        await pm.useOrganizationSearchPage().searchForOrganization(testData.organizationName) //select organization
        await pm.useMatchingGiftsPage().submitMatchingGift(testData)
        //////await this.useCreditCardDonationPage()
        // fill out initial donation
        // land on Organization Search but with Checkout portlet
        //select checkout
        // page: Additional Questions
        //   proceed to review
        // page: Review Infomation
        //   select Submit | Retrun to Home Page | Make a Change
        //

    }

    // 96930 United Way Payroll Match
    async selectRequestaMatchForAPreviousDonation(){ //needs previous donation verification from charity
        await this.curPage.getByRole('link', { name: 'Request a Match for a' }).click();
        // lands on 'Organization Search'
    }
    async checkUnitedWayGiveAgain(ExistingOrganization: string){


    }
    
    // United Way Match Balance (get_balances)
    // United Way Credit Card Transactions (giving History)
    // Payroll Contributions  (giving History)
}