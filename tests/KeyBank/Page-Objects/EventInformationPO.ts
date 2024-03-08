import { Page, expect } from "@playwright/test";

export class eventInformation{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    //candidate for helper form class using JSON data 
    async createAnEvent (){
        await this.page.getByLabel('*Opportunity Title').fill('SQA TEST EVENT');
        await this.page.getByLabel('*Event Frequency').selectOption('N'); // Y | N
        await this.page.locator('#CG2828586_start_date').click(); //activate widget
        await this.page.getByRole('button', { name: '11' }).click(); //select date
        await this.page.locator('#CG2828586_end_date').click(); //activate widget
        await this.page.getByRole('button', { name: '15' }).click(); //select date
        await this.page.getByLabel('Signup Deadline').click(); //activate widget
        await this.page.getByRole('button', { name: '11' }).click(); //select date
        await this.page.getByLabel('*Description').fill('TEST description');
        await this.page.getByLabel('Event Type').selectOption('22830'); // Community
        await this.page.getByLabel('Skills').selectOption('2827806|633192'); //Children & Family
        await this.page.locator('#cgcontent').click();
        await this.page.getByLabel('*Maximum Number of Volunteers').fill('5');
        await this.page.getByLabel('Allow Waitlist?').selectOption('Y');
        await this.page.getByLabel('Are Friends and Family').selectOption('Y');
        await this.page.getByLabel('Allow Auto-Logging Hours Flag').selectOption('Y');
        await this.page.getByLabel('Venue').fill('Central Park');
        await this.page.getByLabel('*Country').selectOption('US');
        await this.page.getByLabel('*Address').fill('123 Main street');
        await this.page.getByLabel('*City').fill('Boston');
        await this.page.getByLabel('*State').selectOption('MA');
        await this.page.getByLabel('*ZIP/Postal Code').fill('01810');
        await this.page.getByLabel('*Team Leader First Name').fill('Erica');
        await this.page.getByLabel('*Team Leader Last Name').fill('Bagley');
        await this.page.getByLabel('*Team Leader E-mail Address').fill('erica.bagley@bonterratech.com');
        await this.page.getByLabel('Telephone').fill('9995558888');
        await this.page.getByRole('button', { name: 'Save and Proceed' }).click();
        /*
        await this.page.getByRole('heading', { name: 'Review Information' }).click();
        await this.page.getByRole('button', { name: 'Submit' }).click();
        */

    }
}