import { test } from "@playwright/test"
import { extPageManager }  from "./Page-Objects/extPageManagerPO"
import { beforeEach } from "node:test"
import { examinePortletHelper } from "../KeyBank/Fixtures/ExaminePortlet"



const CreditCardLocators = JSON.parse(JSON.stringify(require("../KeyBank/Data/CreditCardDonationLocators.json")));
const PayrollLocators = JSON.parse(JSON.stringify(require("../KeyBank/Data/PayrollDeductionsLocators.json")));

const Test1_creditCardDonationData = JSON.parse(JSON.stringify(require('../KeyBank/Data/Test1_submitCreditCardOneTime.json')));
const Test1_payrollDeduction = JSON.parse(JSON.stringify(require('../KeyBank/Data/Test1_submitPayrollRecurring.json')));

    /*
    96924 Donate Now Via Credit Card One Time or Recurring, all employees
    96928 Credit Card Match 1:1, all employees

    // OneTimeOption, ANNUALLY, QUARTERLY, MONTHLY
    */ 

test.describe('Create initial data for new execution of tests',() => {
    test.beforeEach('Login to external portal', async ({page}) => {
        const pm = new extPageManager(page);
        await pm.useloginPage().loginToExternalPortal('DONOR1', '123!SilverFox');
    })


    test ('Test One Setup - UW Credit Card Donations', async ({page}) => {
        const pm = new extPageManager(page)
        await pm.useUWGivingPage().navigateToUWGivingPage()
        await pm.useUWGivingPage().createDonateViaCreditCardOT(Test1_creditCardDonationData)
        await pm.useOrganizationSearchPage().selectOrganization(Test1_creditCardDonationData)
        await pm.useCreditCardDonationPage().submitCreditCardOneTime(Test1_creditCardDonationData)
        // need to add credit card details on Review Information Page
        await pm.useReviewInformationPage().fillReviewInformation(Test1_creditCardDonationData)
        await pm.useSubmissionSuccessfulPage().selectReturnToHome()

    })
    test ('Test One Setup - UW OT Payroll Deduction(s)', async ({page}) => {
        const pm = new extPageManager(page)
        //await pm.useUWGivingPage().navigateToUWGivingPage()

        await pm.useUWGivingPage().selectMakeAPayrollDeduction_UWOT(Test1_payrollDeduction)
    })

})
