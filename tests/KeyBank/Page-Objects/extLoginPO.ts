import { Page, expect } from "@playwright/test";
import { examinePortletHelper } from "../Fixtures/ExaminePortlet2"

const extLoginPage = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10762&x_source_flag=EGD&x_style_id=&x_language_code=en-US"
const extHomePage = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10762&x_source_flag=EGD&x_style_id=&x_language_code=en-US"
                  //https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_login.login?x_gm_id=10762&target=https:%2F%2Fsandbox.cybergrants.com%2Fpls%2Fcybergrants-sb%2Feg_portal.home%3Fx_gm_id=10762%26x_source_flag=EGD%26x_style_id%26x_language_code=en-US

export class extLogin extends examinePortletHelper{

  constructor(page: Page) {
      super(page)
  }
    /*
  await page.getByPlaceholder('Staff ID').click();
  await page.getByPlaceholder('Staff ID').fill('Donor1');
  await page.getByPlaceholder('Staff ID').press('Tab');
  await page.getByPlaceholder('Password').fill('123!SilverFox');
  await page.getByPlaceholder('Password').press('Enter');
    */

  async loginToExternalPortal (userName: string, userPassword: string){
    // start with login page. do not go to an actual external page first
    await this.page.goto(extLoginPage)
    await this.page.getByPlaceholder('Employee ID').fill(userName)
    await this.page.getByPlaceholder('Password').fill(userPassword)
    //await this.page.getByRole('button', { name: ' Log In' }).click() //04/11/2024
    await this.page.locator('#primaryAction').click()
    await this.page.waitForTimeout(250)
    // once logged in needs a destination
    await this.page.goto(extHomePage)
  }
}