import { Page, expect } from "@playwright/test";
import { examinePortletHelper } from "../Fixtures/ExaminePortlet"

export class extDisasterRelief extends examinePortletHelper{

    constructor(page: Page) {
        super(page)
    }
    async selectDonationOrganization(OrganizationName: string){
        //titles are on the 
        await this.page.getByText(OrganizationName).getByRole('link', { name: 'Donate Today' }).click();
        //await this.page.locator('#cg550576').getByRole('link', { name: 'Donate Today' }).click(); //Project Hope
        //await this.page.locator('#cg550580').getByRole('link', { name: 'Donate Today' }).click(); //Feeding America
        //await this.page.locator('#cg550578').getByRole('link', { name: 'Donate Today' }).click(); //International Medical Corps
        //await this.page.locator('#cg550574').getByRole('link', { name: 'Donate Today' }).click(); //DirectRelief
        // lands on organization Search
    }
    async selectDonateWith1to1Match(){
        await this.page.getByRole('link', { name: 'Donate with 1:1 Match' }).click();
        // lands on organization Search
    }
    async selectDonateWith2to1Match(){
        await this.page.getByRole('link', { name: 'Donate with 2:1 Match' }).click();
        // lands on organization Search
    }
    async selectContributeAgain(){
        //needs recent donations
    }
}