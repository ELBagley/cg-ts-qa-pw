import { Page, expect } from "@playwright/test";

export class addSignUpForEvent{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    async addSignUpInformation(testData: any){
        //from the Edit Roster action
        await this.page.locator('#donor-search-field').fill('bagley'); // wait for list
        await this.page.getByText('Donor0320 Bagley').click(); // presented in drop down list
        await this.page.getByRole('row', { name: 'Donor0320 Bagley MM/DD/YYYY' }).locator('#CG2828314').fill('03/30/2024'); //start date
        await this.page.getByRole('row', { name: 'Donor0320 Bagley MM/DD/YYYY' }).locator('#CG2828308').fill('03/30/2024'); //end date
        await this.page.getByRole('row', { name: 'Donor0320 Bagley MM/DD/YYYY' }).locator('#CG2827740').selectOption('43741850'); //T-Shirt Large
        // BUG: was not retained with first volunteer add
        //await this.page.getByRole('row', { name: 'DONOR2 BAGLEY MM/DD/YYYY MM/' }).locator('#CG2827740').selectOption('43741850'); //T-Shirt Large
    }
    async deleteAVolunteer(){} // TODO
    async cancelAnEnrollment(){} //TODO
}