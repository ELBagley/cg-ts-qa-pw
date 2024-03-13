import { Page, expect } from "@playwright/test";

export class MatchingGifts {

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    async submitMatchingGift(MatchingGiftdInformation: any){
        //DUMMY ACTION SO METHOD IS RECOGNIZED
        await this.page.getByRole('link', { name: 'Matching Gifts', exact: true }).click();
    }
}
