import { Page } from "@playwright/test";

const homePageURL = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=1998&x_page=home"
const givePageURL = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=1998&x_page=giving"

export class GivePO{
    private readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    async navigateToPageandLogin (userName: string, userPassword: string){
        await this.navigateToHomePage
        await this.page.getByPlaceholder('Username').fill(userName)
        await this.page.getByPlaceholder('Password').fill(userPassword)
        await this.page.getByRole('button').getByText("Log In").click()
    }
    async navigateToHomePage (){
        await this.page.goto(homePageURL, {waitUntil: "domcontentloaded"})
    }

    async navigateToGivePage(){
        await this.page.goto(givePageURL, {waitUntil: "domcontentloaded"})
    }

    async giveToEducationByOneTimeCreditCard(amount: string, privacy: string, designation: string ) {
        await this.page.getByRole('button').getByText('One-time credit card').click()
        // specify the amount
        await this.page.locator("formRowCG2550814_M18211281.row  input[name='x_detail_field_value']").fill(amount)
        // specfy Designation (optional)
        await this.page.locator(".formRowCG583504_M18211281.row  input[name='x_detail_field_value']").fill(designation)
        // set privacy preference
        await this.page.locator("select[name='x_detail_field_value']").selectOption('Anonymous')
        await this.page.locator('.css-5ohwf3-Button > .css-14optbf-Button').click()  //to Organization Summary page
    }
    
    async giveToEducationByOneTimePayroll(amount: number) {
        await this.page.getByRole('button').getByText('One-time Payroll').click()
    }
}
