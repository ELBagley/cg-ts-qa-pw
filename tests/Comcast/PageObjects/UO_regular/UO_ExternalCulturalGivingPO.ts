import { Page, expect } from "@playwright/test";

const culturalGivingPage = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=7272&x_pl_id=43934"
            // text: A Culture of Giving
export class UO_ExternalCulturalGiving {

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    /**
     * 
     * @param pageURL - the location of the external portal page to visit but first must log in
     */
    async navigateToCultureGivingPage (){
        await this.page.goto(culturalGivingPage)
        // add page validation 
    }
    async selectBtnWorkplaceGivingProgram(){// page text: A Culture of Giving on the first section
        await this.page.getByRole('link', { name: 'Workplace Giving Program' }).click();
    }
    async selectBtnDonateToday(){// page text: A Culture of Giving on the first section
        await this.page.getByRole('link', { name: 'Donate Today' }).click();
    }


}