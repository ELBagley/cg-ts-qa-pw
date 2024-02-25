import { Page, expect } from "@playwright/test";
//const testData = JSON.parse(JSON.stringify(require('../../Fixtures/Comcast/UO_regular/UO_Home_ContributionPortlet.json')));

const homePage = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=7272&x_page=home"

export class Comcast_ExternalHomePO {

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
 
    async navigateToComcastHomePage (){
        await this.page.goto(homePage)
    }

    async validatePortlet(testData: any) {
        const Tab1Row0 = ".css-gatevb"
        const Tab1Row1 = "tbody > tr"
        const PortletText = ".portlet-title"

    }
}