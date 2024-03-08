import { Page, expect } from "@playwright/test";
import { examinePortletHelper } from "../Fixtures/ExaminePortlet"

export class extMatchingGifts extends examinePortletHelper{

    constructor(page: Page) {
        super(page)
    }
/*
Menu
await page.getByRole('link', { name: 'Matching Gifts', exact: true }).click();
"numTabs": 4
"TabArray": ['Matching Gifts Balance','Matching Gifts History','Credit Card Transactions','My Nominations']
"Matching Gifts Balance": {}
await page.getByRole('cell', { name: 'Program Name' }).click();
await page.getByRole('cell', { name: 'Number of Transaction(s)' }).click();
await page.getByRole('cell', { name: 'Limit' }).click();
await page.getByRole('cell', { name: 'Total Match Amount' }).click();
await page.getByRole('cell', { name: 'Balance' }).click();

await page.getByRole('cell', { name: 'Staff Giving' }).click();
await page.getByRole('cell', { name: 'Credit Card Match' }).click();
await page.getByRole('cell', { name: 'Matching Gifts' }).click();

//TAB
await page.getByText('Matching Gifts History').click();
await page.getByRole('cell', { name: 'Organization Information' }).click();
await page.getByRole('cell', { name: 'Type' }).click();
await page.getByRole('cell', { name: 'Description' }).click();
await page.getByRole('cell', { name: 'Status' }).click();
await page.getByRole('button', { name: 'LUV-A-BULL PIT BULL RESCUE' }).click();
await page.getByRole('button', { name: 'Close' }).click();
await page.getByRole('button', { name: 'Kauai Ferals' }).click();
await page.getByRole('button', { name: 'Close' }).click();
await page.getByRole('cell', { name: 'Matching Gifts', exact: true }).click();
await page.getByRole('cell', { name: 'Giving Tuesday - Matching' }).click();

await page.getByText('Credit Card Transactions').click();
await page.locator('#cg406066 div').filter({ hasText: 'Organization' }).first().click();
await page.getByText('My Nominations').click();
*/

//select "Credit Card Donation" button
// goes to "Organization Search"
// goes to "Make a Credit Card Donation" AND has graphical balance
// goes to "Credit Card Information"
}
