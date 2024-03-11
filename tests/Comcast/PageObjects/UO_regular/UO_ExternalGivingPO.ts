import { Page, expect } from "@playwright/test"

import { examinePortletHelper } from "../ExaminePortlet"

const givingPage = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=7272&x_page=uo_giving"

export class UO_ExternalGiving extends examinePortletHelper{

    constructor(page: Page) {
        super(page)
    }
    /**
     * 
     * @param pageURL - the location of the external portal page to visit but first must log in
     */
    async navigateToGivingPage (){
        await this.page.goto(givingPage)
    }
    async gotoWorkplaceGiving(){
        const btnWorkplaceGivingProgram = ".button.primaryAction"
        await this.page.locator(btnWorkplaceGivingProgram).click() //UO_ExternalCampaignPO
    }
    async gotoWorkplaceDonate(){
        const btnDonateToday = ".button.primaryAction"
        await this.page.locator(btnDonateToday).click()
        //https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_search.search_screen?x_gm_id=7272&x_pt_id=56360&x_source_flag=EGD&x_search_mode=B&x_source_proc=
    }
    
    async selectBtnGiveToday(){
        await this.page.getByRole('link', { name: 'Give Today' }).click();
        //URL: https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=7272&x_pl_id=43934
        // text: A Culture of Giving
        await this.page.getByRole('link', { name: 'Workplace Giving Program' }).click();
        //3 portlet buttons
        await this.page.getByText('Current Payroll Contribution').click();
        await this.page.getByText('Matching Gifts Donor Balance').click();
        await this.page.getByText('Credit Card Transaction').click();
        //Compassion Fund card's "credit card button"
        await this.page.locator('#cg446476').getByRole('link', { name: 'Credit Card' }).click();
        // page text: One-time Credit Card Donation Information
        await this.page.getByLabel('*Total Donation Amount').fill('25');
        await this.page.getByLabel('*Do you want to request a').selectOption('Y');
        await this.page.getByLabel('*Match Amount Requested').fill('20');
        await this.page.getByRole('checkbox', { name: 'I agree to the terms' }).check();
        await this.page.getByRole('button', { name: 'Save and Proceed' }).click();
        // navigate to CC information page (text: Review Infomation)
        await this.page.goto('https://sandbox.cybergrants.com/pls/cybergrants-sb/!cc_application.process_sphere_response?x_gm_id=7272&x_key=31206040&x_key_type=eg_request&token=NWRmMzAyODFlNTlmMjkwNDUyYWExNjAwZjM0NjY3MDQ%3D&action=sale&returnurl=https%3A%2F%2Fsandbox.cybergrants.com%2Fpls%2Fcybergrants-sb%2F%21cc_application.process_sphere_response%3Fx_gm_id%3D7272%26x_key%3D31206040%26x_key_type%3Deg_request&amount=25.00&reqmediatype=y&avs=n&demo=y&customfield1=31206040&customfield2=7272&customfield3=eg_request&store=n&cc=9424&exp=0328&cvv=&name=erica+bagley&address1=123+Main&city=Andover&state=MASSACHUSETTS&zip=01810&hash=736a5b53e514c53f37a15854288345e5ab811990');
        await this.page.getByLabel('*Credit Card Number:').fill('6011000990139424');
        await this.page.getByLabel('*Expiration Date (MMYY):').fill('0328');
        await this.page.getByLabel('*CVV (?)').fill('275');
        await this.page.getByLabel('*Name on Card').fill('erica bagley');
          await this.page.getByLabel('*Address:').fill('123 Main');
          await this.page.getByLabel('*City:').fill('Andover');
          await this.page.getByLabel('*State/Province:').fill('MASSACHUSETTS');
          await this.page.getByLabel('*Zip/Postal Code:').fill('01810');
          //submit
          
          await this.page.getByRole('link', { name: 'Return to Home Page' }).click();
        };


}



