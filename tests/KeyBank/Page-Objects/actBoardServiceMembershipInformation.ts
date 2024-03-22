import { Page, expect } from "@playwright/test";
import { examinePortletHelper } from "../Fixtures/ExaminePortlet"

export class BoardServiceMembershipInformation{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    
    async submitBoardServiceMemberhip(testData: any){ 
        await this.page.getByLabel('*Board Service Start Date').fill(testData.BoardServiceStartDate);
        await this.page.getByLabel('*Board Service End Date').fill(testData.BoardServiceEndDate);
        await this.page.getByLabel('Description').fill(testData.description);
        await this.page.getByRole('button', { name: 'Save and Proceed' }).click();
    }

/*
D4D redemption status

My Submitted Hours
Dollars for Doers History
My Nominations

"Add Hours" button
goes to "Organization Search"
goes to "Volunteer Hours Information"
then submit
*/
}