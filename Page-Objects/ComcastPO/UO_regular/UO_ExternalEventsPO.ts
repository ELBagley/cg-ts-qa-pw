import { Page, expect } from "@playwright/test"
import { examinePortletHelper } from "../../ComcastPO/ExaminePortlet"

const eventsPage = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=7272&x_page=uo_create_events"

export class UO_ExternalEvents extends examinePortletHelper{

    constructor(page: Page) {
        super(page)
    }

    async navigateToEventsPage (){
        await this.page.goto(eventsPage)
    }

}