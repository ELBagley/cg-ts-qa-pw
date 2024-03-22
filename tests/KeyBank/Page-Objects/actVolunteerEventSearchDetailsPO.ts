import { Page, expect } from "@playwright/test";

export class searchVolunteerOrgWithDetails{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    async selectFromPresentedEvents(testData: any){
        // may be mor than one event
        await this.page.locator('#faceted-search-results').getByText("Opportunity Test 2").isVisible()
        await this.page.getByRole('button', { name: 'Sign Up' }).first().click();
        // transitions to Event Information page with Sign Up button
        // transitions to "Event Sign Up Information" page
        // can search for employee in the Add emplyee to team field. Just type and pop up select is presented
        // once selected needs information; start and end data and T-Shirt
        // await this.page.getByRole('button', { name: 'Save and Proceed' }).click();
    }
    //
    // Using this search requires knowing what events are to be presented given the criteria in the json file
    // defaults from Volunteer Search page
    //
    async searchForEventWithDetails(testData: any){
        //await this.page.goto('https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_srch_dyn.searchcheck?x_gm_id=10762&x_search_table=eg_event&x_source_flag=EGD&x_source_proc=eg_portal.home?x_gm_id=10762&x_style_id=&x_source_flag=EGD&x_style_id&x_zip&x_radius=30&x_virtual_flag&x_event_type_id&x_pt_id=96926&x_cause_id_arr');
        await this.page.getByPlaceholder('Keyword(s)').fill('cat');
        
        await this.page.getByRole('link', { name: 'Cause' }).click(); // open section
        await this.page.getByLabel('Community Improvement &').check();
        // 
        await this.page.getByRole('link', { name: 'Location' }).click(); // open section
        await this.page.getByText('Country', { exact: true }).click();
        await this.page.getByLabel('Illinois (1)').check();
        await this.page.getByPlaceholder('Zip/Postal Code').fill('01810');
        await this.page.getByLabel('Event Location Type').selectOption('A'); //In-Person and Virtual Events
        await this.page.getByText('miles').click();
        await this.page.locator('.range-slider').first().click(); // cannot edit, slider not accurate

        await this.page.getByRole('link', { name: 'Event Type' }).click();  // open section
        await this.page.getByLabel('Community (1)').check();

        await this.page.getByRole('link', { name: 'Skills' }).click(); // open section
        await this.page.getByLabel('Sports & Recreation (1)').check();
        
        await this.page.getByRole('link', { name: 'Interests' }).click(); // open section
        await this.page.getByLabel('Immigrants & Refugees (1)').check();
        
        await this.page.getByRole('link', { name: 'Date' }).click(); // open section
        await this.page.getByLabel('Start Date').fill('03/20/2024');
        await this.page.getByLabel('End Date').fill('03/30/2024');

        await this.page.getByRole('link', { name: 'Time' }).click(); // open section
        await this.page.locator('#x_min_start_time').selectOption('08:30');
        await this.page.locator('#x_max_end_time').selectOption('19:00');
        
        await this.page.getByRole('link', { name: 'Availability' }).click(); // open section
        await this.page.getByText('Include Waitlisted Events').click();
        
        await this.page.getByRole('link', { name: 'Is this event led or' }).click();  // open section
        await this.page.getByLabel('African Heritage (1)').check();
        //await this.page.getByLabel('Parents Are Key (1)').check();
        //await this.page.getByLabel('Jewish Cultural (1)').check();
        //await this.page.getByLabel('Champion Of People with').check();

        // transitions to the Review Information page with Submit button
        // transitions to the Successful page with the Retun to Home Page button
        // returned to Board Service 
    };
}
