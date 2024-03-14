import { Page, expect } from "@playwright/test";
import { extPageManager }  from "../Page-Objects/extPageManagerPO"

import { examinePortletHelper } from "../Fixtures/ExaminePortlet"

export class CreditCardDonation{
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    // condidate for helper class for forms using JSON data
    async submitCreditCardOneTime(CreditCardData: any){
        const pm = new extPageManager(this.page)
        await this.page.getByLabel('*Total Gift Amount').fill(CreditCardData.donationAmount);
        if(CreditCardData.matchAmount != "0"){
            await this.page.getByLabel('Match Amount Requested').fill(CreditCardData.matchAmount);
        }
        await this.page.getByLabel('Designation').fill(CreditCardData.donationDesignation);
        await this.page.getByLabel('Privacy Preference').selectOption(CreditCardData.privacyPreference);
        await this.page.getByLabel('I have read the terms and').check();
        await this.page.getByRole('button', { name: 'Save and Proceed' }).press('Enter');

        // need to add credit card details on Review Information Page
        //await pm.useReviewInformationPage().fillReviewInformation(CreditCardData)
    }
    //TODO: Complete this function
    async submitCreditCardRecurring(CreditCardData: any){
        // test should have the credit card details page presented
      }
}
