import { Page, expect } from "@playwright/test";

export class DonorMatching{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    async matchAPreviousDonation (testData: any){
        //await this.page.getByRole('link', { name: 'Request a Match for a' }).click();
        //await this.page.getByLabel('Select 1 HEART 1 MISSION').click();
        await this.page.getByPlaceholder('MM/DD/YYYY').fill(testData.originalGiftDate); // when was gift given
        await this.page.getByLabel('*Total Gift Amount').fill(testData.originalGiftAmount);
        if(testData.matchAmountRequested != 0){
            await this.page.getByLabel('Match Amount Requested').fill(testData.matchAmountRequested);
        }
        
        await this.page.getByLabel('*Gift Payment Method').selectOption(testData.giftPaymentmethod);
        await this.page.getByLabel('Designation').fill(testData.designation);
        await this.page.getByLabel('Privacy Preference').selectOption(testData.privacyPreference);
        await this.page.getByLabel('*Recognition Name').fill(testData.recognitionName);
        await this.page.getByLabel('*Recognition E-mail').fill(testData.recognitionEmail);
        await this.page.getByLabel('I have read the terms and').check();
        await this.page.getByRole('button', { name: 'Save and Proceed' }).click();
        // transitions to Review Information page with Submit
        // 
    }
    async offlineDonationInformation(testData: any){
        await this.page.getByPlaceholder('MM/DD/YYYY').fill(testData.originalGiftDate); // when was gift given
        await this.page.getByLabel('*Total Gift Amount').fill(testData.originalGiftAmount);
        await this.page.getByLabel('Amount').fill(testData.matchAmountRequested);
        await this.page.getByLabel('Designation').fill(testData.designation);
        await this.page.getByLabel('Privacy Preference').selectOption(testData.privacyPreference);
        await this.page.getByLabel('I have read the terms and').check();
        await this.page.getByRole('button', { name: 'Save and Proceed' }).click();
    }
}