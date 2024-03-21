import { Page, expect } from "@playwright/test";
import { examinePortletHelper } from "../Fixtures/ExaminePortlet"

export class extEmployeeNomination{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    
    async navigateToEmployeeNominationpage(){ // NO PAGE TO GO TO??
        await this.page.goto('https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=10762&x_page=home');
    }
    async createEmployeeNomination(testData: any){
        await this.page.getByRole("button", {name: "Nominate an Employee"})
       // transitions to review Information
       // then submit
    }
    async redeemCommunityImpactAward(){
        await this.page.getByRole("button", {name: "Redeem Community Inpact Award"})
    }
}