import { Page, expect } from "@playwright/test";
import { examinePortletHelper } from "../Fixtures/ExaminePortlet"

export class extBoardService extends examinePortletHelper{

    constructor(page: Page) {
        super(page)
    }
    async navigateToBoardServicePage(){
        await this.page.goto("https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10762&x_page=boardservice")
    }
    // PT 97538
    async createBoardServiceMembership(testData: any){
        await this.page.getByRole('button', { name: 'Board Service Membership', exact: true}).click();
        // transitions to the Search organization page
        // transitions to the Membership Information page
        // transitions to the review Information page with Submit button
        // transitions to the success page with Retrun to Home button

    }
    async selectBoardServiceHours(){
        await this.page.getByRole('button', { name: 'Board Service Hours', exact: true}).click();
        // transitions to organization Search
        // transitions to Volunteer Hours Information with save and proceed button
        // transitions to Review Information with Submit button
    }

    //PT 96932
    async selectBoardServiceMatchingGifts(){
        await this.page.getByRole('button', { name: 'Board Service Matching Gifts', exact: true}).click();
        // goes to organization search for the PT 96932
        // then Offline Donation Information for the PT/organization
        // specify gift
        // review information page with Submit button
        //
    }
}


