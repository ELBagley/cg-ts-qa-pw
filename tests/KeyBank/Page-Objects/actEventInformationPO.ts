import { Page, expect } from "@playwright/test";

export class eventInformation{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    // portlets
    // event search (vc_search_responsive)
    // Event Calendar (vc_event_calendar)
    // My Upcoming Events (giving_history)
    //    "Recorded Hours" (get giving history)
    //    "My Nominations" ()
    // My Completed Events ()
        // "Recorded Hours" (get giving history)
        // "My Nominations" ()


    //candidate for helper form class using JSON data 
    async createAnEvent (newEventData: any){
        await this.page.getByLabel('*Opportunity Title').fill(newEventData.opportunityTitle);
        await this.page.getByLabel('*Event Frequency').selectOption(newEventData.eventFrequency); 
        await this.page.locator('#CG2828586_start_date').fill(newEventData.startDate); 
        await this.page.locator('#CG2828586_end_date').fill(newEventData.endDate); 
        await this.page.getByLabel('Signup Deadline').fill(newEventData.signupDeadline);
        await this.page.getByLabel('*Description').fill(newEventData.eventDescription);
        await this.page.getByLabel('Event Type').selectOption(newEventData.eventType); // Community
        await this.page.getByLabel('Skills').selectOption(newEventData.selectSkills); //Children & Family
        await this.page.locator('#cgcontent').click();
        await this.page.getByLabel('*Maximum Number of Volunteers').fill(newEventData.maxVolunteers);
        await this.page.getByLabel('Allow Waitlist?').selectOption(newEventData.allowWaitlist);
        await this.page.getByLabel('Are Friends and Family').selectOption(newEventData.IncludeFriendsandFamily);
        await this.page.getByLabel('Allow Auto-Logging Hours Flag').selectOption(newEventData.allowAutoLoginHours);
        await this.page.getByLabel('Venue').fill(newEventData.describeVenue);
        await this.page.getByLabel('*Country').selectOption(newEventData.whatCountry);
        await this.page.getByLabel('*Address').fill(newEventData.whatAddress);
        await this.page.getByLabel('*City').fill(newEventData.whatCity);
        await this.page.getByLabel('*State').selectOption(newEventData.whatState);
        await this.page.getByLabel('*ZIP/Postal Code').fill(newEventData.whatZip);
        await this.page.getByLabel('*Team Leader First Name').fill(newEventData.teamLeaderFirstName);
        await this.page.getByLabel('*Team Leader Last Name').fill(newEventData.teamLeaderLastName);
        await this.page.getByLabel('*Team Leader E-mail Address').fill(newEventData.teamLeaderEmail);
        await this.page.getByLabel('Telephone').fill(newEventData.teamLeaderTelephone);
        await this.page.getByRole('button', { name: 'Save and Proceed' }).click();
        /*
        await this.page.getByRole('heading', { name: 'Review Information' }).click();
        await this.page.getByRole('button', { name: 'Submit' }).click();
        */
    }
    async addvolunteersToEvent(){
        
    }
}