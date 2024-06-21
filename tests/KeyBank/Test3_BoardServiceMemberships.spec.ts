import { test } from "@playwright/test"
import { extPageManager }  from "./Page-Objects/extPageManagerPO"

// ADD DATA
const Test3_FirstMembershipData = JSON.parse(JSON.stringify(require('./Data/Test3_BoardService/Test3_DONOR1_BS_addFirstMembershipData.json')));
const Test3_SecondMembershipData = JSON.parse(JSON.stringify(require('./Data/Test3_BoardService/Test3_DONOR1-BS_addSecondMembershipData.json')));
const Test3_ThirdMembershipData = JSON.parse(JSON.stringify(require('./Data/Test3_BoardService/Test3_DONOR1-BS_addThirdMembershipData.json')));
// VERIFY Locators
const HomeLocators = JSON.parse(JSON.stringify(require("./Data/Home_Locators.json")));
const GivingLocators = JSON.parse(JSON.stringify(require("./Data/Giving_Locators.json")));
const UWGivingLocators = JSON.parse(JSON.stringify(require("./Data/UWGiving_Locators.json")));
const BoardServiceLocators = JSON.parse(JSON.stringify(require("./Data/Boardservice_Locators.json")));
const ManageEventsLocators = JSON.parse(JSON.stringify(require("./Data/ManageEvents_Locators.json")));
//Verification Data
const Test3_GivingData = JSON.parse(JSON.stringify(require('./Data/Test3_BoardService/Test31_verifyextGiving_Data.json')));
const Test3_UWGivingData = JSON.parse(JSON.stringify(require('./Data/Test3_BoardService/Test31_verifyextUWGiving_Data.json')));
const Test3_BoardServiceData = JSON.parse(JSON.stringify(require('./Data/Test3_BoardService/Test31_verifyextBoardService_Data.json')));
const Test3_HomeData = JSON.parse(JSON.stringify(require('./Data/Test3_BoardService/Test31_verifyextHome_Data.json')));
const Test3_ManageEventsData = JSON.parse(JSON.stringify(require('./Data/Test3_BoardService/Test31_verifyextManageEvents_Data.json')));
    /*
    96924 Donate Now Via Credit Card One Time or Recurring, all employees
    96928 Credit Card Match 1:1, all employees

    // OneTimeOption, ANNUALLY, QUARTERLY, MONTHLY
    */ 

// NEED A DONOR WITH PREVIOUSLY APPROVED BOARD SERVICE MEMBERSHIPS
// until can approve via API or GM UI

