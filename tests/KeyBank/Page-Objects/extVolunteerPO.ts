import { Page, expect } from "@playwright/test";
import { examinePortletHelper } from "../Fixtures/ExaminePortlet"

export class extVolunteer extends examinePortletHelper{

    constructor(page: Page) {
        super(page)
    }
    async navigateToVolunteer(){
        await this.page.goto("https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10762&x_page=volunteer")
    }
    async selectLogYourHours(){
        await this.page.getByRole('link', { name: 'Log Your Hours' }).click();
        // goes to organizational search for PT 96916
        // then to Volunteer Hours Information
    }
    async searchForAnEvent(testData: any){
        await this.page.getByPlaceholder('Zip/Postal Code').fill(testData.serachZip);
        await this.page.getByLabel('Distance').selectOption(testData.searchMiles);
        await this.page.getByLabel('Event Location Type').selectOption(testData.EventLocaitonType); //In-Person and Virtual Events
        await this.page.getByLabel('Event Type').selectOption(testData.searchEventType); //Community
        await this.page.getByLabel('Type', { exact: true }).selectOption(testData.searchType); //Sign Up
        await this.page.getByLabel('Cause').selectOption(testData.searchCause); // community Inprovement & Capacity Building
        await this.page.getByRole('button', { name: 'Search' }).click();
        // transitions to the actVolunteerEventSearchDetailsPO Page
        // search for an event or the search presents already found based on previous search
    }
    
}