import { Page, expect } from "@playwright/test";

export class CSAEmployeeNomination{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    async createEmployeeNomination(testData: any){
        await this.page.getByLabel('Name of Nominated Employee').fill(testData.nameOfNominatedEmployee);
        await this.page.getByLabel('Description').fill(testData.description);
    }
}
