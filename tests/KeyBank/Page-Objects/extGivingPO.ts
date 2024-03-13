import { Page, expect } from "@playwright/test";
import { examinePortletHelper } from "../Fixtures/ExaminePortlet"



export class extGiving extends examinePortletHelper{

    constructor(page: Page) {
        super(page)
    }
    
    async navigateToGivingpage(){ // NO PAGE TO GO TO??
        await this.page.goto('https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10762&x_page=giving');
    }
    // pass in the name of the data file not the JSON string
    async selectDonateViaCreditCard(DonationDataFile: string){
        // goes to Organization Search with Graphic Balance portlet
        await this.page.getByRole('link', { name: 'Donate via Credit Card' }).click();
        // select organization

    }
    async selectRequestAMatchForAPreviousDonation(){
        await this.page.getByRole('link', { name: 'Request a Match for a' }).click();
        // goes to Organization Search with Graphic Balance portlet
    }
    
    // portlets
    //Matching Gifts Balance
    //Matching Gifts History
    //Credit Card Transactions
    //My Nominations
}