import { Page, expect } from "@playwright/test";

export class CreditCardDonation{
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    /*
    96924 Donate Now Via Credit Card One Time or Recurring, all employees
    96928 Credit Card Match 1:1, all employees
    97838 United Way Donate Via Credit Card, not contractors
    97840 United Way - CC Match .5:1, not contractors
    // OneTimeOption, ANNUALLY, QUARTERLY, MONTHLY
    */

    // condidate for helper class for forms using JSON data
    async submitCreditCardInformation(){
        // add total Gift Amount
        // enter match amount requested
        // add descignation
        // select Provacy reference
        // check the terms checkbox
        // press "Save and Proceed"
        await this.page.locator('#rccDropdown').selectOption('oneTimeOption'); // ANNUALLY, QUARTERLY, MONTHLY
        await this.page.getByRole('textbox', { name: '*Street Address' }).fill('12 Main St');
        await this.page.getByRole('textbox', { name: '*City' }).fill('Andover');
        await this.page.locator('#MailingAddress__state__ggid1').selectOption('MA');
        await this.page.getByRole('textbox', { name: '*ZIP Code' }).fill('01810');
        // first payment defaulted to today (date widget)
        // end date (date widget)
        await this.page.getByLabel('Name on Card').fill('Erica Bagley');
        await this.page.getByLabel('Credit Card Number').fill('6011000990139424');
        await this.page.getByLabel('Verification Code').fill('275');
        //month = 03
        await this.page.getByLabel('Expiration Year').selectOption('2028');
        // !!must verify You Have Chosen text with estimated donation
        
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }
}
