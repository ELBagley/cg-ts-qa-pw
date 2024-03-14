import { Page, expect } from "@playwright/test";

export class PayrollDeduction{
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async makePayrollDeductionOneTime(PayrollTestData: any){
        // must already be one the page with button to start; "Home page"

        // Portal Page for United Way Giving: https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10762&x_pl_id=50464
        //United Way Giving - select "Make a Payroll Donation"
        await this.page.getByRole('button', { name: 'Make a Payroll Donation' }).click();
        //popup Please select one of the following:
        await this.page.getByRole('link', { name: 'United Way One-Time Payroll' }).click();
        //organization search PT96918 has a summary of donations
        await this.page.getByPlaceholder('Organization Name').fill(PayrollTestData.organizationName);
        // popup "One-Time Deduction Information"
        await this.page.getByLabel('*Deduction').fill(PayrollTestData.deductionAmount);
        await this.page.getByLabel('Designation').fill(PayrollTestData.Designation);
        await this.page.getByTestId('add-button').click();
        // returned ot Organization search with checkout button
        // select Checkout
        // Organization Summary page with summary widget
        await this.page.getByRole('link', { name: 'Checkout' }).click();
        await this.page.getByLabel('*Privacy Preference').selectOption(PayrollTestData.privacyPreference);
        await this.page.getByLabel('*Recognition Name').fill(PayrollTestData.recofnitionName);
        await this.page.getByLabel('*Recognition E-mail').fill(PayrollTestData.recognitionEmail);
        await this.page.getByRole('button', { name: 'Proceed to Review' }).click();
        // Review Information
        await this.page.getByRole('button', { name: 'Submit' }).click();
        // Submission successful
        await this.page.getByRole('link', { name: 'Return to Home Page' }).click();
    }
    
    async makePayrollDeductionRecurring(PayrollTestData: any){
        await this.page.getByRole('button', { name: PayrollTestData.extButton }).click(); // select button on UW Giving
        await this.page.getByRole('link', { name: PayrollTestData.actionButton }).click(); //pop up to choose OT or R
        await this.page.getByLabel(PayrollTestData.organizationName).click(); //select organization
        await this.page.getByTestId('add-button').click();
        // move to different page
        await this.page.getByLabel('*Deduction').fill(PayrollTestData.deductionAmount);
        await this.page.getByLabel('Designation').fill(PayrollTestData.designation);
        // submit??
        //await this.page.getByRole('heading', { name: 'Organization Search' }).click(); // returned to Checkout deduction
        //await this.page.getByText('Summary$5.00RED CROSS').click(); //ID of checkout section
        await this.page.getByRole('link', { name: 'Checkout' }).click();
        // Page: Organization Summary
        //await this.page.getByRole('heading', { name: 'Organization Summary' }).click();
        await this.page.getByRole('button', { name: 'Proceed to Review' }).click();
        //Page: Review Infomation
        await this.page.getByRole('heading', { name: 'Review Information' }).click();
        //await this.page.goto('https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_application.submit_app?x_gm_id=10762');
        await this.page.getByRole('link', { name: 'Return to Home Page' }).click();
        
    }
    
}


