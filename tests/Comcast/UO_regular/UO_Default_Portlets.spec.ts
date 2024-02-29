import { test } from "@playwright/test"  
import { extPageManager }  from "../../../Page-Objects/ComcastPO/UO_regular/extPageManager"

const testHomeLocators = JSON.parse(JSON.stringify(require("../../../data/Comcast/UO_regular/UO_Home_Locators.json")));
const testGivingLocators = JSON.parse(JSON.stringify(require("../../../data/Comcast/UO_regular/UO_Giving_Locators.json")));
const testEventsLocators = JSON.parse(JSON.stringify(require("../../../data/Comcast/UO_regular/UO_Events_Locators.json")));

const testHomeData = JSON.parse(JSON.stringify(require('../../../data/Comcast/UO_regular/UO_Home_Default_Data.json')));
const testGivingData = JSON.parse(JSON.stringify(require('../../../data/Comcast/UO_regular/UO_Giving_Default_Data.json')));
const testEventsData = JSON.parse(JSON.stringify(require('../../../data/Comcast/UO_regular/UO_Event_Default_Portlet.json')));


test ('Examine default Home Page react portlet', async ({page}) => {
    const pm = new extPageManager(page)

    await pm.useloginPage().loginToExternalPortal('SQAUO1', '123!SilverFox')
    await pm.useHomePage().examineTabs("Current Payroll Contribution",testHomeData, testHomeLocators)
    await pm.useHomePage().examineTabs("Matching Gift Balance",testHomeData, testHomeLocators)
    await pm.useHomePage().examineTabs("My UpComing Events",testHomeData, testHomeLocators)
})
test ("examine default Universal Give react portlet", async ({page}) => {
    const pm = new extPageManager(page)

    await pm.useGivingPage().navigateToGivingPage()
    //await pm.useExaminePortlet().examineTabs(testGivingData, testGivingLocators)
})
test ("examine default Universal Events react portlet", async ({page}) => {
    const pm = new extPageManager(page)

    await pm.useEventsPage().navigateToEventsPage()
    //await pm.useExaminePortlet().examineTabs(testEventsData, testEventsLocators)

})
