import { Page, expect } from "@playwright/test";
import { examinePortletHelper } from "../Fixtures/ExaminePortlet"



export class extGiving extends examinePortletHelper{

    constructor(page: Page) {
        super(page)
    }
    
    async navigateToGivingpage(){ // NO PAGE TO GO TO??
        await this.page.goto('https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10762&x_page=giving');
    }
    async selectDonateViaCreditCard(){
        // goes to Organization Search with Graphic Balance portlet
        await this.page.getByRole('link', { name: 'Donate via Credit Card' }).click();
    }
    async selectRequestAMatchForAPreviousDonation(){
        // goes to Organization Search with Graphic Balance portlet
    }
    async makeUWCCDonations(){
        // on the UW Giving page select CC donations button
        // fill out the form using data passed in
        //
    }

    //Matching Gifts Balance
    //Matching Gifts History
    //Credit Card Transactions
    //My Nominations
}