test.describe('Create initial data for new execution of tests',() => {
    test.beforeEach('Login to external portal', async ({page}) => {
        const pm = new extPageManager(page);
        // Donor MUST have Event Creator role
        await pm.useloginPage().loginToExternalPortal('DONOR0320', '123!SilverFox');
    })

    //test ('Portlet defaults for Donor without a role', async ({page})=>) {}

    test ('Test DONOR1-BS-<ddmm> - Create First Board Membership', async ({page}) => {
        const pm = new extPageManager(page)
        await pm.useBoardServicePage().navigateToBoardServicePage()
        // Repeat for each add a donation
        await pm.useBoardServicePage().createBoardServiceMembership()
        await pm.useOrganizationSearchPage().selectOrganization(Test3_FirstMembershipData, "BoardService")
        // only works in headless mode: npx playwright test --project=chromium --headed
        //await page.pause()
        await pm.useBoardServiceMembershipInformationPage().submitBoardServiceMembership2(Test3_FirstMembershipData)
        await pm.useAddFileUploadPage().fillOutForm(Test3_FirstMembershipData)
        await pm.useReviewInformationPage().fillReviewInformation(Test3_FirstMembershipData)
        await pm.useSubmissionSuccessfulPage().selectReturnToHome()
    })
    test.skip ('Test DONOR1-BS-<ddmm> - Create Second Board Membership', async ({page}) => {
        const pm = new extPageManager(page)
        await pm.useBoardServicePage().navigateToBoardServicePage()
        await pm.useBoardServicePage().createBoardServiceMembership()
        await pm.useOrganizationSearchPage().selectOrganization(Test3_SecondMembershipData, "BoardService")
        await pm.useBoardServiceMembershipInformationPage().submitBoardServiceMembership2(Test3_SecondMembershipData)
        await pm.useReviewInformationPage().fillReviewInformation(Test3_SecondMembershipData)
        await pm.useSubmissionSuccessfulPage().selectReturnToHome()
    })
    test.skip ('Test DONOR1-BS-<ddmm> - Create Third Board Membership', async ({page}) => {
        const pm = new extPageManager(page)
        await pm.useBoardServicePage().navigateToBoardServicePage()
        await pm.useBoardServicePage().createBoardServiceMembership()
        await pm.useOrganizationSearchPage().selectOrganization(Test3_ThirdMembershipData, "BoardService")
        await pm.useBoardServiceMembershipInformationPage().submitBoardServiceMembership2(Test3_ThirdMembershipData)
        await pm.useReviewInformationPage().fillReviewInformation(Test3_ThirdMembershipData)
        await pm.useSubmissionSuccessfulPage().selectReturnToHome()
    })

    test.skip ('approve all of the memberships', async ({page}) =>{
        await page.pause();
    })
    
    // Add hours to each of the four member organizations
    test ('Add Hours to first membership Board Membership', async ({page}) => {
        const pm = new extPageManager(page)
        await pm.useBoardServicePage().navigateToBoardServicePage()
        // select the add hours button
        await pm.useBoardServicePage().selectBoardServiceHours()
        // select the first membership organization
        await pm.useOrganizationSearchPage().selectExistingOrganization(Test3_ThirdMembershipData)
        await pm.useVolunteerHoursPage().addVolunteerHours(Test3_ThirdMembershipData)
    })


    // add donations to each of the four member organizations



    test ('United Way Data Verification of Home page', async ({page})=>{
        const pm = new extPageManager(page)
        await pm.useHomePage().examinePortletTab("How Am I Doing?",Test3_HomeData, HomeLocators)
    })
    test ('United Way Data Verification of Giving page', async ({page})=>{
        const pm = new extPageManager(page)
        await pm.useGivingPage().examinePortletTab("Matching Gifts Balance",Test3_GivingData, GivingLocators)
        await pm.useGivingPage().examinePortletTab("Matching Gifts History",Test3_GivingData, GivingLocators)
        await pm.useGivingPage().examinePortletTab("Credit Card Transactions",Test3_GivingData, GivingLocators)
        await pm.useGivingPage().examinePortletTab("My Nominations",Test3_GivingData, GivingLocators)
    })
    test ('United Way Data Verification of United Way Giving page', async ({page})=>{
        const pm = new extPageManager(page)
        await pm.useUWGivingPage().examinePortletTab("United Way - Give Again",Test3_UWGivingData, UWGivingLocators)
        await pm.useUWGivingPage().examinePortletTab("United Way Credit Card Transactions",Test3_UWGivingData, UWGivingLocators)
        await pm.useUWGivingPage().examinePortletTab("Payroll Contributions",Test3_UWGivingData, UWGivingLocators)
    })
    test ('United Way Data Verification of Board Service page', async ({page})=>{
        const pm = new extPageManager(page)
        await pm.useBoardServicePage().examinePortletTab("Board Service Memberships",Test3_BoardServiceData, BoardServiceLocators)
        await pm.useBoardServicePage().examinePortletTab("Board Service Recorded Hours",Test3_BoardServiceData, BoardServiceLocators)
        await pm.useBoardServicePage().examinePortletTab("Board Service Matching Gifts",Test3_BoardServiceData, BoardServiceLocators)
        await pm.useBoardServicePage().examinePortletTab("Community Leadership Gift Balance",Test3_BoardServiceData, BoardServiceLocators)     
        await pm.useBoardServicePage().examinePortletTab("My Nominations",Test3_BoardServiceData, BoardServiceLocators)
        await pm.useBoardServicePage().examinePortletTab("Dollars For Doers",Test3_BoardServiceData, BoardServiceLocators)
    })
        test ('United Way Data Verification of Manage Events page', async ({page})=>{
            const pm = new extPageManager(page)
        await pm.useManageEventsPage().examinePortletTab("Manage Open Events",Test3_ManageEventsData, ManageEventsLocators)
        await pm.useManageEventsPage().examinePortletTab("Manage Completed Events",Test3_ManageEventsData, ManageEventsLocators)
        await pm.useManageEventsPage().examinePortletTab("Events I Created",Test3_ManageEventsData, ManageEventsLocators)
        await pm.useManageEventsPage().examinePortletTab("Unsubmitted Events I Created",Test3_ManageEventsData, ManageEventsLocators)
    })
})
