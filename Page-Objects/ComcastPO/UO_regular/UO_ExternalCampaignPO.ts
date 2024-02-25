import { Page, expect } from "@playwright/test";

const campaignPage = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=7272&x_page=uo_campaign"
const cardArtsCulture = "div:nth-of-type(1) > .blocs-content > .portlet.portlet-class-from-db.teaser-cards.teaser-wrapper"

export class UO_ExternalCampain{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }


    /**
     * 
     * @param pageURL - the location of the external portal page to visit but first must log in
     */
    async navigateToCampaignPage (){
        const pageTitle = "Team Member Workplace Giving Campaign"
        await this.page.goto(campaignPage)
        expect(this.page.locator(campaignPage).getByText(pageTitle)).toBeTruthy()
    }
    async varifyPortletPresentation(){
        //3 portlet buttons
        await this.page.getByText('Current Payroll Contribution').click();
        await this.page.getByText('Matching Gifts Donor Balance').click();
        await this.page.getByText('Credit Card Transaction').click();
    }
    async verifyPaymentOptions(){
        await expect(this.page.locator(cardArtsCulture + ".css-b89xi2 > a:nth-of-type(1)")).toHaveText("Credit Card")
        await expect(this.page.locator(cardArtsCulture + ".css-b89xi2 > a:nth-of-type(2)")).toHaveText("Weekly Payroll Deduction")
        // TODO: add the other cards below using constant + specific buttons

    }
    async selectBtnACCreditCard(){ //send the organization so only one method??
        // Art & Culture's "credit card button"; opens "One-time Credit Card Donation Information" page
        //https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_application.start_app?x_gm_id=7272&x_pt_id=56360&x_organization_id=14086643&x_source_flag=EGD&x_style_id=
        await this.page.locator(cardArtsCulture + ".css-b89xi2 > a:nth-of-type(1)").click();

        //https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_application.start_app?x_gm_id=7272&x_pt_id=56360&x_organization_id=14591949&x_source_flag=EGD&x_style_id=
        //https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_application.start_app?x_gm_id=7272&x_pt_id=56360&x_organization_id=14591991&x_source_flag=EGD&x_style_id=
        //https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_application.start_app?x_gm_id=7272&x_pt_id=56360&x_organization_id=14591995&x_source_flag=EGD&x_style_id=
        //https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_application.start_app?x_gm_id=7272&x_pt_id=56360&x_organization_id=13448869&x_source_flag=EGD&x_style_id=
        //https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_application.start_app?x_gm_id=7272&x_pt_id=56360&x_organization_id=14592005&x_source_flag=EGD&x_style_id=
    }
    async selectBtnWeeklyPayrollDeduction(){

    } 



}