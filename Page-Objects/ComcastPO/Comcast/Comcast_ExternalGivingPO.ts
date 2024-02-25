import { Page, expect } from "@playwright/test";

const givingPage = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=7272&x_page=emp_giving"

export class Comcast_ExternalGivingPO {

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    /**
     * 
     * @param pageURL - the location of the external portal page to visit but first must log in
     */
    async navigateToGivingPage (){
        await this.page.goto(givingPage)
    }
    async validatePortlet (testData: any) {  // JSON File with data to use
        
         console.log('validate portlet')
            
        const Tab1Locator = "ul[role='tablist'] > li:nth-of-type(1)"
        const Tab2Locator = "ul[role='tablist'] > li:nth-of-type(2)"
        const Tab3Locator = "ul[role='tablist'] > li:nth-of-type(3)"
        const Tab1Row0 = ".get_balances-wrapper .css-1tdt1jy  .css-gatevb"
        const Tab1Row1 =  "tbody > tr:nth-of-type(1)"
        const Tab1Row2 =  "tbody > tr:nth-of-type(2)"  
        const Tab1Row3 =  "tbody > tr:nth-of-type(3)" 
        const Tab2Row0 = "[data-url='eg_portlet_data\.get_giving_history\?x_mod_id\=455562\&x_language_code\=en-US'] .css-gatevb"
        const Tab2Row1 = "[data-url='eg_portlet_data\.get_giving_history\?x_mod_id\=455562\&x_language_code\=en-US'] tbody tr:nth-of-type(1)"
        const Tab2Row2 = "[data-url='eg_portlet_data\.get_giving_history\?x_mod_id\=455562\&x_language_code\=en-US'] tbody tr:nth-of-type(2)"
        const Tab2Row3 = "[data-url='eg_portlet_data\.get_giving_history\?x_mod_id\=455562\&x_language_code\=en-US'] tbody tr:nth-of-type(3)"
        const Tab2Row1ChangeLinkLocator = "td:nth-of-type(4) > a:nth-of-type(1)"
        const Tab2Row1CancelLinkLocator = "td:nth-of-type(4) > a:nth-of-type(2)"
        const Tab3Row0 = "tr#cgcurrentcontriheader"
        const Tab3Row1 = "[valign='top']"
        const Tab3Row2 = ""
        const Tab3Row3 = ""

        const numTabs = testData.NumTabs //expecting 3 tabs for Comcast Home portlet

        await expect(this.page.locator("ul[role='tablist'] > li")).toHaveCount(numTabs)
      
        await expect(this.page.locator(Tab1Locator)).toHaveCount(testData.Tab1Text)
        await expect(this.page.locator(Tab2Locator)).toHaveCount(testData.Tab2Text)
        await expect(this.page.locator(Tab3Locator)).toHaveCount(testData.Tab3Text)

        await this.page.locator(Tab1Locator).click()
        await expect(this.page.locator("[valign='top']")).toHaveCount(testData.Tab1Rows) //how many rows of data not including the header
        for(let i = 0; i < testData.Tab1Columns; i++){
            await expect(this.page.locator(Tab1Row0)).toContainText(testData.Tab1Row0[i]) //header
            await expect(this.page.locator(Tab1Row1)).toContainText(testData.Tab1Row1[i])
            //DEBUG console.log(testData.Tab1Row0[i] + ", " + testData.Tab1Row1[i])
        }
        await this.page.locator(Tab2Locator).click()
        await expect(this.page.locator(".css-1tdt1jy > tbody > tr")).toHaveCount(testData.Tab2Rows) //how many rows of data exist not including the header
        for(let i = 0; i < testData.Tab2Columns; i++){
            if (testData.Tab2NumRows >= 1){
                await expect(this.page.locator(Tab2Row0)).toContainText(testData.Tab2Row0[i]) //header should always exist if data
                await expect(this.page.locator(Tab2Row1)).toContainText(testData.Tab2Row1[i])
            }
            if (testData.Tab2NumRows >= 2){
                await expect(this.page.locator(Tab2Row2)).toContainText(testData.Tab2Row2[i])
            }
            if (testData.Tab2NumRows >= 3){
                await expect(this.page.locator(Tab2Row3)).toContainText(testData.Tab2Row3[i])
            }
                //DEBUG console.log(testData.Tab2Row0[i] + ", " + testData.Tab2Row1[i] + ", " + testData.Tab2Row2[i] + ", " + testData.Tab2Row3[i])
        }
    }
    async selectDonateToday (){
    /*
    await page.getByRole('button', { name: 'Donate Today' }).click();
    //// presents a popup 
    await page.getByRole('link', { name: 'Recurring Payroll Donate via' }).click();
    */
    }

