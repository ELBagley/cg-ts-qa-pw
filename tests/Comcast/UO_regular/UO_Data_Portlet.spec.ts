import { test } from "@playwright/test"    
import { UO_ExternalPageLogin } from "../../../page-objects/ComcastPO/UO_regular/UO_ExternalLoginPO"
import { UO_ExternalHome } from "../../../page-objects/ComcastPO/UO_regular/UO_ExternalHomePO"
import { UO_ExternalGiving } from "../../../page-objects/ComcastPO/UO_regular/UO_ExternalGivingPO"
import { UO_ExternalEvents } from "../../../page-objects/ComcastPO/UO_regular/UO_ExternalEventsPO"

const testDataHome = JSON.parse(JSON.stringify(require("../../../fixtures/Comcast/UO_regular/UO_Home_ContributionPortlet.json")));
const testDataGiving = JSON.parse(JSON.stringify(require("../../../fixtures/Comcast/UO_regular/UO_Giving_MatchPortlet.json")));
const testDataEvents = JSON.parse(JSON.stringify(require("../../../fixtures/Comcast/UO_regular/UO_Event_Portlet.json")));

test ('Examine Home Page portlet', async ({page}) => {

    const externalPageLogin = new UO_ExternalPageLogin(page)
    const externalHome = new UO_ExternalHome(page)
    const externalGivePO = new UO_ExternalGiving(page) 
    const externalEventPO = new UO_ExternalEvents(page) 

    await externalPageLogin.loginToExternalPortal('SQAUO1', '123!SilverFox')
    await externalHome.validatePortlet(testDataHome)
    await externalGivePO.validatePortlet(testDataGiving)
    await externalEventPO.validatePortlet(testDataEvents)
}
)

