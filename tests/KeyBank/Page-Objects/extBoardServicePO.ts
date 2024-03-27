import { Page, expect } from "@playwright/test";
import { examinePortletHelper } from "../Fixtures/ExaminePortlet"

//Page string references
const BoardServicePageReferences = require("../Page-Objects/BoardServicePageReferences")

export class extBoardService extends examinePortletHelper{

    constructor(page: Page) {
        super(page)
    }

    async navigateToBoardServicePage(){
        await this.page.goto("https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10762&x_page=boardservice")
    }

    // PT 97538
    async createBoardServiceMembership(){
        await this.page.getByRole('button', { name: BoardServicePageReferences["portlet1"].PortletTitle, exact: true}).click();
        //await this.page.getByRole('button', { name: BoardServicePageReferences["Portlet1"].PortletTitle, exact: true}).click();
        // transitions to the Search organization page
        // transitions to the Membership Information page
        // transitions to the review Information page with Submit button
        // transitions to the success page with Retrun to Home button

    }
    // PT 97536
    async selectBoardServiceHours(){
        await this.page.getByRole('button', { name: 'Board Service Hours', exact: true}).click();
        // transitions to organization Search
        // transitions to Volunteer Hours Information with save and proceed button
        // transitions to Review Information with Submit button
    }

    // PT 96932
    async selectBoardServiceMatchingGifts(){
        await this.page.getByRole('button', { name: 'Board Service Matching Gifts', exact: true}).click();
        // transitions to organization search for the PT 96932
        // transitions to Offline Donation Information for the PT/organization
        // transitions to specify gift
        // transitions to review information page with Submit button
        //
    }
    // PT 96912
    async redeemDollarsForDoers(){
        await this.page.getByRole('button', { name: 'Redeem', exact: true}).click();
    }
}


