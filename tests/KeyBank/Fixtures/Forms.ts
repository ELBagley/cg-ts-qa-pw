import { Page, expect } from "@playwright/test";


export class fillOutForm {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async fillCreditCardOneTime(CreditCardData: any){
    // test should have the credit card details page presented
    await this.page.locator('#rccDropdown').selectOption(CreditCardData.deductionType); // ANNUALLY, QUARTERLY, MONTHLY
    await this.page.getByRole('textbox', { name: '*Street Address' }).fill(CreditCardData.streetAddress);
    await this.page.getByRole('textbox', { name: '*City' }).fill(CreditCardData.city);
    await this.page.locator('#MailingAddress__state__ggid1').selectOption(CreditCardData.mailingAddress);
    await this.page.getByRole('textbox', { name: '*ZIP Code' }).fill(CreditCardData.zipCode);
    // first payment defaulted to today (date widget)
    // end date (date widget)
    await this.page.getByLabel('Name on Card').fill(CreditCardData.cardName);
    await this.page.getByLabel('Credit Card Number').fill(CreditCardData.creditCardNumber);
    await this.page.getByLabel('Verification Code').fill(CreditCardData.verificationCode);
    await this.page.getByLabel('Expiration Month').selectOption(CreditCardData.expirationMonth);
    await this.page.getByLabel('Expiration Year').selectOption(CreditCardData.expirationYear);
    // !!must verify You Have Chosen text with estimated donation
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }


  // CreateEvents
  // event search (vc_search_responsive)
    // Event Calendar (vc_event_calendar)
    // My Upcoming Events (giving_history)
    //    "Recorded Hours" (get giving history)
    //    "My Nominations" ()
    // My Completed Events ()
        // "Recorded Hours" (get giving history)
        // "My Nominations" ()

  // addVolunteersToEvent


  // PayrollOnetime
  async fillPayrollOneTime(payrollData: any){
    // must already be one the page with button to start; "Home page"
    // for the number of payments 
      // select the button
      // fill out the form
      // continue
      // review, continue
      // submit, return to home page


    // Portal Page for United Way Giving: https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10762&x_pl_id=50464
     //United Way Giving - select "Make a Payroll Donation"
      await this.page.getByRole('button', { name: 'Make a Payroll Donation' }).click();
    //popup Please select one of the following:
      await this.page.getByRole('link', { name: 'United Way One-Time Payroll' }).click();
    //organization search PT96918 has a summary of donations
      await this.page.getByPlaceholder('Organization Name').fill('red cross');
      await this.page.getByLabel('Select Southeast Missouri &').click();
    // popup "One-Time Deduction Information"
      await this.page.getByLabel('*Deduction').fill('35');
      await this.page.getByLabel('Designation').fill('TEST');
      await this.page.getByTestId('add-button').click();
      // returned ot Organization search with checkout button
      // select Checkout
      // Organization Summary page with summary widget
      await this.page.getByRole('link', { name: 'Checkout' }).click();
      await this.page.getByLabel('*Privacy Preference').selectOption('ANONYMOUS');
      await this.page.getByLabel('*Recognition Name').fill('ELB');
      await this.page.getByLabel('*Recognition E-mail').fill('Erica.bagley@bonterratech.com');
      await this.page.getByRole('button', { name: 'Proceed to Review' }).click();
      //Review Information
      await this.page.getByRole('button', { name: 'Submit' }).click();

      await this.page.getByRole('link', { name: 'Return to Home Page' }).click();
}

// Payroll OneTime or Recurring 
// use with JSON passed in from the test script
async fillPayrollDeduction(testDeductionData: any){
  // fill out form across various pages
  await this.page.getByLabel('*Deduction').fill(testDeductionData.deductionAmount);
  await this.page.getByLabel('Designation').fill(testDeductionData.Designation);
  await this.page.getByTestId('add-button').click();
  // org summary
  await this.page.getByRole('link', { name: 'Checkout' }).click();

  await this.page.getByLabel('*Privacy Preference').selectOption(testDeductionData.privacyPreference);
  await this.page.getByLabel('*Recognition Name').fill(testDeductionData.recognitionName);
  await this.page.getByLabel('*Recognition E-mail').fill(testDeductionData.recognitionEmail);
  await this.page.getByRole('button', { name: 'Proceed to Review' }).click();
  //Review Information
  await this.page.getByRole('button', { name: 'Submit' }).click();
  
  await this.page.getByRole('link', { name: 'Return to Home Page' }).click();
}

// DonorMatchingGift
// Create nitial Donation
}