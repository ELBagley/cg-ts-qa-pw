import { Page, expect } from "@playwright/test";

const OneTimeCreditCardDonation = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_application.start_app?x_gm_id=7272&x_pt_id=56360&x_organization_id=14086643&x_source_flag=EGD&x_style_id="
//!! organization is in the URL

export class OnetimeCreditCardDonation {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  /**
   *
   * @param pageURL - the location of the external portal page to visit but first must log in
   */
  async navigateToOneTimeCreditCardDonation() {
  /*
  "One-Time Credit Card Donation Information"
  total Donation Amount .formRowCG1406572.row  input[name='x_custom_field_value']
  Request a match dropdown
    select[name='x_custom_field_value'] > option[value='N']
    select[name='x_custom_field_value'] > option[value='Y']
  Match amount requested
    .formRowCG1406576.row  input[name='x_custom_field_value']
  "I agree to the terms"
    .formRowCG2613204.row input[name='x_custom_field_value']
  Save and Proceed
    .formRowCG2613204.row input[name='x_custom_field_value']
  
  //// opens "Review Infomation" Page with credit card information
  
    Return to Home Page
    a#cghome
  "Current 2024 Match balance"
    Balance  .css-1phahun
  */
  }
}
