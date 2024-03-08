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

    }
    async selectRequestAMatchForAPreviousDonation(){
        // goes to Organization Search with Graphic Balance portlet
        // then "Donor Matching Gift Information" with Graphic Balance Portlet
        // https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_application.start_app?x_gm_id=10762&x_pt_id=96922&x_key=&x_organization_id=22769574&x_legal_name=1%20HEART%201%20MISSION&x_address=11961%20WHITE%20OAK%20RUN&x_city=CONROE&x_state_id=TX&x_province=&x_zip=77385-2746&x_country_id=US&x_tax_source_id=1&x_tax_id=465343112&x_nces_district_id=&x_nces_school_id=&x_source_flag=EGD&x_style_id=
        // then save and proceed based on payment method
        //then "Review Information"
        //then "Confirm with Charity"

    }

    //Matching Gifts Balance
    //Matching Gifts History
    //Credit Card Transactions
    //My Nominations
}