import { Page, expect } from "@playwright/test";

const externalLoginPage = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=7272&x_source_flag=EGD&x_style_id=&x_language_code=en-US"
const homePage = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=7272&x_source_flag=EGD&x_style_id=&x_language_code=en-US"

export class UO_ExternalPageLogin {

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    
    async loginToExternalPortal (userName: string, userPassword: string){
        // start with login page. do not go to an actual external page first
        await this.page.goto(externalLoginPage)
        await this.page.getByPlaceholder('User ID').fill(userName)
        await this.page.getByPlaceholder('Password').fill(userPassword)
        await this.page.getByRole('button', { name: 'Log In' }).click()
        await this.page.waitForTimeout(250)
        // once logged in needs a destination
        await this.page.goto(homePage)
    }
    async verifyMenuItems(){
        //verify navigation bar for test donor SQAUO
        // Home, Universal Give, Universal Server, Search Volunteer Opportunities, Log your Hours, Guidelines & FAQs

           
    }



        // Verify initial presentation of the balance portlet pages: Matching Gift Balance, Current Payroll Contribution, Donation History

        // Verify containers and cards exist
    
}
