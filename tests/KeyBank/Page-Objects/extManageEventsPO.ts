import { Page, expect } from "@playwright/test";
import { examinePortletHelper } from "../Fixtures/ExaminePortlet2"

export class extManageEvents extends examinePortletHelper{

    constructor(page: Page) {
        super(page)
    }
    async navigateToManageEventsPage(){
        await this.page.goto("https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10762&x_page=eventmanagement")

    }
    async createAnEvent(){
        await this.page.getByRole('link', { name: 'Create Event' }).click();
        // lands on organization page
    }
}