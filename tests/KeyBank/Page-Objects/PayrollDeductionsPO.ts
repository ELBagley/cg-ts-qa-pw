import { Page, expect } from "@playwright/test";

export class CreditCardDonation{
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async makePayrollDeduction(TestData: string){
        //
    }
    
}
/*
96918 United Way One-Time Payroll Deduction
96920 United Way Recurring Payroll Deduction
96930 United Way Payroll Match
*/

