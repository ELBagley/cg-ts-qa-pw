import { Page, expect } from "@playwright/test";

export class PayrollDeduction{
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async makePayrollDeductionOneTime(PayrollTestData: any){
        // must already be one the page with button to start; "Home page"
        await this.page.getByLabel('*Deduction').fill(PayrollTestData.deductionAmount);
        await this.page.getByLabel('Designation').fill(PayrollTestData.designation);
        await this.page.getByTestId('add-button').click();
    }
    
    async makePayrollDeductionRecurring(PayrollTestData: any){
        await this.page.getByLabel('*Deduction').fill(PayrollTestData.deductionAmount);
        await this.page.getByLabel('Designation').fill(PayrollTestData.designation);
        await this.page.getByTestId('add-button').click();
        // submit??
        //await this.page.getByRole('heading', { name: 'Organization Search' }).click(); // returned to Checkout deduction
        //await this.page.getByText('Summary$5.00RED CROSS').click(); //ID of checkout section
        //await this.page.getByRole('link', { name: 'Checkout' }).click();
        // Page: Organization Summary
        //await this.page.getByRole('heading', { name: 'Organization Summary' }).click();
        //await this.page.getByRole('button', { name: 'Proceed to Review' }).click();
        //Page: Review Infomation
        //await this.page.getByRole('heading', { name: 'Review Information' }).click();
        //await this.page.goto('https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_application.submit_app?x_gm_id=10762');
        //await this.page.getByRole('link', { name: 'Return to Home Page' }).click();
        
    }
    
}


