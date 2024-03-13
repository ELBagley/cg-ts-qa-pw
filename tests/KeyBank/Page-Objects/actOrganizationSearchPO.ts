import { Page, expect } from "@playwright/test";

export class OrganizationSearch {

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    async searchForOrganization(orgToUse: string){
        await this.page.getByPlaceholder('Organization Name').fill(orgToUse);
        await this.page.getByRole('button', { name: 'Search', exact: true }).click();      
    }

    async selectExistingOrganization(existingOrganization: string){
        await this.page.getByLabel(existingOrganization).click()
    }
    async verifyGraphicAmounts(expectedRemainingBalance: string){
        //this is a portlet but just text to validate
        await this.page.getByText(expectedRemainingBalance).click();
        await this.page.getByText('remaining from $').click();
        await this.page.getByText('$2,000.00').click();
    }
}