    /* PT 57960 = CC DONATE
  await page.goto('https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_search.search_screen?x_gm_id=7272&x_pt_id=57960&x_source_flag=EGD&x_search_mode=B&x_source_proc=');
  await page.getByRole('heading', { name: 'Organization', exact: true }).click();
  await page.getByPlaceholder('Organization Name').fill('cat');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByLabel('Select CATALES INCORPORATED').click();
  await page.getByLabel('*Total Gift Amount').fill('15');
  await page.getByLabel('*Do you want to request a').selectOption('Y');
  await page.getByLabel('*Match Amount Requested').fill('10');
  await page.getByLabel('I have read the terms and').check();
  await page.getByRole('button', { name: 'Save and Proceed' }).click();
  await page.getByLabel('*Credit Card Number:').click();
  await page.getByLabel('*Credit Card Number:').fill('6011000990139424');
  await page.getByLabel('*Expiration Date (MMYY):').fill('0328');
  await page.getByLabel('*CVV (?)').fill('275');
  await page.getByLabel('*Name on Card').fill('Erica Bagley');
  await page.getByLabel('*Address:').fill('123 Main St');
  await page.getByLabel('*City:').fill('Andover');
  await page.getByLabel('*State/Province:').fill('massachusetts');
  await page.getByLabel('*Zip/Postal Code:').fill('01810');
  ////selected Submit
  await page.goto('https://sandbox.cybergrants.com/pls/cybergrants-sb/!cc_application.process_sphere_response?x_gm_id=7272&x_key=31209390&x_key_type=eg_request&token=ZDliNzZjYjM0MTkxOGQwNDE5NmRjOGFlZmQ3YTk4ZDc%3D&action=sale&returnurl=https%3A%2F%2Fsandbox.cybergrants.com%2Fpls%2Fcybergrants-sb%2F%21cc_application.process_sphere_response%3Fx_gm_id%3D7272%26x_key%3D31209390%26x_key_type%3Deg_request&amount=15.00&reqmediatype=y&avs=n&demo=y&customfield1=31209390&customfield2=7272&customfield3=eg_request&store=n&cc=9424&exp=0328&cvv=&name=Erica+Bagley&address1=123+Main+St&city=Andover&state=massachusetts&zip=01810&hash=df7d9edbe2c69d8a15d3291230aa15d25b5e06d4');
  await page.getByRole('link', { name: 'Return to Home Page' }).click();
});
    */
   /*  PT 57958 = recurring payroll
   https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_search.search_screen?x_gm_id=7272&x_pt_id=57958&x_source_flag=EGD&x_search_mode=B&x_source_proc=


  await page.getByPlaceholder('Organization Name').fill('dog');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByLabel('Select National Education For').click();
  await page.getByLabel('Amount Per Pay Period').fill('15');
  await page.getByLabel('*Do you want to request a').selectOption('Y');
  await page.getByLabel('I have read the terms and').check();
  await page.getByTestId('add-button').click();
  await page.getByRole('link', { name: 'Checkout' }).click();
  await page.getByRole('button', { name: 'Proceed to Review' }).click();

  await page.getByRole('button', { name: 'Submit' }).click();

  await page.getByRole('link', { name: 'Return to Home Page' }).click();
});
   */
}



