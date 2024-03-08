import { test } from "@playwright/test"  
import { extPageManager }  from "./Page-Objects/extPageManager"
import { beforeEach } from "node:test";

const HomeLocators = JSON.parse(JSON.stringify(require("../../../data/Comcast/UO_regular/UO_Home_Locators.json")));
const GivingLocators = JSON.parse(JSON.stringify(require("../../../data/Comcast/UO_regular/UO_Giving_Locators.json")));
const EventsLocators = JSON.parse(JSON.stringify(require("../../../data/Comcast/UO_regular/UO_Event_Locators.json")));

const HomeData = JSON.parse(JSON.stringify(require('../../../data/Comcast/UO_regular/UO_Home_Data.json')));
const GivingData = JSON.parse(JSON.stringify(require('../../../data/Comcast/UO_regular/UO_Giving_Data.json')));
const EventsDataShort = JSON.parse(JSON.stringify(require('../../../data/Comcast/UO_regular/UO_Event_DataShort.json')));
const EventsDataLong = JSON.parse(JSON.stringify(require('../../../data/Comcast/UO_regular/UO_Event_DataLong.json')));

test.describe('Verify a portlets with data on each of the external pages',() => {

    test.beforeEach('Login to external portal', async ({page}) => {
        const pm = new extPageManager(page);
        await pm.useloginPage().loginToExternalPortal('DONOR1', '123!SilverFox');
    })

    test ('Examine Home page with data', async ({page}) => {
        const pm = new extPageManager(page)
        await pm.useHomePage().examinePortletTab("Current Payroll Contribution",HomeData, HomeLocators)
        await pm.useHomePage().examinePortletTab("Matching Gift Balance",HomeData, HomeLocators)
        await pm.useHomePage().examinePortletTab("My Upcoming Events",HomeData, HomeLocators)
    })
    test ("Examine Universal Give page with data", async ({page}) => {
        const pm = new extPageManager(page)
        await pm.useD4DPage().navigateToD4DPage()
        await pm.useD4DPage().examinePortletTab("Matching Gift Balance",GivingData, GivingLocators)
        await pm.useD4DPage().examinePortletTab("Current Payroll Contribution",GivingData, GivingLocators)
        await pm.useD4DPage().examinePortletTab("Donation History",GivingData, GivingLocators)
    })
    test ("Examine Create Events with data - short", async ({page}) => {
        const pm = new extPageManager(page)
        await pm.useMatchingGiftsPage().navigateToMatchingGiftsPage()
        await pm.useMatchingGiftsPage().examinePortletTab("Manage Open Events",EventsDataShort, EventsLocators)
        await pm.useMatchingGiftsPage().examinePortletTab("Manage Completed Events",EventsDataShort, EventsLocators)
        await pm.useMatchingGiftsPage().examinePortletTab("Events I Created",EventsDataShort, EventsLocators)
        await pm.useMatchingGiftsPage().examinePortletTab("Unsubmitted Events I Created",EventsDataShort, EventsLocators)
    })
    test ("Examine Create Events with data - long", async ({page}) => {
        const pm = new extPageManager(page)
        await pm.useVolunteerHoursPage().navigateToVolunteerHoursPage()
        await pm.useVolunteerHoursPage().examinePortletTab("Manage Open Events",EventsDataLong, EventsLocators)
        await pm.useVolunteerHoursPage().examinePortletTab("Manage Completed Events",EventsDataLong, EventsLocators)
        await pm.useVolunteerHoursPage().examinePortletTab("Events I Created",EventsDataLong, EventsLocators)
        await pm.useVolunteerHoursPage().examinePortletTab("Unsubmitted Events I Created",EventsDataLong, EventsLocators)
    })
})
