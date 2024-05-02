import { Page, expect } from "@playwright/test";
import { DateHelper } from "../Fixtures/DateTime"

export class BoardServiceMembershipInformation{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    
    async submitBoardServiceMemberhip(testData: any){ 
        await this.page.getByLabel('*Board Service Start Date').fill(testData.BoardServiceStartDate);
        await this.page.getByLabel('*Board Service End Date').fill(testData.BoardServiceEndDate);
        await this.page.getByLabel('Description').fill(testData.description);
        await this.page.getByRole('button', { name: 'Save and Proceed' }).click();
    }

    async submitBoardServiceMembership2(testData: any){
        const DateFinder = new DateHelper
        let startDate = DateFinder.findDate(testData.BoardServiceStartDate)
        let endDate = DateFinder.findDate(testData.BoardServiceEndDate)
        
        //fill out form then navigate to the File Upload page. The page Manager will fill out the form using a PO class
        await this.page.locator('#CG2828314').fill(startDate as string)
        await this.page.locator('#CG2828308').fill(endDate as string); 

        await this.page.pause()
        // THIS DOESN"T WORK. there are two exact locators
        await this.page.getByLabel('Description').fill(testData.Description);


        //.formRowCG2848544.row
        //await expect(this.page.locator("div.row.formRow.#CG28283082848544::after")).toBeVisible()
        //let content = this.page.evaluate("window.getComputedStyle(document.getElementById('div.row.formRow.#CG28283082848544'), '::after')['content']")
        
        // get current request ID
        //let curRequest = await this.page.locator('input[type="hidden"][name="x_req_id"]').getAttribute('value');

        // create the URL
        //let firstPart = "https://sandbox.cybergrants.com/pls/cybergrants-sb/upload.entry?x_gm_id=10762&x_ut=DONOR&x_custom_field_id=2848544&x_key="
        //let URLToUse = firstPart + curRequest + "&x_parent_table_name=eg_request&x_proposal_type_id=" + testData.proposalType + "&x_section_id=1868070&x_internal_flag=N&x_style_id=&x_invitation_id=&x_language_code=en-US"
        //navigate to the URL
        //await this.page.goto(URLToUse)
 
        //await page.getByRole('button', { name: 'Submit' }).click();
        //await page.getByRole('link', { name: 'Return to Home Page' }).click();
      
    }
}