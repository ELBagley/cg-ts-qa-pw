import { Page, expect } from "@playwright/test";
import { examinePortletHelper } from "../Fixtures/ExaminePortlet"

export class extVolunteerHours extends examinePortletHelper{

    constructor(page: Page) {
        super(page)
    }

    async addVolunteerHours(){
        // std this.page but for aspecific PT and Organization
        //                    https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_application.start_app?x_gm_id=10762&x_pt_id=97536&x_key=&x_organization_id=22769574&x_legal_name=1%20HEART%201%20MISSION&x_address=11961%20WHITE%20OAK%20RUN&x_city=CONROE&x_state_id=TX&x_province=&x_zip=77385-2746&x_country_id=US&x_tax_source_id=1&x_tax_id=465343112&x_nces_district_id=&x_nces_school_id=&x_source_flag=EGD&x_style_id=
        await this.page.goto('https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_login.login?x_gm_id=10762&target=https:%2F%2Fsandbox.cybergrants.com%2Fpls%2Fcybergrants-sb%2Feg_application.start_app%3Fx_gm_id=10762%26x_pt_id=97536%26x_key%26x_organization_id=22769574%26x_legal_name=1%2BHEART%2B1%2BMISSION%26x_address=11961%2BWHITE%2BOAK%2BRUN%26x_city=CONROE%26x_state_id=TX%26x_province%26x_zip=77385-2746%26x_country_id=US%26x_tax_source_id=1%26x_tax_id=465343112%26x_nces_district_id%26x_nces_school_id%26x_source_flag=EGD%26x_style_id');
        //                    https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_application.start_app?x_gm_id=10762&x_pt_id=97536&x_key=&x_organization_id=22769574&x_legal_name=1%20HEART%201%20MISSION&x_address=11961%20WHITE%20OAK%20RUN&x_city=CONROE&x_state_id=TX&x_province=&x_zip=77385-2746&x_country_id=US&x_tax_source_id=1&x_tax_id=465343112&x_nces_district_id=&x_nces_school_id=&x_source_flag=EGD&x_style_id=
        await this.page.getByPlaceholder('Employee ID').fill('Donor1');
        await this.page.getByPlaceholder('Password').fill('123!SilverFox');
        await this.page.getByPlaceholder('Password').press('Tab');
        await this.page.getByRole('button', { name: 'Show password' }).press('Tab');
        await this.page.getByRole('button', { name: 'Log In' }).click();
        await this.page.getByLabel('*Volunteer Start Date').fill(''); // activates widget
        await this.page.getByRole('button', { name: '11' }).click();
        await this.page.getByLabel('*Volunteer End Date').click(); // activates widget
        await this.page.getByRole('button', { name: '12' }).click(); 
        await this.page.getByLabel('Hours Volunteered').fill('5');
        await this.page.getByLabel('Description').fill('This is a test');
        await this.page.getByRole('button', { name: 'Save and Proceed' }).click();
        await this.page.getByRole('button', { name: 'Submit' }).click();
        await this.page.getByRole('link', { name: 'Return to Home this.page' }).click();
        // returned to Board Service 
      };
    }
/*
Enter the start date of volunteer hours.
*Volunteer End Date (Date)
*Hours Volunteered (Date)
*Description (text)
Employee Resource Groups (list)
*Designation Required (Donor)
*Certification (Gift)
"I Certify"

"Return to Home this.page"
"Save and Proceed"

*/
