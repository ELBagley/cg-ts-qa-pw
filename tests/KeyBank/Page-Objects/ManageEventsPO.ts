import { Page, expect } from "@playwright/test";
import { examinePortletHelper } from "../Fixtures/ExaminePortlet"

export class extManageEvents extends examinePortletHelper{

    constructor(page: Page) {
        super(page)
    }
    async createAnEvent(){
        await this.page.getByRole('link', { name: 'Create Event' }).click();
        // lands on organization page

    }
    //candidate for a form helper class using JSON
    async selectAnAction(){
        await this.page.locator('#x-action-select').selectOption('Edit Opportunity');
        //await this.page.locator('#x-action-select').selectOption('View Roster');
        //await this.page.locator('#x-action-select').selectOption('Edit Enrollment');
        //await this.page.locator('#x-action-select').selectOption('Manage Editors');
        //await this.page.locator('#x-action-select').selectOption('Cancel Opportunity');
        //await this.page.locator('#x-action-select').selectOption('E-mail Volunteers');
        //await this.page.locator('#x-action-select').selectOption('Edit Enrollment');
        await this.page.getByRole('button', { name: 'Go' }).click();
        // PAGE: Event Sign Up Information
        await this.page.getByRole('heading', { name: 'Employee Search' }).click();
        await this.page.locator('#donor-search-field').fill('Bagley');
        await this.page.getByText('DONOR2 BAGLEY').click();
        await this.page.locator('#CG2828314').click(); //date widget
        await this.page.getByRole('button', { name: '11' }).click(); //date
        await this.page.locator('#CG2828308').click();
        await this.page.getByRole('button', { name: '12' }).click();
        await this.page.locator('#CG2827740').selectOption('43741848');
        //headers
        await this.page.getByRole('cell', { name: 'Name' }).click();
        await this.page.getByRole('cell', { name: 'Status' }).click();
        await this.page.getByRole('cell', { name: 'Volunteer Start Date' }).click();
        await this.page.getByRole('cell', { name: 'Volunteer End Date' }).click();
        await this.page.getByRole('cell', { name: 'T-Shirt Size' }).click();
        //
        await this.page.getByRole('button', { name: 'Save and Proceed' }).click();

        //page: Volunteer Listing
        await this.page.getByText('Congratulations!Your');
        //headings
        await this.page.getByRole('heading', { name: 'Volunteer Listing' })
        await this.page.getByRole('cell', { name: 'Select' })
        await this.page.getByRole('cell', { name: 'Name' })
        await this.page.getByRole('cell', { name: 'Status' })
        await this.page.getByRole('cell', { name: 'Volunteer Start Date' })
        await this.page.getByRole('cell', { name: 'Volunteer End Date' })
        await this.page.getByRole('cell', { name: 'T-Shirt Size' })
        // end headings
        await this.page.locator('.cell').first().click();//selection checkbox
        await this.page.getByRole('cell', { name: 'DONOR2 BAGLEY' }).click();
        await this.page.getByRole('cell', { name: 'You are enrolled in this event' }).click();
        await this.page.getByRole('cell', { name: '/11/2024' }).click();
        await this.page.getByRole('cell', { name: '/12/2024' }).click();
        await this.page.getByRole('cell', { name: 'Medium' }).click();
        //verification
        await this.page.getByRole('cell', { name: '1 Total Enrolled Volunteers (' }).click();
        await this.page.getByRole('link', { name: 'Return to Event' }).click();
    }
}