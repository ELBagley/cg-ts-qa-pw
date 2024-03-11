import { Page, expect } from "@playwright/test";

const testOneData = JSON.parse(JSON.stringify(require('../Data/Test1_PayRollDeductions.json')));

export class examineFormsHelper {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  // CreditCardInitial
  //   depends on PT being created for
  //
  // creditCardDetails

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
  async makePayrollOneTime(){
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
// use with JSON
async makePayrollDeductions(testDeductionData: string, payrollType: string){
  await this.page.getByRole('button', { name: 'Make a Payroll Donation' }).click();
  await this.page.getByRole('link', { name: payrollType }).click(); //'United Way Recurring Payroll'
  // land on organization page for PT 
  await this.page.getByLabel(testOneData.organization).click(); //'Select 1 HEART 1 MISSION'
  // may need to search on the organization page
  await this.page.getByLabel('*Deduction').fill('33');
  await this.page.getByLabel('Designation').fill('TEST');
  await this.page.getByTestId('add-button').click();
  // org summary
  await this.page.getByRole('link', { name: 'Checkout' }).click();

  await this.page.getByLabel('*Privacy Preference').selectOption('ANONYMOUS');
  await this.page.getByLabel('*Recognition Name').fill('ELB');
  await this.page.getByLabel('*Recognition E-mail').fill('Erica.bagley@bonterratech.com');
  await this.page.getByRole('button', { name: 'Proceed to Review' }).click();
  //Review Information
  await this.page.getByRole('button', { name: 'Submit' }).click();
  
  await this.page.getByRole('link', { name: 'Return to Home Page' }).click();
}




  // DonorMatchingGift
  // Create nitial Donation
}