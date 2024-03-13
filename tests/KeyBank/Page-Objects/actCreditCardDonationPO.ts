import { Page, expect } from "@playwright/test";
import {fillOutForm} from "../Fixtures/Forms"

export class CreditCardDonation extends fillOutForm {

    constructor(page: Page) {
        super(page)
    }
    // condidate for helper class for forms using JSON data
    async submitCreditCardOneTimeWithMatch(CreditCardInformation: any){
        await this.page.getByLabel('*Total Gift Amount').fill(CreditCardInformation.paymentAmount);
        await this.page.getByLabel('Match Amount Requested').fill(CreditCardInformation.matchAmount);
        await this.page.getByLabel('Designation').fill('TEST');
        await this.page.getByLabel('Privacy Preference').selectOption('ANONYMOUS');
        await this.page.getByLabel('I have read the terms and').check();

        await this.page.getByRole('link', { name: 'Return to Home Page' }).press('Tab');
        await this.page.getByRole('button', { name: 'Save and Proceed' }).press('Enter');

        await this.page.getByRole('textbox', { name: '*Street Address' }).fill('12 Main St');
        await this.page.getByRole('textbox', { name: '*City' }).fill('Andover');
        await this.page.locator('#MailingAddress__state__ggid1').selectOption('Massachusetts');
        await this.page.getByRole('textbox', { name: '*ZIP Code' }).fill('01969');
        await this.page.getByLabel('Name on Card').fill('Erica Bagley');
        await this.page.getByLabel('Credit Card Number').fill('6011000990139424');
        await this.page.getByLabel('Verification Code').fill('275');
        await this.page.getByLabel('Expiration Month').selectOption('03');
        await this.page.getByLabel('Expiration Year').selectOption('2024');
        await this.page.getByRole('button', { name: 'Submit' }).click();
        await this.page.getByRole('link', { name: 'Return to Home Page' }).click();
    }
}
