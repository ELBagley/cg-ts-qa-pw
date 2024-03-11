import { Page, expect } from "@playwright/test";

const extOrgSearchPage = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_search.search_screen?x_gm_id=10582&x_pt_id=94218&x_source_flag=EGD&x_search_mode=B&x_source_proc="

export class extOrgSearchPO{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
 
    async navigateToOrgSearchPage (){
        const pageTitle = "Organizational Search"
        await this.page.goto(extOrgSearchPage)
        expect(this.page.locator(extOrgSearchPage).getByText(pageTitle)).toBeTruthy()
    }

    //async findOrganization(OrgToSearch: string){
    async findOrganization(){
    // on organization Search page
        await this.page.getByPlaceholder('Organization Name').fill("cat");
        await this.page.getByRole('button', { name: 'Search', exact: true }).click();
        await this.page.getByLabel('Select 1 CAT INC').click();
        await this.page.getByLabel('*Amount').fill('25');
        await this.page.getByLabel('Designation').fill('none');
        await this.page.getByLabel('Privacy Preference').selectOption('ANONYMOUS');
        await this.page.getByLabel('I have read the terms and').check();
        await this.page.getByRole('button', { name: 'Save and Proceed' }).click();
        // goes to review Information for CC DOnation
        //https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_req.formcheck?x_gm_id=10582
    }

};