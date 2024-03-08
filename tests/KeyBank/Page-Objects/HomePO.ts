import { Page, expect } from "@playwright/test";
import { examinePortletHelper } from "../Fixtures/ExaminePortlet"

export class extHome extends examinePortletHelper{

    constructor(page: Page) {
        super(page)
    }
}

/*
//HOME graphic Portlets
await page.getByText('$').first().click();
await page.locator('#cgData450788').getByText('Matching Gifts').click();
await page.getByText('$').nth(1).click();
await page.locator('#cgData450788').getByText('Disaster Relief').click();
await page.getByText('Hours Volunteered').click();
await page.getByText('0', { exact: true }).click();
*/
