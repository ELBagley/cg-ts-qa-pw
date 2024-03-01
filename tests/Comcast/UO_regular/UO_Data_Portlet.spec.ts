import { test } from "@playwright/test"  
import { extPageManager }  from "../../../Page-Objects/ComcastPO/UO_regular/extPageManager"

const testHomeLocators = JSON.parse(JSON.stringify(require("../../../data/Comcast/UO_regular/UO_Home_Locators.json")));
const testGivingLocators = JSON.parse(JSON.stringify(require("../../../data/Comcast/UO_regular/UO_Giving_Locators.json")));
const testEventsLocators = JSON.parse(JSON.stringify(require("../../../data/Comcast/UO_regular/UO_Event_Locators.json")));

const testHomeData = JSON.parse(JSON.stringify(require('../../../data/Comcast/UO_regular/UO_Home_Data.json')));
const testGivingData = JSON.parse(JSON.stringify(require('../../../data/Comcast/UO_regular/UO_Giving_Data.json')));
const testEventsDataShort = JSON.parse(JSON.stringify(require('../../../data/Comcast/UO_regular/UO_Event_DataShort.json')));
const testEventsDataLong = JSON.parse(JSON.stringify(require('../../../data/Comcast/UO_regular/UO_Event_DataLong.json')));

test ('Examine Home page with data', async ({page}) => {
    const pm = new extPageManager(page)
    await pm.useloginPage().loginToExternalPortal('SQAUO', '123!SilverFox')
    await pm.useHomePage().examineTabs("Current Payroll Contribution",testHomeData, testHomeLocators)
    await pm.useHomePage().examineTabs("Matching Gift Balance",testHomeData, testHomeLocators)
    await pm.useHomePage().examineTabs("My UpComing Events",testHomeData, testHomeLocators)
})
test ("Examine Universal Give page with data", async ({page}) => {
    const pm = new extPageManager(page)
    await pm.useloginPage().loginToExternalPortal('SQAUO', '123!SilverFox')
    await pm.useGivingPage().navigateToGivingPage()
    await pm.useGivingPage().examineTabs("Matching Gift Balance",testGivingData, testGivingLocators)
    await pm.useGivingPage().examineTabs("Current Payroll Contribution",testGivingData, testGivingLocators)
    await pm.useGivingPage().examineTabs("Donation History",testGivingData, testGivingLocators)
})
test ("Examine Create Events with data - short", async ({page}) => {
    const pm = new extPageManager(page)
    await pm.useloginPage().loginToExternalPortal('SQAUO', '123!SilverFox')
    await pm.useEventsPage().navigateToEventsPage()
    await pm.useEventsPage().examineTabs("Manage Open Events",testEventsDataShort, testEventsLocators)
    await pm.useEventsPage().examineTabs("Manage Completed Events",testEventsDataShort, testEventsLocators)
    await pm.useEventsPage().examineTabs("Events I Created",testEventsDataShort, testEventsLocators)
    await pm.useEventsPage().examineTabs("Unsubmitted Events I Created",testEventsDataShort, testEventsLocators)
})
test ("Examine Create Events with data - long", async ({page}) => {
    const pm = new extPageManager(page)
    await pm.useloginPage().loginToExternalPortal('SQAUO', '123!SilverFox')
    await pm.useEventsPage().navigateToEventsPage()
    await pm.useEventsPage().examineTabs("Manage Open Events",testEventsDataLong, testEventsLocators)
    await pm.useEventsPage().examineTabs("Manage Completed Events",testEventsDataLong, testEventsLocators)
    await pm.useEventsPage().examineTabs("Events I Created",testEventsDataLong, testEventsLocators)
    await pm.useEventsPage().examineTabs("Unsubmitted Events I Created",testEventsDataLong, testEventsLocators)
})

