import { Page, expect } from "@playwright/test";
import { extPageManager }  from "../Page-Objects/extPageManagerPO"

export class OrganizationSearch {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    // first time searches can take a while
    // If the organization is already in the "My Recent Organizations" area then cannot readd an application
    // It is possible that an application has been submitted just not approved. Not sure how the feature should respond

    async selectOrganization(testData: any, searchType: string){
        await this.page.getByPlaceholder('Organization Name').fill(""); //clear any existing text

        if (searchType == "BoardService"){
            await this.page.getByPlaceholder('Organization Name').fill(testData.organizationName); //css-1q464cn
            await this.page.getByRole('button', { name: 'Search', exact: true }).click();  
            //await this.page.waitForTimeout(60000); 
            await this.page.getByLabel(testData.organizationName).click()
        }
        // check "My Recent Organizations"
        else {
            console.log('Organization has already been applied to')
            //await this.page.getByLabel(testData.organizationButton).click()
        }
        //await this.page.getByRole("link", {name: "select " + testData.organizationName}).click();         
        //await this.page.getByLabel(testData.organizationName).nth(0).click()    
        //await this.page.getByLabel(testData.organizationButton).click()
    }

    async selectExistingOrganization(existingOrganization: any){
        await this.page.getByLabel(existingOrganization).click()
    }
    async verifyGraphicAmounts(expectedRemainingBalance: any){
        //this is a portlet but just text to validate
        await this.page.getByText(expectedRemainingBalance).click();
        await this.page.getByText('remaining from $').click();
        await this.page.getByText('$2,000.00').click();
    }
    async selectCheckout(){
        //part of the payroll deduction process
        await this.page.getByRole('link', { name: 'Checkout' }).click();        
    }
}