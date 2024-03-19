import { Page, expect } from "@playwright/test";

export class examineDollarsForDoersPortlet {
  
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

async examineD4DData(testData: any){
    await this.page.getByText('Dollars for DoersCongratulations! You are eligible to redeem a volunteer match!').click();
    await this.page.locator('span').filter({ hasText: '/^1 HEART 1 MISSION3\/1 hours$/' }).click();
    await this.page.locator('span').filter({ hasText: '/^RED CROSS ELEMENTARY PTO INC10\/1 hours$/' }).click();
    await this.page.locator('div').filter({ hasText: '/^Redeemable\$500\.00$/' }).click();
    await this.page.locator('div').filter({ hasText: '/^Hours Available3$/' }).click();
    await this.page.locator('div').filter({ hasText: '/^Redeemed\$500\.00$/' }).click();
    await this.page.locator('div').filter({ hasText: '/^Hours Logged13$/' }).click();
    // piece together data elements then verify the test is presented
    

    // await page.getByText('RedeemRedeemable$500.00Hours Available3Redeemed$500.00Hours Logged13Log Hours').click();
    }
}