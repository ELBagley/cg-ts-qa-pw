import { Page, expect } from "@playwright/test";
import { examinePortletHelper } from "../Fixtures/ExaminePortlet2"

export class extDisasterRelief extends examinePortletHelper{

    constructor(page: Page) {
        super(page)
    }
    async navigateToDisasterRelief(){
        await this.page.goto("https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10762&x_page=disasterrelief")
    }
    // If CURLANG is ENG then KeyBank_DR_ENG.json
    // numOrganizations: 4,
    // organizationNameArray: ["Project Hope", "Feeding America", "International Medical Corps", "Direct Relief"],
    // 
    // numOrganizationActions: 2,
    // organizationActionArray: ["Donate Today", "Request a Match for a Previous Donation"],
    // "Donate Today": "",
    // "Request a Match for a Previous Donation": "",
    //
    // numSpecialButtons: 2,
    // specialButtonArray: ["Donate with 1:1 Match", "Donate with 2:1 Match"],
    // * INCASE OF L10N
    // "Donate with 1:1 Match": "",
    // "Donate with 2:1 Match: " "

    async selectDonateTodayOrganization(OrganizationName: string){
        // organization names are on the page's cards; credit card donation
        await this.page.getByText(OrganizationName).getByRole('link', { name: 'Donate Today' }).click();
        if (OrganizationName == "Project Hope"){
            await this.page.locator('#cg550576').getByRole('link', { name: 'Donate Today' }).click(); //Project Hope
        }
        else if (OrganizationName == "Feeding America"){
            await this.page.locator('#cg550580').getByRole('link', { name: 'Donate Today' }).click(); //Feeding America
        }
        else if (OrganizationName == "International Medical Corps"){
            await this.page.locator('#cg550578').getByRole('link', { name: 'Donate Today' }).click(); //International Medical Corps
        }
        else if (OrganizationName == "Direct Relief"){
            await this.page.locator('#cg550574').getByRole('link', { name: 'Donate Today' }).click(); //DirectRelief
        }
        // transitions to Credit Card Donation Information
    }

    async selectRequestAMatchOrganization(OrganizationName: string){
        // organization names are on the page's cards; credit card donation
        await this.page.getByText(OrganizationName).getByRole('link', { name: 'Donate Today' }).click();
        if (OrganizationName == "Project Hope"){
            await this.page.locator('#cg550576').getByRole('link', { name: 'Request a Match for a' }).click(); //Project Hope
        }
        else if (OrganizationName == "Feeding America"){
            await this.page.locator('#cg550580').getByRole('link', { name: 'Request a Match for a' }).click(); //Feeding America
        }
        else if (OrganizationName == "International Medical Corps"){
            await this.page.locator('#cg550578').getByRole('link', { name: 'Request a Match for a' }).click(); //International Medical Corps
        }
        else if (OrganizationName == "Direct Relief"){
            await this.page.locator('#cg550574').getByRole('link', { name: 'Request a Match for a' }).click(); //DirectRelief
        }
        // transitions to Offline Donation Information
    }    
    /*
        await page.locator('#cg550574').getByRole('link', { name: 'Donate Today' }).click();
        await page.getByRole('heading', { name: 'Credit Card Donation' }).click();

        await page.getByLabel('*Amount').click();
        await page.getByLabel('Match Amount Requested').click();
        await page.getByLabel('Designation').click();
        await page.getByRole('link', { name: 'Return to Home Page' }).click();
    */

    
    async selectDonateWith1to1Match(){
        await this.page.getByRole('link', { name: 'Donate with 1:1 Match' }).click();
        // transitions to organization Search
    }
    async selectDonateWith2to1Match(){
        await this.page.getByRole('link', { name: 'Donate with 2:1 Match' }).click();
        // transitions to organization Search
    }
    async selectContributeAgainOrganization(){
        //needs more code for multiple previous donations
        await this.page.getByRole('link', { name: 'Donate again' }).first().click();
    }
}