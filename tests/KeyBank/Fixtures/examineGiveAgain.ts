import { Page, expect } from "@playwright/test";

export class examineGiveAgainPortlet {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async examineGiveAgain(testData: any){
    await this.page.locator('#container4 div').filter({ hasText: 'Give Again .st0{fill:#010101' }).first().click();

    await this.page.locator('#cgData550540 div').filter({ hasText: '.st0{fill:#010101;} Donate Now Via Credit Card One Time or Recurring 27 USD -' }).nth(2).click();
    await this.page.getByText('Donate Now Via Credit Card One Time or Recurring 27 USD').click();
    await this.page.getByText('03/13/2024', { exact: true }).click();
    await this.page.getByText('AMERICAN NATIONAL RED CROSS').first().click();

    await this.page.locator('#cgData550540 div').filter({ hasText: '.st0{fill:#010101;} Donate Now Via Credit Card One Time or Recurring 26 USD -' }).nth(2).click();
    await this.page.getByText('Donate Now Via Credit Card One Time or Recurring 26 USD').click();
    await this.page.getByText('03/11/2024', { exact: true }).click();
    await this.page.getByText('AMERICAN NATIONAL RED CROSS').nth(1).click();
  }
}