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
    async submitBoardServiceMembership2(testData: any){
        await this.page.getByLabel('*Board Service Start Date').fill(testData.BoardServiceStartDate);
        await this.page.getByLabel('*Board Service End Date').fill(testData.BoardServiceEndDate);
        await this.page.getByLabel('*Upload Documents').click();
        //https://www.youtube.com/watch?v=Vxt7xzZNqBM
        const pagePromise = this.page.waitForEvent('popup')
        const newPage = await pagePromise
        this.page.on('popup', async popup =>{
            await newPage.waitForLoadState()
            //const newPage = await Promise;
            await newPage.getByLabel('Upload File: Upload Documents').click();
            await newPage.getByLabel('Upload File: Upload Documents').setInputFiles('C:\Users\erica.bagley\OneDrive - Bonterra\Documents\Grant Makers\_Dummy Files\\11802148_PO_03282023101945.pdf');
            await newPage.getByRole('button', { name: 'Upload File' }).click();
            await newPage.getByRole('button', { name: 'Close Window' }).click();
        })
        await this.page.getByLabel('Description').fill('automation with upload');
        await this.page.getByRole('button', { name: 'Save and Proceed' }).click();
        //await page.getByRole('button', { name: 'Submit' }).click();
        //await page.getByRole('link', { name: 'Return to Home Page' }).click();
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