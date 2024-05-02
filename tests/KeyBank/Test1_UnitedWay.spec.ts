import { test } from "@playwright/test"
import { extPageManager }  from "./Page-Objects/extPageManagerPO"

// ADD DATA
const Test1_creditCardDonationData = JSON.parse(JSON.stringify(require('../KeyBank/Data/Test1_UnitedWay/Test1_submitCreditCardOneTime.json')));
const Test1_payrollDeductionOT = JSON.parse(JSON.stringify(require('../KeyBank/Data/Test1_UnitedWay/Test1_submitPayrollOneTime.json')));
const Test1_payrollDeductionR = JSON.parse(JSON.stringify(require('../KeyBank/Data/Test1_UnitedWay/Test1_submitPayrollRecurring.json')));
// VERIFY DATA
const HomeLocators = JSON.parse(JSON.stringify(require("./Data/Home_Locators.json")));
const GivingLocators = JSON.parse(JSON.stringify(require("./Data/Giving_Locators.json")));
const UWGivingLocators = JSON.parse(JSON.stringify(require("./Data/UWGiving_Locators.json")));
const BoardServiceLocators = JSON.parse(JSON.stringify(require("./Data/Boardservice_Locators.json")));
const ManageEventsLocators = JSON.parse(JSON.stringify(require("./Data/ManageEvents_Locators.json")));

//Page specifics
// The Page-Object JSON heading must reflect if there was a table presented what would it look like
const BoardServicePageReferences = JSON.parse(JSON.stringify(require('../KeyBank/Page-Objects/extBoardServicePageReferences')));
const UWGivingPageReferences = JSON.parse(JSON.stringify(require('../KeyBank/Page-Objects/extUWGivingPageReferences')));
const GivingPageReferences = JSON.parse(JSON.stringify(require('../KeyBank/Page-Objects/extGivingPageReferences')));
const MangeEventsPageReferences = JSON.parse(JSON.stringify(require('../KeyBank/Page-Objects/extManageEventsPageReferences')));
const HomePageReferences = JSON.parse(JSON.stringify(require('../KeyBank/Page-Objects/extHomePageReferences')));

const Test1_GivingData = JSON.parse(JSON.stringify(require('./Data/Test1_UnitedWay/Test1_verifyextGiving_Data.json')));
const Test1_UWGivingData = JSON.parse(JSON.stringify(require('./Data/Test1_UnitedWay/Test1_verifyextUWGiving_Data.json')));
const Test1_BoardServiceData = JSON.parse(JSON.stringify(require('./Data/Test1_UnitedWay/Test1_verifyextBoardService_Data.json')));
const Test1_HomeData = JSON.parse(JSON.stringify(require('./Data/Test1_UnitedWay/Test1_verifyextHome_Data.json')));
const Test1_ManageEventsData = JSON.parse(JSON.stringify(require('./Data/Test1_UnitedWay/Test1_verifyextManageEvents_Data.json')));
    /*
    96924 Donate Now Via Credit Card One Time or Recurring, all employees
    96928 Credit Card Match 1:1, all employees

    // OneTimeOption, ANNUALLY, QUARTERLY, MONTHLY
    */ 

test.describe('Create initial data for new execution of tests',() => {
    test.beforeEach('Login to external portal', async ({page}) => {
        const pm = new extPageManager(page);
        // Donor MUST have Event Creator role
        await pm.useloginPage().loginToExternalPortal('DONOR0430', '123!SilverFox');
    })

    //test ('Portlet defaults for Donor without a role', async ({page})=>) {}

    test.skip ('Test One Submit UW Credit Card Donations', async ({page}) => {
        const pm = new extPageManager(page)
        await pm.useUWGivingPage().navigateToUWGivingPage()
        // Repeat for each add a donation
        await pm.useUWGivingPage().createDonateViaCreditCardOT(Test1_creditCardDonationData)
        await pm.useOrganizationSearchPage().selectOrganization(Test1_creditCardDonationData,"")
        await pm.useCreditCardDonationPage().submitCCOneTimeWithMatch(Test1_creditCardDonationData)
        await pm.useReviewInformationPage().fillReviewInformation(Test1_creditCardDonationData)
        await pm.useSubmissionSuccessfulPage().selectReturnToHome()
    })

    test.skip ('Test One Submit UW OT Payroll Deduction(s)', async ({page}) => {
        const pm = new extPageManager(page)
        await pm.useUWGivingPage().navigateToUWGivingPage()
        await pm.useUWGivingPage().selectMakeAPayrollDeduction_UWOT(Test1_payrollDeductionOT)
        await pm.useOrganizationSearchPage().selectOrganization(Test1_payrollDeductionOT,"")
        await pm.usePayrollDeductionPage().makePayrollDeductionOneTime(Test1_payrollDeductionOT)
        await pm.useOrganizationSearchPage().selectCheckout()
        await pm.useReviewInformationPage().completeReview()
        await pm.useSubmissionSuccessfulPage().selectReturnToHome()
    })
    test.skip ('Test One Submit UW Recurring Payroll Deduction(s)', async ({page}) => {
        const pm = new extPageManager(page)
        await pm.useUWGivingPage().navigateToUWGivingPage()
        await pm.useUWGivingPage().selectMakeAPayrollDeduction_UWR(Test1_payrollDeductionR)
        await pm.useOrganizationSearchPage().selectOrganization(Test1_payrollDeductionR,"")
        await pm.usePayrollDeductionPage().makePayrollDeductionRecurring(Test1_payrollDeductionR)
        await pm.useOrganizationSearchPage().selectCheckout()
        await pm.useReviewInformationPage().completeReview()
        await pm.useSubmissionSuccessfulPage().selectReturnToHome()
    }),
    test ('United Way Data Verification of Home page', async ({page})=>{
        const pm = new extPageManager(page)
        await pm.useHomePage().examinePortletTab("How Am I Doing?",Test1_HomeData, HomeLocators)
    }),
    test ('United Way Data Verification of Giving page', async ({page})=>{
        const pm = new extPageManager(page)
        await pm.useGivingPage().navigateToGivingPage()
        await pm.useGivingPage().examinePortletTab(GivingPageReferences,Test1_GivingData, GivingLocators)

    }),
    test ('United Way Data Verification of United Way Giving page', async ({page})=>{
        const pm = new extPageManager(page)
        await pm.useUWGivingPage().navigateToUWGivingPage()
        await pm.useUWGivingPage().examinePortletTab(UWGivingPageReferences,Test1_UWGivingData, UWGivingLocators)

    }),
    test ('United Way Data Verification of Board Service page', async ({page})=>{
        const pm = new extPageManager(page)
        await pm.useBoardServicePage().navigateToBoardServicePage()
        await pm.useBoardServicePage().examinePortletTab(BoardServicePageReferences,Test1_BoardServiceData, BoardServiceLocators)
    }),
    test ('United Way Data Verification of Manage Events page', async ({page})=>{
        const pm = new extPageManager(page)
        await pm.useManageEventsPage().navigateToManageEventsPage()
        await pm.useManageEventsPage().examinePortletTab(MangeEventsPageReferences,Test1_ManageEventsData, ManageEventsLocators)
    })
})
