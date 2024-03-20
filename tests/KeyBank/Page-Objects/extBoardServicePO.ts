import { Page, expect } from "@playwright/test";
import { examinePortletHelper } from "../Fixtures/ExaminePortlet"

export class extBoardService extends examinePortletHelper{

    constructor(page: Page) {
        super(page)
    }
    async navigateToBoardServicePage(){
        await this.page.goto("https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10762&x_page=boardservice")
    }
    async verifyD4Dportlet(){
        
    }
    async selectBoardServiceHours(){
        // goes to organization search for the PT 97536
        //await this.page.goto("https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_search.search_screen?x_gm_id=10762&x_pt_id=97536&x_source_flag=EGD&x_search_mode=B&x_source_proc=")
        //select organization
        //form Volunteer Hours Information
        //  organization selectd
        //  Volunteer start Date, end Date, hours volunteered, Description
        //page: Review Information
        //  Return to Home Page, Make a change, Submit
        //page: Submission Successful
        //  reference number created
        //  Return to Home Page
    }
    async selectBoardServiceMembership(){
        await this.page.goto('https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10762&x_page=boardservice');
        await this.page.getByRole('link', { name: 'Board Service Membership' }).click();
        await this.page.getByPlaceholder('Organization Name').click();
        await this.page.getByPlaceholder('Organization Name').fill('21ST CENTURY FUND FOR DELAWARES CHILDREN INC');
        await this.page.getByPlaceholder('Organization Name').press('Enter');

        //await this.this.page.getByPlaceholder('Organization Name').fill('https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10762&x_page=boardservice');
        await this.page.getByPlaceholder('Organization Name').press('Shift+Home');
        await this.page.getByLabel('Select 21ST CENTURY FUND FOR').click();
        await this.page.getByLabel('*Board Service Start Date').click();
        await this.page.getByLabel('*Board Service Start Date').fill('03/20/2024');
        await this.page.getByLabel('*Board Service End Date').fill('03/29/2024');
        await this.page.getByLabel('Description').fill('Board Service test');
        await this.page.getByRole('button', { name: 'Save and Proceed' }).click();

        await this.page.getByRole('heading', { name: 'Review Information' }).click();
        await this.page.getByRole('button', { name: 'Submit' }).click();

        //await this.this.page.getByRole('heading', { name: 'Submission Successful' }).click();
        //await this.this.page.getByRole('link', { name: 'Return to Home Page' }).click();
        // goes to organization search for the PT 97538
        //https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_search.search_screen?x_gm_id=10762&x_pt_id=97538&x_source_flag=EGD&x_search_mode=B&x_source_proc=
        //then Volunteer Hours Infomation for the PT and the organization
        //https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_application.start_app?x_gm_id=10762&x_pt_id=97538&x_key=&x_organization_id=22769574&x_legal_name=1%20HEART%201%20MISSION&x_address=11961%20WHITE%20OAK%20RUN&x_city=CONROE&x_state_id=TX&x_province=&x_zip=77385-2746&x_country_id=US&x_tax_source_id=1&x_tax_id=465343112&x_nces_district_id=&x_nces_school_id=&x_source_flag=EGD&x_style_id=
        //Form: Volunteer Hours Information
        //  start Date, end date, upload File, Description
        //page: Review Information
        //  Return to Home Page, Make a change, Submit
        //page: Submission Successful
        //  reference number created
        //  Return to Home Page
    }
    async selectBoardServiceMatchingGifts(){
        // goes to organization search for the PT 96932
        // then Offline Donation Information for the PT/organization
    }

}


