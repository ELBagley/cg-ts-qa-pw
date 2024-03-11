import { test } from "@playwright/test"
import { extPageManager }  from "./Page-Objects/extPageManagerPO"
import { beforeEach } from "node:test"

const CreditCardLocators = JSON.parse(JSON.stringify(require("../KeyBank/Data/CreditCardDonationLocators.json")));
const PayrollLocators = JSON.parse(JSON.stringify(require("../KeyBank/Data/PayrollDeductionsLocators.json")));

const testONECreditCardDonationData = JSON.parse(JSON.stringify(require('../KeyBank/Data/Test1_CCDonationData.json')));
const testONEpayrollDeductions = JSON.parse(JSON.stringify(require('../KeyBank/Data/Test1_PayRollDeductions.json')));


test.describe('Create initial data for new execution of tests',() => {

    test.beforeEach('Login to external portal', async ({page}) => {
        const pm = new extPageManager(page);
        await pm.useloginPage().loginToExternalPortal('DONOR1', '123!SilverFox');
    })

    test ('Test One Setup - Credit Card Donations', async ({page}) => {
        const pm = new extPageManager(page)
        //await pm.useUWGivingPage().makeUWCCDonations("Test1",testONECreditCardDonationData, CreditCardLocators)

    })
    test ('Test One Setup - Payroll Deductions', async ({page}) => {
        const pm = new extPageManager(page)
        //await pm.useD4DPage().navigateToD4DPage()
        //await pm.useD4DPage().examinePortletTab("Matching Gift Balance",GivingData, GivingLocators)
        //await pm.useD4DPage().examinePortletTab("Current Payroll Contribution",GivingData, GivingLocators)
        //await pm.useD4DPage().examinePortletTab("Donation History",GivingData, GivingLocators)
    })

})
