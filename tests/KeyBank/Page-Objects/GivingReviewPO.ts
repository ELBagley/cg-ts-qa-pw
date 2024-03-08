import { Page, expect } from "@playwright/test";

export class GivingReview{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    async CreateInitialDonation(GiftAmount: string, MatchAmount: string){
        await this.page.getByLabel('*Total Gift Amount').fill(GiftAmount);
        await this.page.getByLabel('Match Amount Requested').fill(MatchAmount);
        await this.page.getByLabel('Privacy Preference').selectOption('ANONYMOUS');
        await this.page.getByLabel('I have read the terms and').check();
        await this.page.getByRole('button', { name: 'Save and Proceed' }).click();
    }
}
