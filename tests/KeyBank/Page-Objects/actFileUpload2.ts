import { Page, expect } from "@playwright/test";

export class addFileUpload{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    
    public createFileUploadURL(requestID: any, proposalType: string ): string {
       let firstPart = "https://sandbox.cybergrants.com/pls/cybergrants-sb/upload.entry?x_gm_id=10762&x_ut=DONOR&x_custom_field_id=2848544&x_key="
       let URLToUse = firstPart + requestID + "&x_parent_table_name=eg_request&x_proposal_type_id=" + proposalType + "&x_section_id=1868070&x_internal_flag=N&x_style_id=&x_invitation_id=&x_language_code=en-US"
       return URLToUse
    
    }

    // request page requiring a file upload must open a browser context window to the File Upload page
    // when done the borwser context is closed, however the file upload is still in memory
    // refreshing the request page adds the file from memory
    async fillOutForm(testData: any){
        let startingPage = this.page.url()

        // BUILD URL TO FILE UPLOAD DIALOG
        let requestID = await this.page.locator('input[type="hidden"][name="x_req_id"]').getAttribute('value');
        let firstPart = "https://sandbox.cybergrants.com/pls/cybergrants-sb/upload.entry?x_gm_id=10762&x_ut=DONOR&x_custom_field_id=2848544&x_key="
        let URLToUse = firstPart + requestID + "&x_parent_table_name=eg_request&x_proposal_type_id=" + testData.ProposalType + "&x_section_id=1868070&x_internal_flag=N&x_style_id=&x_invitation_id=&x_language_code=en-US"
        //await this.page.goto(URLToUse)

        // Create a context page
        // Create a new incognito browser context
        var playwright = await playwright.CreateAsync();
var browser = await playwright.chromium.LaunchAsync();
var context = await browser.NewContextAsync();
var page = await context.NewPageAsync(); ;
await page.GotoAsync(URLToUse);

        //await this.page.locator('input#xfileupload[type="file"][name="filename"]').click()

        await this.page.setInputFiles('input[type="file"]#xfileupload.formFile',testData.BoardServiceDocument1);
        await this.page.pause()
        await this.page.locator('[value="Upload File"]').click()
        await this.page.locator('[value="Close Window"]').click()
        //return to previous page
        // Dispose context once it is no longer needed.
        await context.close();
        //refresh request page
        //await this.page.locator("Save and Proceed").click()
        await this.page.reload();

    };
    
}