import { test } from "@playwright/test"    
import { Comcast_ExternalPageLogin } from "../../../page-objects/ComcastPO/Comcast/Comcast_ExternalLoginPO"
import { Comcast_ExternalHomePO } from    "../../../page-objects/ComcastPO/Comcast/Comcast_ExternalHomePO"
const testData = JSON.parse(JSON.stringify(require('../../../fixtures/Comcast/Comcast/Comcast_Home_ContributionPortlet.json')));

test ('Examine Home Page portlet', async ({page}) => {

    const externalPageLogin = new Comcast_ExternalPageLogin(page)
    const externalHomePO = new Comcast_ExternalHomePO(page) 

    await externalPageLogin.loginToExternalPortal('SQAUO', '123!SilverFox')
    
    await externalHomePO.validatePortlet(testData)

 
})

