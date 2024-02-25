import { Page, expect } from "@playwright/test";
import { examinePortletHelper } from "../ExaminePortlet"

//const testData = JSON.parse(JSON.stringify(require('../../Fixtures/Comcast/Home_ContributionPortlet.json')));

const homePage = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=7272&x_source_flag=EGD&x_style_id=&x_language_code=en-US"

export class UO_ExternalHome extends examinePortletHelper{

    constructor(page: Page) {
        super(page)
    }
 
    async navigateToHomePage (){
        await this.page.goto(homePage)
    }
    
}
