import { Page, expect } from "@playwright/test";

export class VolunteerHours{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async addVolunteerHours(testData: any){
        await this.page.getByLabel('*Volunteer Start Date').fill(testData.VolunteerStartDate);
        await this.page.getByLabel('*Volunteer End Date').fill(testData.VolunteerEndDate);
        await this.page.getByLabel('Hours Volunteered').fill(testData.hoursVolunteered);
        await this.page.getByLabel('Description').fill(testData.Description);
        await this.page.getByRole('button', { name: 'Save and Proceed' }).click();
        // transitions to the Review Information page with Submit button
        // transitions to the Successful page with the Retun to Home Page button
        // returned to Board Service 
    };
}
