import { Page, expect } from "@playwright/test";

export class AddEmployeeToTeam{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    //URL: https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_evt.formcheck?x_gm_id=10762

    async addEmployeeVolunteerInformation(testData: any){
        await this.page.getByRole('cell', {name: "MM/DD/YYY"}).fill(testData.VolunteerStartDate);
        await this.page.getByLabel('*Volunteer End Date').fill(testData.VolunteerEndDate);
        await this.page.getByLabel('T-Shirt size').fill(testData.hoursVolunteered);
        await this.page.getByRole('button', { name: 'Save and Proceed' }).click();
        // transitions to the Review Information page with Submit button
        // transitions to the Successful page with the Retun to Home Page button
        // returned to 
    };
}
