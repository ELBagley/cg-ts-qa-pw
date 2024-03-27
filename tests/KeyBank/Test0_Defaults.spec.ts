import { test } from "@playwright/test"
import { extPageManager }  from "./Page-Objects/extPageManagerPO"

// VERIFY DATA PORTLETS
const HomeLocators = JSON.parse(JSON.stringify(require('./Data/Home_Locators.json')));
const GivingLocators = JSON.parse(JSON.stringify(require("./Data/Giving_Locators.json")));
const UWGivingLocators = JSON.parse(JSON.stringify(require("./Data/UWGiving_Locators.json")));
const BoardServiceLocators = JSON.parse(JSON.stringify(require("./Data/BoardService_Locators.json")));
const ManageEventsLocators = JSON.parse(JSON.stringify(require("./Data/ManageEvents_Locators.json")));

//Page specifica
const BoardServicePageReferences = require('../KeyBank/Page-Objects/BoardServicePageReferences')

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
    test ('Default Data Verification of Home page portlets', async ({page}) =>{
        const pm = new extPageManager(page)
        await pm.useHomePage().navigateToHome()
        await pm.useHomePage().examinePortletTab("How Am I Doing?",Default_HomeData, HomeLocators)
    })
    test ('Default Data Verification of Giving page portlets', async ({page})=>{
        const pm = new extPageManager(page)
        await pm.useGivingPage().navigateToGivingPage()
        //await pm.useBoardServicePage().
        await pm.useGivingPage().examinePortletTab("Matching Gifts Balance",Default_GivingData, GivingLocators)
        await pm.useGivingPage().examinePortletTab("Matching Gifts History",Default_GivingData, GivingLocators)
        await pm.useGivingPage().examinePortletTab("Credit Card Transactions",Default_GivingData, GivingLocators)
        await pm.useGivingPage().examinePortletTab("My Nominations",Default_GivingData, GivingLocators)
    })
    test ('Default Data Verification of United Way Giving page portlets', async ({page})=>{
        const pm = new extPageManager(page)
        await pm.useUWGivingPage().navigateToUWGivingPage()
        await pm.useUWGivingPage().examinePortletTab("United Way - Give Again",Default_UWGivingData, UWGivingLocators)
        await pm.useUWGivingPage().examinePortletTab("United Way Matching Gifts History",Default_UWGivingData, UWGivingLocators)
        await pm.useUWGivingPage().examinePortletTab("United Way Credit Card Transactions",Default_UWGivingData, UWGivingLocators)
        await pm.useUWGivingPage().examinePortletTab("Payroll Contributions",Default_UWGivingData, UWGivingLocators)
     })
    test ('Default Data Verification of Board Service page portlets', async ({page})=>{
        const pm = new extPageManager(page)
        await pm.useBoardServicePage().navigateToBoardServicePage()
        // using Page-Objects/BoardServicePageReferences.ts to hold all string references for the page
        await pm.useBoardServicePage().examinePortletTab(BoardServicePageReferences,"Portlet1",Default_BoardServiceData, BoardServiceLocators)
        await pm.useBoardServicePage().examinePortletTab(BoardServicePageReferences,"Portlet2",Default_BoardServiceData, BoardServiceLocators)
        await pm.useBoardServicePage().examinePortletTab(BoardServicePageReferences,"Portlet3",Default_BoardServiceData, BoardServiceLocators)
        await pm.useBoardServicePage().examinePortletTab(BoardServicePageReferences,"Portlet4",Default_BoardServiceData, BoardServiceLocators)     
        await pm.useBoardServicePage().examinePortletTab(BoardServicePageReferences,"Portlet5",Default_BoardServiceData, BoardServiceLocators)
        await pm.useBoardServicePage().examinePortletTab(BoardServicePageReferences,"Portlet6",Default_BoardServiceData, BoardServiceLocators)
    })
    test ('Default Data Verification of Manage Events page portlets', async ({page})=>{
        const pm = new extPageManager(page)
        await pm.useManageEventsPage().navigateToManageEventsPage()
        await pm.useManageEventsPage().examinePortletTab("Manage Open Events",Default_ManageEventsData, ManageEventsLocators)
        await pm.useManageEventsPage().examinePortletTab("Manage Completed Events",Default_ManageEventsData, ManageEventsLocators)
        await pm.useManageEventsPage().examinePortletTab("Events I Created",Default_ManageEventsData, ManageEventsLocators)
        await pm.useManageEventsPage().examinePortletTab("Unsubmitted Events I Created",Default_ManageEventsData, ManageEventsLocators)
    })
})

