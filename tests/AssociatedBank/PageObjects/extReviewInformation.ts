import { Page, expect } from "@playwright/test";

const extCCReviewInformationPage = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_req.formcheck?x_gm_id=10582"

export class extReviewInformationPO{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
 
    async navigateToCCReviewInformationPage (){
        const pageTitle = "Review Information"
        await this.page.goto(extCCReviewInformationPage)
        expect(this.page.locator(extCCReviewInformationPage).getByText(pageTitle)).toBeTruthy()
    }

async completeCreditCardTransaction(){
  // move to CC details page
  await this.page.getByRole('textbox', { name: '*Street Address' }).fill('12 Main St');
  await this.page.getByRole('textbox', { name: 'Street Address 2' }).press('Tab');
  await this.page.getByRole('textbox', { name: '*City' }).fill('Andoover');
  await this.page.locator('#MailingAddress__state__ggid1').selectOption('Massachusetts');
  await this.page.getByRole('textbox', { name: '*ZIP Code' }).fill('01841');
  await this.page.getByLabel('Name on Card').fill('Erica bagley');
  await this.page.getByLabel('Credit Card Number').fill('6011000990139424');
  await this.page.getByLabel('Verification Code').fill('275');
  await this.page.getByLabel('Expiration Month').selectOption('3');
  await this.page.getByLabel('Expiration Year').selectOption('2028');
  await this.page.getByRole('button', { name: 'Submit' }).click();
  //summary of transaction
  await this.page.goto('https://sandbox.cybergrants.com/pls/cybergrants-sb/cc_application.process_ggpay_response?x_confirmation_code=N2J6OX4&x_uid=072D55E802C9BF1E9788B71641AA80996893C3DE1F9EBA8C1D5D59E60ACC916D53351D9B17E17596654C2433831E0D64B101B8F4D893EB8243A00540BED429F62BCBDFA1467C4E3CF22DF07D1A3A13C0EE8F8B3DBF4AC65DAB6CCD5F70413DBF&x_wcd=JTdCJTIyZ3JhbnRtYWtlcklEJTIyJTNBMTA1ODIlMkMlMjJwcmltYXJ5S2V5JTIyJTNBMzEyMDYwMjYlMkMlMjJ0YWJsZU5hbWUlMjIlM0ElMjJlZ19yZXF1ZXN0JTIyJTJDJTIyaXBBZGRyZXNzJTIyJTNBJTIyMTMuMjQ4LjEwOC40MiUyMiUyQyUyMmNhcmRUeXBlJTIyJTNBJTIyRGlzY292ZXIlMjIlMkMlMjJhbW91bnQlMjIlM0ElMjIyNTAwJTIyJTJDJTIycGF5bWVudFBlcmlvZCUyMiUzQSUyMiUyMiUyQyUyMnNjaGVkdWxlSUQlMjIlM0ElMjIlMjIlMkMlMjJzdGF0dXMlMjIlM0ElMjJDT01QTEVURSUyMiUyQyUyMmFkZHJlc3MlMjIlM0ElMjIxMiUyME1haW4lMjBTdCUyMiUyQyUyMmNpdHklMjIlM0ElMjJBbmRvb3ZlciUyMiUyQyUyMnN0YXRlX3Byb3ZpbmNlJTIyJTNBJTIyTUElMjIlMkMlMjJ6aXAlMjIlM0ElMjIwMTg0MSUyMiUyQyUyMm5hbWVPbkNhcmQlMjIlM0ElMjJFcmljYSUyMGJhZ2xleSUyMiUyQyUyMmxhc3Q0JTIyJTNBJTIyOTQyNCUyMiUyQyUyMmV4cGlyYXRpb24lMjIlM0ElMjIwMzI4JTIyJTJDJTIyc3RhcnREYXRlJTIyJTNBJTIyJTIyJTJDJTIyZW5kRGF0ZSUyMiUzQSUyMiUyMiUyQyUyMmNzcmYlMjIlM0ElMjIyQkM0QjM0ODkwRkI4QTc4MTFGODdCMkMwNjEwQjlCNiUyMiU3RA==');
  await this.page.getByRole('link', { name: 'Return to Home Page' }).click();
    }
}