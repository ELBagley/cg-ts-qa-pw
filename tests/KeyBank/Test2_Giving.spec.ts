import { test } from "@playwright/test"
import { extPageManager }  from "./Page-Objects/extPageManagerPO"

// ADD DATA
const Test2_creditCardDonationData = JSON.parse(JSON.stringify(require('../KeyBank/Data/Test2_Giving/Test2_submitCreditCardOneTime.json')));

// VERIFY DATA
const HomeLocators = JSON.parse(JSON.stringify(require("./Data/Home_Locators.json")));
const GivingLocators = JSON.parse(JSON.stringify(require("./Data/Giving_Locators.json")));
const UWGivingLocators = JSON.parse(JSON.stringify(require("./Data/UWGiving_Locators.json")));
const BoardServiceLocators = JSON.parse(JSON.stringify(require("./Data/Boardservice_Locators.json")));
const ManageEventsLocators = JSON.parse(JSON.stringify(require("./Data/ManageEvents_Locators.json")));

const Test2_GivingData = JSON.parse(JSON.stringify(require('./Data/Test2_Giving/Test2_verifyextGiving_Data.json')));
const Test2_UWGivingData = JSON.parse(JSON.stringify(require('./Data/Test2_Giving/Test2_verifyextUWGiving_Data.json')));
const Test2_BoardServiceData = JSON.parse(JSON.stringify(require('./Data/Test2_Giving/Test2_verifyextBoardService_Data.json')));
const Test2_HomeData = JSON.parse(JSON.stringify(require('./Data/Test2_Giving/Test2_verifyextHome_Data.json')));
const Test2_ManageEventsData = JSON.parse(JSON.stringify(require('./Data/Test2_Giving/Test2_verifyextManageEvents_Data.json')));
    /*
    96924 Donate Now Via Credit Card One Time or Recurring, all employees
    96928 Credit Card Match 1:1, all employees

    // OneTimeOption, ANNUALLY, QUARTERLY, MONTHLY
    */ 

test.describe('Create initial data for new execution of tests',() => {
    test.beforeEach('Login to external portal', async ({page}) => {
        const pm = new extPageManager(page);
        // Donor MUST have Event Creator role
        await pm.useloginPage().loginToExternalPortal('DONOR0320', '123!SilverFox');
    })

    //test ('Portlet defaults for Donor without a role', async ({page})=>) {}

    test ('Test Two Submit Credit Card Donation', async ({page}) => {
        const pm = new extPageManager(page)
        await pm.useGivingPage().navigateToGivingPage()
        // Repeat for each add a donation
        await pm.useGivingPage().selectDonateViaCreditCard(Test2_creditCardDonationData)
        await pm.useOrganizationSearchPage().selectOrganization(Test2_creditCardDonationData,"")
        await pm.useCreditCardDonationPage().submitCCOneTimeWithMatch(Test2_creditCardDonationData)
        await pm.useReviewInformationPage().fillReviewInformation(Test2_creditCardDonationData)
        await pm.useSubmissionSuccessfulPage().selectReturnToHome()
    })

    test ('Giving Data Verification of Home page', async ({page})=>{
        const pm = new extPageManager(page)
        await pm.useHomePage().examinePortletTab("How Am I Doing?",Test2_HomeData, HomeLocators)
    })
    test ('Giving Data Verification of Giving page', async ({page})=>{
        const pm = new extPageManager(page)
        await pm.useGivingPage().examinePortletTab("Matching Gifts Balance",Test2_GivingData, GivingLocators)
        await pm.useGivingPage().examinePortletTab("Matching Gifts History",Test2_GivingData, GivingLocators)
        await pm.useGivingPage().examinePortletTab("Credit Card Transactions",Test2_GivingData, GivingLocators)
        await pm.useGivingPage().examinePortletTab("My Nominations",Test2_GivingData, GivingLocators)
    })
    test ('Giving Data Verification of United Way Giving page', async ({page})=>{
        const pm = new extPageManager(page)
        await pm.useUWGivingPage().examinePortletTab("United Way - Give Again",Test2_UWGivingData, UWGivingLocators)
        await pm.useUWGivingPage().examinePortletTab("United Way Credit Card Transactions",Test2_UWGivingData, UWGivingLocators)
        await pm.useUWGivingPage().examinePortletTab("Payroll Contributions",Test2_UWGivingData, UWGivingLocators)
    })
    test ('Giving Data Verification of Board Service page', async ({page})=>{
        const pm = new extPageManager(page)
        await pm.useBoardServicePage().examinePortletTab("Board Service Memberships",Test2_BoardServiceData, BoardServiceLocators)
        await pm.useBoardServicePage().examinePortletTab("Board Service Recorded Hours",Test2_BoardServiceData, BoardServiceLocators)
        await pm.useBoardServicePage().examinePortletTab("Board Service Matching Gifts",Test2_BoardServiceData, BoardServiceLocators)
        await pm.useBoardServicePage().examinePortletTab("Community Leadership Gift Balance",Test2_BoardServiceData, BoardServiceLocators)     
        await pm.useBoardServicePage().examinePortletTab("My Nominations",Test2_BoardServiceData, BoardServiceLocators)
        await pm.useBoardServicePage().examinePortletTab("Dollars For Doers",Test2_BoardServiceData, BoardServiceLocators)
    })
        test ('Giving Data Verification of Manage Events page', async ({page})=>{
            const pm = new extPageManager(page)
        await pm.useManageEventsPage().examinePortletTab("Manage Open Events",Test2_ManageEventsData, ManageEventsLocators)
        await pm.useManageEventsPage().examinePortletTab("Manage Completed Events",Test2_ManageEventsData, ManageEventsLocators)
        await pm.useManageEventsPage().examinePortletTab("Events I Created",Test2_ManageEventsData, ManageEventsLocators)
        await pm.useManageEventsPage().examinePortletTab("Unsubmitted Events I Created",Test2_ManageEventsData, ManageEventsLocators)
    })
})
