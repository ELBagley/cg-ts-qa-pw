import { Page, expect } from "@playwright/test";
import { extPageManager }  from "../Page-Objects/extPageManagerPO"
import { examinePortletHelper } from "../Fixtures/ExaminePortlet"

    // portlets
    //Matching Gifts Balance
    //Matching Gifts History
    //Credit Card Transactions
    //My Nominations

export class extGiving extends examinePortletHelper{

    constructor(page: Page) {
        super(page)
    }
    
    async navigateToGivingPage(){ // NO PAGE TO GO TO??
        await this.page.goto('https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10762&x_page=giving');
    }
    // PT: 96924 Donate Now Via Credit Card One Time or Recurring
    // PT: 96928 Credit Card Match
    async selectDonateViaCreditCard(CreditCardDonationData: any){
        // goes to Organization Search with Graphic Balance portlet
        const pm = new extPageManager(this.page)
        await this.page.getByRole('link', { name: 'Donate via Credit Card' }).click();
        await pm.useOrganizationSearchPage().selectOrganization(CreditCardDonationData.organizationName) //select organization
        await pm.useCreditCardDonationPage().submitCreditCardOneTime(CreditCardDonationData)

    }
    // PT: 96922 Request a Match for a Previous Donation
    async selectRequestAMatchForAPreviousDonation(CreditCardDonationData: any){
        await this.page.getByRole('link', { name: 'Request a Match for a' }).click();
        // goes to Organization Search with Graphic Balance portlet
    }
    

}