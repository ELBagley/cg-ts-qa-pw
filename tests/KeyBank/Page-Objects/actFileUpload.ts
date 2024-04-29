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
    
       /*
       https://sandbox.cybergrants.com/pls/cybergrants-sb/upload.entry?x_gm_id=10762&x_ut=DONOR&x_custom_field_id=2848544&x_key=
       31323216
       &x_parent_table_name=eg_request&x_proposal_type_id=
       96922
       &x_section_id=
       1862486
       &x_internal_flag=N&x_style_id=&x_invitation_id=&x_language_code=en-US
       */
    }

    // previous page needing the file up load has navigated to the File Upload page
    // when done the next page in the series is presented   
    async fillOutForm(testData: any){
        let startingPage = this.page.url()

        // BUILD URL TO FILE UPLOAD DIALOG
        let requestID = await this.page.locator('input[type="hidden"][name="x_req_id"]').getAttribute('value');
        let firstPart = "https://sandbox.cybergrants.com/pls/cybergrants-sb/upload.entry?x_gm_id=10762&x_ut=DONOR&x_custom_field_id=2848544&x_key="
        let URLToUse = firstPart + requestID + "&x_parent_table_name=eg_request&x_proposal_type_id=" + testData.proposalType + "&x_section_id=1868070&x_internal_flag=N&x_style_id=&x_invitation_id=&x_language_code=en-US"
        await this.page.goto(URLToUse)

        // Create a page.
        await this.page.getByLabel('Upload Documents').click();
        await this.page.locator('input#xfileupload[type="file"][name="filename"]').click()
        //
        // !! this is the same for all upload buttons
        //.formRowCG2848544.row  input[name="x_custom_field_value"]'
        //
        await this.page.setInputFiles('input[type="file"]#xfileupload.formFile',testData.BoardServiceDocument1);
        await this.page.locator('[value="Upload File"]').click()

        await this.page.locator('[value="Close Window"]').click();
    };
    /*
    const [fileChooser] = await Promise.all([
        this.page.waitForEvent('filechooser'),
        await this.page.getByRole('button', { name: 'Upload File' }).click(),
        await this.page.waitForTimeout(5000),
        ]);
    await this.page.locator('input[type="file"]#xfileupload.formFile').click(),
    //await fileChooser.setFiles(testData.BoardServiceDocument1),
    */
    /*
    this.page.on('filechooser', async fileChooser => {
        console.log("filechooser called")
        await fileChooser.setFiles(testData.BoardServiceDocument1);
        });
    */
   /*
    //const fileChooserPromise = this.page.waitForEvent('filechooser')
    //await this.page.getByText('Upload Documents').click();
    await this.page.getByRole('button', { name: 'Upload File' }).click(),
    //const fileChooser = await fileChooserPromise
    //await fileChooser.setFiles(testData.BoardServiceDocument1)
   */
}