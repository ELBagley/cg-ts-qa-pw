import { Page, expect } from "@playwright/test";

export class DonorMatching{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    async matchAPreviousDonation (matchData: any){
        //await this.page.getByRole('link', { name: 'Request a Match for a' }).click();
        //await this.page.getByLabel('Select 1 HEART 1 MISSION').click();
        await this.page.getByPlaceholder('MM/DD/YYYY').fill('02/02/2024'); // when was gift given
        await this.page.getByLabel('*Total Gift Amount').fill('25');
        await this.page.getByLabel('Match Amount Requested').fill('25');
        await this.page.getByLabel('*Gift Payment Method').selectOption('Credit Card');
        await this.page.getByLabel('Designation').fill('TEST of request a match');
        await this.page.getByLabel('Privacy Preference').selectOption('ANONYMOUS');
        await this.page.getByLabel('*Recognition Name').fill('Erica');
        await this.page.getByLabel('*Recognition E-mail').fill('erica.bagley@cybergrants.com');
        await this.page.getByLabel('I have read the terms and').check();

        /* PAGE: Donor Matching Gift  - Graphical portlet information
        await this.page.getByRole('heading', { name: 'Current 2024 Match Balance' }).click();
        await this.page.getByText('$1,898.00').click();
        await this.page.getByText('remaining', { exact: true }).click();
        await this.page.getByText('remaining from $').click();
        await this.page.getByText('$2,000.00').click();
        */
        await this.page.getByRole('button', { name: 'Save and Proceed' }).click();
        await this.page.getByRole('heading', { name: 'Review Information' }).click();
        await this.page.getByRole('button', { name: 'Submit' }).click();
        await this.page.getByRole('link', { name: 'Return to Home Page' }).click();

    }
}