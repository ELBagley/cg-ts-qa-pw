import { Page, expect } from "@playwright/test";
import { examinePortletHelper } from "../Fixtures/ExaminePortlet"

export class extVolunteer extends examinePortletHelper{

    constructor(page: Page) {
        super(page)
    }
    async selectLogYourHours(){
        await this.page.getByRole('link', { name: 'Log Your Hours' }).click();
        // goes to organizational search for PT 96916
        // then to Volunteer Hours Information
    }

    // event search (vc_search_responsive)
    // Event Calendar (vc_event_calendar)
    // My Upcoming Events (giving_history)
    //    "Recorded Hours" (get giving history)
    //    "My Nominations" ()
    // My Completed Events ()
        // "Recorded Hours" (get giving history)
        // "My Nominations" ()
}