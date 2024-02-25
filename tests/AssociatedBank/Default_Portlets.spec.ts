import { test } from "@playwright/test"    

import { extHomePO } from "../../Page-Objects/AssociatedBankPO/extHomePO"
import { extLoginPO } from "../../Page-Objects/AssociatedBankPO/extLoginPO"
import { extGivingPO } from "../../Page-Objects/AssociatedBankPO/extGivingPO"
import { extReviewInformationPO } from "../../Page-Objects/AssociatedBankPO/extReviewInformation"
import { extOrgSearchPO } from "../../Page-Objects/AssociatedBankPO/extOrganizationSearchPO"

const extLoginPage = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_login.login?x_gm_id=10582"
const extHomePage = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10582&x_page=home"

test ('Examine default Giving Page react portlet', async ({page}) => {

    // log in to external home page but login first
    const extHomePage = new extHomePO(page) 
    const extLoginPage = new extLoginPO(page) 
    const extGivingPage = new extGivingPO(page) 
    const extReviewInformationPage = new extReviewInformationPO(page)
    const extOrgSearchPage = new extOrgSearchPO(page)

    await extLoginPage.loginToExternalPortal('DONOR1', '123!SilverFox')

    // after login on the home page, select the "Giving" button
    await extHomePage.selectBtnGiving()
    
})
    // on page = giving
    //await extGivingPage.makeDonation()

