import { test } from "@playwright/test"
import { extPageManager }  from "./Page-Objects/extPageManagerPO"

// VERIFY DATA PORTLETS - AS NEEDED
const HomeLocators = JSON.parse(JSON.stringify(require("./Data/Home_Locators.json")));
const GivingLocators = JSON.parse(JSON.stringify(require("./Data/Giving_Locators.json")));
const UWGivingLocators = JSON.parse(JSON.stringify(require("./Data/UWGiving_Locators.json")));
const BoardServiceLocators = JSON.parse(JSON.stringify(require("./Data/BoardService_Locators.json")));
const ManageEventsLocators = JSON.parse(JSON.stringify(require("./Data/ManageEvents_Locators.json")));

//Page specifics
// The Page-Object JSON heading must reflect if there was a table presented what would it look like
const BoardServicePageReferences = JSON.parse(JSON.stringify(require('../KeyBank/Page-Objects/extBoardServicePageReferences')));
const UWGivingPageReferences = JSON.parse(JSON.stringify(require('../KeyBank/Page-Objects/extUWGivingPageReferences')));
const GivingPageReferences = JSON.parse(JSON.stringify(require('../KeyBank/Page-Objects/extGivingPageReferences2')));
const MangeEventsPageReferences = JSON.parse(JSON.stringify(require('../KeyBank/Page-Objects/extManageEventsPageReferences')));
const HomePageReferences = JSON.parse(JSON.stringify(require('../KeyBank/Page-Objects/extHomePageReferences')));

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
        await pm.useloginPage().loginToExternalPortal('DonorDefault', '123!SilverFox');
    })
    test ('Default Data Verification of Home page portlets', async ({page}) =>{
        const pm = new extPageManager(page)
        await pm.useHomePage().navigateToHome()
        await pm.useHomePage().examinePortletTab(HomePageReferences,Default_HomeData, HomeLocators)
    })
    test ('Default Data Verification of Giving page portlets', async ({page})=>{
        const pm = new extPageManager(page)
        await pm.useGivingPage().navigateToGivingPage()
        //await pm.useBoardServicePage().
        await pm.useGivingPage().examinePortletTab(GivingPageReferences,Default_GivingData, GivingLocators)
     })
    test ('Default Data Verification of United Way Giving page portlets', async ({page})=>{
        const pm = new extPageManager(page)
        await pm.useUWGivingPage().navigateToUWGivingPage()
        await pm.useUWGivingPage().examinePortletTab(UWGivingPageReferences,Default_UWGivingData, UWGivingLocators)
    })
    test ('Default Data Verification of Board Service page portlets', async ({page})=>{
        const pm = new extPageManager(page)
        await pm.useBoardServicePage().navigateToBoardServicePage()
        // using Page-Objects/BoardServicePageReferences.ts to hold all string references for the page
        await pm.useBoardServicePage().examinePortletTab(BoardServicePageReferences,Default_BoardServiceData, BoardServiceLocators)
    })
    test ('Default Data Verification of Manage Events page portlets', async ({page})=>{
        const pm = new extPageManager(page)
        await pm.useManageEventsPage().navigateToManageEventsPage()
        await pm.useManageEventsPage().examinePortletTab(MangeEventsPageReferences,Default_ManageEventsData, ManageEventsLocators)
     })
})

