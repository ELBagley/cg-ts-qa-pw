import { Page, expect } from "@playwright/test";

const CreditCardInformation = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_req.formcheck?x_gm_id=7272"
  
export class OnetimeCreditCardInformation{
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  /**
   *
   * @param pageURL - the location of the external portal page to visit but first must log in
   */
  async addCreditCardInformation() {
  /* "Review Infomation" Page with credit card information
  https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_req.formcheck?x_gm_id=7272
  await page.getByLabel('*Credit Card Number:').fill('6011000990139424');
  await page.getByLabel('*Expiration Date (MMYY):').fill('0328');
  await page.getByLabel('*CVV (?)').fill('275');
  await page.getByLabel('*Name on Card').fill('Erica Bagley');
  await page.getByLabel('*Address:').fill('123 Main st');
  await page.getByLabel('*City:').fill('Andover');
  await page.getByLabel('*State/Province:').fill('Massachusetts');
  await page.getByLabel('*Zip/Postal Code:').fill('01810');
  await this.page.locator(getByRole('button', { name: 'Save and Proceed' })).click()
  */
  }
}
