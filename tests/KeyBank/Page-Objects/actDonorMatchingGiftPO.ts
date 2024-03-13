import { Page, expect } from "@playwright/test";

export class DonorMatching{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
}