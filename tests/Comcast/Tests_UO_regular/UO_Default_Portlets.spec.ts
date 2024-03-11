import { test } from "@playwright/test"  
import { extPageManager }  from "../PageObjects/UO_regular/extPageManager"

const testHomeLocators = JSON.parse(JSON.stringify(require("../data/Comcast/UO_regular/UO_Home_Locators.json")));
const testGivingLocators = JSON.parse(JSON.stringify(require("../data/Comcast/UO_regular/UO_Giving_Locators.json")));
const testEventsLocators = JSON.parse(JSON.stringify(require("../data/Comcast/UO_regular/UO_Event_Locators.json")));

const testHomeData = JSON.parse(JSON.stringify(require('../data/Comcast/UO_regular/UO_Home_Default_Data.json')));
const testGivingData = JSON.parse(JSON.stringify(require('../data/Comcast/UO_regular/UO_Giving_Default_Data.json')));
const testEventsData = JSON.parse(JSON.stringify(require('../data/Comcast/UO_regular/UO_Event_Default_Data.json')));


test ('Examine default Home Page react portlet', async ({page}) => {
    const pm = new extPageManager(page)
    await pm.useloginPage().loginToExternalPortal('SQAUO1', '123!SilverFox')
    await pm.useHomePage().examinePortletTab("Current Payroll Contribution",testHomeData, testHomeLocators)
    await pm.useHomePage().examinePortletTab("Matching Gift Balance",testHomeData, testHomeLocators)
    await pm.useHomePage().examinePortletTab("My Upcoming Events",testHomeData, testHomeLocators)
})
test ("Examine default Universal Give react portlet", async ({page}) => {
    const pm = new extPageManager(page)
    await pm.useloginPage().loginToExternalPortal('SQAUO1', '123!SilverFox')
    await pm.useGivingPage().navigateToGivingPage()
    await pm.useGivingPage().examinePortletTab("Matching Gift Balance",testGivingData, testGivingLocators)
    await pm.useGivingPage().examinePortletTab("Current Payroll Contribution",testGivingData, testGivingLocators)
    await pm.useGivingPage().examinePortletTab("Donation History",testGivingData, testGivingLocators)
})
test ("Examine default Universal Events portlets - short", async ({page}) => {
    const pm = new extPageManager(page)
    await pm.useloginPage().loginToExternalPortal('SQAUO1', '123!SilverFox')
    await pm.useEventsPage().navigateToEventsPage()
    await pm.useEventsPage().examinePortletTab("Manage Open Events",testEventsData, testEventsLocators)
    await pm.useEventsPage().examinePortletTab("Manage Completed Events",testEventsData, testEventsLocators)
    await pm.useEventsPage().examinePortletTab("Events I Created",testEventsData, testEventsLocators)
    await pm.useEventsPage().examinePortletTab("Unsubmitted Events I Created",testEventsData, testEventsLocators)
})
