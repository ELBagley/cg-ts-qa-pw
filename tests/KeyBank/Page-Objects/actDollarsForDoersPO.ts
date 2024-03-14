import { Page, expect } from "@playwright/test";
import { examinePortletHelper } from "../Fixtures/ExaminePortlet"

export class extDollarsForDoers{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    
    async navigateToD4Dpage(){ // NO PAGE TO GO TO??
        await this.page.goto('https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10762&x_page=home');
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