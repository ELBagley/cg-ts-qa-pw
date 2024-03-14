import { Page, expect } from "@playwright/test";
import { examinePortletHelper } from "../Fixtures/ExaminePortlet"

export class extVolunteerHours{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async addVolunteerHours(startDate: string, endDate: string, volunteeredHours: string, addDescription: string){
        // from Volunteer => Log your Hours => organization
        // std this.page but for a specific PT and Organization
        await this.page.getByLabel('*Volunteer Start Date').fill(''); // activates widget
        await this.page.getByRole('button', { name: startDate}).click();
        await this.page.getByLabel('*Volunteer End Date').click(); // activates widget
        await this.page.getByRole('button', { name: endDate }).click(); 
        await this.page.getByLabel('Hours Volunteered').fill(volunteeredHours);
        await this.page.getByLabel('Description').fill(addDescription);
        //Employee Resource Groups (list)
        //*Designation Required (Donor)
        //*Certification (Gift)
        //"I Certify"
        await this.page.getByRole('button', { name: 'Save and Proceed' }).click();
        await this.page.getByRole('button', { name: 'Submit' }).click();
        await this.page.getByRole('link', { name: 'Return to Home this.page' }).click();
        // returned to Board Service 
    };
}
