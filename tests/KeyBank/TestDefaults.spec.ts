import { test } from "@playwright/test"
import { extPageManager }  from "./Page-Objects/extPageManagerPO"


// VERIFY DATA PORTLETS
const HomeLocators = JSON.parse(JSON.stringify(require('./Data/Home_Locators.json')));
const GivingLocators = JSON.parse(JSON.stringify(require("./Data/Giving_Locators.json")));
const UWGivingLocators = JSON.parse(JSON.stringify(require("./Data/UWGiving_Locators.json")));
const BoardServiceLocators = JSON.parse(JSON.stringify(require("./Data/BoardService_Locators.json")));
const ManageEventsLocators = JSON.parse(JSON.stringify(require("./Data/ManageEvent_Locators.json")));

// VERIFY DATA
const Default_GivingData = JSON.parse(JSON.stringify(require('./Data/Default/Default_verifyextGiving_Data.json')));
const Default_UWGivingData = JSON.parse(JSON.stringify(require('./Data/Default/Default_verifyextUWGiving_Data.json')));
const Default_BoardServiceData = JSON.parse(JSON.stringify(require('./Data/Default/Default_verifyextBoardService_Data.json')));
const Default_HomeData = JSON.parse(JSON.stringify(require('./Data/Default/Default_verifyextHome_Data.json')));
const Default_ManageEventsData = JSON.parse(JSON.stringify(require('./Data/Default/Default_verifyextManageEvents_Data.json')));

test.describe('Verify initial configuration',() => {
    test.beforeEach('Login to external portal', async ({page}) => {
        const pm = new extPageManager(page);
        // donor with event creator role
        await pm.useloginPage().loginToExternalPortal('DONORdefault', '123!SilverFox');
    })
    test ('Default Data Verification of all portlets', async ({page})=>{
        const pm = new extPageManager(page)
        await pm.useHomePage().examinePortletTab("How Am I Doing?",Default_HomeData, HomeLocators)
        await pm.useGivingPage().examinePortletTab("Matching Gifts Balance",Default_GivingData, GivingLocators)
        await pm.useGivingPage().examinePortletTab("Matching Gifts History",Default_GivingData, GivingLocators)
        await pm.useGivingPage().examinePortletTab("Credit Card Transactions",Default_GivingData, GivingLocators)
        await pm.useGivingPage().examinePortletTab("My Nominations",Default_GivingData, GivingLocators)
        await pm.useUWGivingPage().examinePortletTab("United Way - Give Again",Default_UWGivingData, UWGivingLocators)
        await pm.useUWGivingPage().examinePortletTab("UW CC Transactions",Default_UWGivingData, UWGivingLocators)
        await pm.useUWGivingPage().examinePortletTab("Payroll Contributions",Default_UWGivingData, UWGivingLocators)
        await pm.useBoardServicePage().examinePortletTab("BS Memberships",Default_BoardServiceData, BoardServiceLocators)
        await pm.useBoardServicePage().examinePortletTab("BS Recorded Hours",Default_BoardServiceData, BoardServiceLocators)
        await pm.useBoardServicePage().examinePortletTab("BS Matching Gifts",Default_BoardServiceData, BoardServiceLocators)
        await pm.useBoardServicePage().examinePortletTab("Community Leadership Gift Balance",Default_BoardServiceData, BoardServiceLocators)     
        await pm.useBoardServicePage().examinePortletTab("My Nominations",Default_BoardServiceData, BoardServiceLocators)
        await pm.useBoardServicePage().examinePortletTab("Dollars For Doers",Default_BoardServiceData, BoardServiceLocators)
        await pm.useManageEventsPage().examinePortletTab("Manage Open Events",Default_ManageEventsData, ManageEventsLocators)
        await pm.useManageEventsPage().examinePortletTab("Manage Completed Events",Default_ManageEventsData, ManageEventsLocators)
        await pm.useManageEventsPage().examinePortletTab("Events I created",Default_ManageEventsData, ManageEventsLocators)
        await pm.useManageEventsPage().examinePortletTab("Unsubmitted Events I created",Default_ManageEventsData, ManageEventsLocators)
    })
})