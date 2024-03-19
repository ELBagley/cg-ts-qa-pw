import { Page, expect } from "@playwright/test";
import { extPageManager }  from "./extPageManagerPO"

export class OrganizationSummary {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    async completeReview(testData: any){
        await this.page.getByLabel('*Privacy Preference').selectOption(testData.privacyPreference)
        await this.page.getByLabel('Recognition Name').fill(testData.recognitionName)
        await this.page.getByLabel('Recognition E-mail').fill(testData.recognitionEmail)
        await this.page.getByRole('button', { name: 'Proceed to Review' }).click();
    }
}