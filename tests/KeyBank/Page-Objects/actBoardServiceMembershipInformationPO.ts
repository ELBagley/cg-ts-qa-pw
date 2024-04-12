import { Page, expect } from "@playwright/test";
import { DateHelper } from "../Fixtures/DateTime"
import { stringify } from "querystring";

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
        const DateFinder = new DateHelper
        let startDateString = ""
        let endDateString = ""
        startDateString = DateFinder.findDate(testData.BoardServiceStartDate) as string
        endDateString = DateFinder.findDate(testData.BoardServiceEndDate) as string
        await this.page.locator('#CG2828314').fill(startDateString)
        await this.page.locator('#CG2828308').fill(endDateString); 
        //await this.page.getByLabel('*Board Service Start Date').fill(startDateString) //id=CG2828314
        //await this.page.keyboard.press('Tab') // close the datepicker widget
        //await this.page.getByLabel('*Board Service End Date').fill(endDate.toString())     //id=CG2828308

        //await this.page.keyboard.press('Tab')

        //await this.page.locator('#CG2828308').fill(endDate.toString()); 
        /*
        //https://playwright.dev/docs/api/class-page#page-event-dialog
        this.page.on('dialog', dialog => {
            expect(dialog.message()).toEqual('File Upload')
            //dialog.
        })
        */
        // https://www.youtube.com/watch?v=Vxt7xzZNqBM
        //codegen
        const page1Promise = this.page.waitForEvent('popup');
        const page1 = await page1Promise;
        await page1.getByLabel('Upload File: Upload Documents').click();
        await page1.getByLabel('Upload File: Upload Documents').setInputFiles('C:\Users\\erica.bagley\\OneDrive - Bonterra\\Documents\\Grant Makers\\_Dummy Files\\11802148_PO_03282023101945.pdf');
        await page1.getByRole('button', { name: 'Upload File' }).click();
        await page1.getByRole('button', { name: 'Close Window' }).click();

        /*
        this.page.on('popup', async popup =>{
            //await newPage.waitForLoadState()
            //const newPage = await Promise;
            await popup.getByLabel('Upload File: Upload Documents').setInputFiles('C:\Users\erica.bagley\OneDrive - Bonterra\Documents\Grant Makers\_Dummy Files\\11802148_PO_03282023101945.pdf');
            await popup.getByRole('button', { name: 'Upload File' }).click();
            await this.page.waitForTimeout(20000);
            await popup.getByRole('button', { name: 'Close Window' }).click();
        })
        */
        await this.page.getByLabel('*Upload Documents').click();
 
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