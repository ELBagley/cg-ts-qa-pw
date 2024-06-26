import { Page, expect } from "@playwright/test";
import { examinePortletHelper } from "../Fixtures/ExaminePortlet2"

export class extHome extends examinePortletHelper{

    constructor(page: Page) {
        super(page)
    }
    async navigateToHome(){
        await this.page.goto("https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10762&x_page=home")
    }
    async selectBTNGiving(){
        await this.page.locator('#10762').getByRole('link', { name: 'Giving' }).click();
    }
    async selectBTNVolunteer(){
        await this.page.locator('#10762').getByRole('link', { name: 'Volunteer' }).click();
    }
}



