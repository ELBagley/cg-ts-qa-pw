import { Page, expect } from "@playwright/test";

export class SubmissionSuccessful{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    async selectReturnToHome(){
        await this.page.getByRole('link', { name: 'Return to Home Page' }).click();
    }
}
