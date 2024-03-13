import { Page, expect } from "@playwright/test";

export class PayrollDeduction{
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async makePayrollDeductionOneTime(TestData: string){
        // navigate to the org search for the PT
        // call forms to fill out
    }
    async makePayrollDeductionRecurring(TestData: string){
        //navigate to the org search for the PT
        // call forms
    }
    
}


