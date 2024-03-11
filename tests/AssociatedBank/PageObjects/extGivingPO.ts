import { Page, expect } from "@playwright/test";

const extGivingPage = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10582&x_page=giving"

export class extGivingPO{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
 
    async navigateToGivingPage (){
        const pageTitle = "Employee Personal Giving"
        await this.page.goto(extGivingPage)
        expect(this.page.locator(extGivingPage).getByText(pageTitle)).toBeTruthy()
    }

    async ExternalPortalLogin(){
        /*
        "Tab1Row0": "[data-url='eg_portlet_data\.get_giving_history\?x_mod_id\=538714\&x_language_code\=en-US'] .css-gatevb"
        "Tab1Row1": "[data-url='eg_portlet_data\.get_giving_history\?x_mod_id\=538714\&x_language_code\=en-US'] .css-xi606m"
    
        "Tab2Row0": "[data-url='eg_portlet_data\.get_giving_history\?x_mod_id\=545948\&x_language_code\=en-US'] .css-gatevb"
        "Tab2Row1": "[data-url='eg_portlet_data\.get_giving_history\?x_mod_id\=545948\&x_language_code\=en-US'] .css-xi606m"
    
        "Tab3Row0": "[data-url='eg_portlet_data\.get_giving_history\?x_mod_id\=538616\&x_language_code\=en-US'] .css-gatevb
        "Tab3Row1": "[data-url] tbody [class=' css-1db6t2d']:nth-of-type(1)
        "Tab3Row2": "tbody > tr:nth-of-type(2) 
        "Tab3Row3": "tbody > tr:nth-of-type(3)
        "Tab3Row4": "tbody > tr:nth-of-type(4)
    
        "Tab4Row0": " "
        */

        //login page is presented
        await this.page.goto('https://associatedbank.okta.com/app/associatedbank_cybergrants_1/exkpxxhgcuP6y4YOf2p7/sso/saml');
        await this.page.getByPlaceholder('Employee ID').fill('Donor1');
        await this.page.getByPlaceholder('Password').fill('123!SilverFox');
        await this.page.getByPlaceholder('Password').press('Enter');
    }
    async makeDonation(){
        await this.page.getByRole('link', { name: 'Donate Now' }).click();
    }
    async verifyGivingPortlets(){}


}