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

    
}