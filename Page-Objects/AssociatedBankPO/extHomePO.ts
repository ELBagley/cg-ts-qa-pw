import { Page, expect } from "@playwright/test";

const extHomePage = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10582&x_page=home"

export class extHomePO {

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    
    async visitHomePage (){
        await this.page.goto(extHomePage)
    }

    async verifyHomePage(){     
        // on the home page, examine defaults on react portlet
    }

    async selectBtnGiving(){
        this.page.locator(".css-1fgt4zp > a:nth-of-type(2)").click()
    }
    async selectBtnVolunteer(){
        this.page.locator(".css-1fgt4zp > a:nth-of-type(1)").click()
    }
}