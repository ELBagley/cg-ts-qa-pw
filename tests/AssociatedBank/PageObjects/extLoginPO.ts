import { Page, expect } from "@playwright/test";

const externalLoginPage = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_login.login?x_gm_id=7272"
const extHomePage = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10582&x_page=home"

export class extLoginPO {

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    
    async loginToExternalPortal (userName: string, userPassword: string){
        // start with login page. does not go to an actual external page first
        await this.page.goto(externalLoginPage)
        await this.page.getByPlaceholder('User ID').fill(userName)
        await this.page.getByPlaceholder('Password').fill(userPassword)
        await this.page.getByRole('button', { name: 'Log In' }).click()
        await this.page.waitForTimeout(250)
        // once logged in goes to Home
    }
}