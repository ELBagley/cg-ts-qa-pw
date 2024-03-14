import { Page, expect } from "@playwright/test";

export class ReviewInformation{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    //PAGE URL  https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_req.formcheck?x_gm_id=10762
    async fillReviewInformation(CreditCardData: any){
        await this.page.getByRole('heading', { name: 'Review Information' });
        await this.page.locator('#rccDropdown').selectOption('One-time payment for the full amount');
        //await this.page.locator('#rccDropdown').selectOption('MONTHLY');
        //await this.page.locator('#rccDropdown').selectOption('QUARTERLY');
        //await this.page.locator('#rccDropdown').selectOption('ANNUALLY');
        await this.page.getByRole('textbox', { name: '*Street Address' }).fill(CreditCardData.streetAddress);
        await this.page.getByRole('textbox', { name: 'Street Address 2' }).fill(CreditCardData.streetAddress2);
        await this.page.getByRole('textbox', { name: '*City' }).fill(CreditCardData.city);
        await this.page.locator('#MailingAddress__state__ggid1').selectOption(CreditCardData.mailingAddress);
        await this.page.getByRole('textbox', { name: '*ZIP Code' }).fill(CreditCardData.zipCode);
        await this.page.getByLabel('Name on Card').fill(CreditCardData.cardName);
        await this.page.getByLabel('Credit Card Number').fill(CreditCardData.creditCardNumber);
        await this.page.getByLabel('Verification Code').fill(CreditCardData.verificationCode);
        await this.page.getByLabel('Expiration Month').selectOption(CreditCardData.expirationMonth);
        await this.page.getByLabel('Expiration Year').selectOption(CreditCardData.expirationYear);
        await this.page.getByRole('button', { name: 'Submit' }).click();
        //on submission successful page. Does this work?
        //await this.page.getByRole('link', { name: 'Return to Home Page' }).click();

        /* todo: TEXT NEEDS VERIFICATION
        await this.page.locator('#summary-calculation').getByText('USD').click();
        await this.page.getByText('annual (1 per year)', { exact: true }).click();
        await this.page.getByText('USD - estimated yearly donation').click();
        await this.page.getByText('USD - estimated yearly donation').click();
        await this.page.locator('#estimated-total').click();
        */
    }
}