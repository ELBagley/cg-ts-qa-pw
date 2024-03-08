import { Page, expect } from "@playwright/test";

import { extBoardService } from "./BoardServicePO"
import { CreditCardDonationInformation } from "./CreditCardDonationInformationPO"
import { extDisasterRelief } from "./DisasterReliefPO"
import { extDollarsForDoers } from "./DollarsForDoersPO"
import { DonorMatching } from "./DonorMatchingGiftPO"
import { eventInformation } from "./EventInformationPO"
import { extGiving } from "./GivingPO"
import { GivingReview } from "./GivingReviewPO"
import { extHome } from "./HomePO"
import { extLogin } from "./LoginPO"
import { extManageEvents } from "./ManageEventsPO"
import { MatchingGifts } from "./MatchingGiftsPO"
import { OrganizationSearch} from "./OrganizationSearchPO"
import { SubmissionSuccessful } from "./SubmissionSuccessfulPO"
import { extUWGiving } from "./UWGivingPO"
import { extVolunteerHours } from "./VolunteerHoursPO"
import { extVolunteer } from "./VolunteerPO"

export class extPageManager{
    private readonly page: Page
    private readonly extLoginPage: extLogin
    private readonly extHomePage: extHome
    private readonly extD4DPage: extDollarsForDoers
    private readonly extVolunteerHoursPage: extVolunteerHours
    private readonly extGivingPage: extGiving
    private readonly extUWGivingPage: extUWGiving
    private readonly extBoardService: extBoardService
    private readonly extVolunteer: extVolunteer
    private readonly extDisasterRelief: extDisasterRelief
    private readonly MatchingGiftsPage: MatchingGifts

    constructor(page: Page) {
        this.page = page
        this.extLoginPage = new extLogin (this.page)
        this.extHomePage = new extHome(this.page)
        this.extD4DPage = new extDollarsForDoers(this.page)
        this.MatchingGiftsPage = new MatchingGifts(this.page)
        this.extVolunteerHoursPage = new extVolunteerHours(this.page)
        this.extGivingPage = new extGiving(this.page)
        this.extUWGivingPage = new extUWGiving(this.page)
    }

    useloginPage(){
        return this.extLoginPage
    }
    useHomePage(){
        return this.extHomePage
    }
    useD4DPage(){
        return this.extD4DPage
    }
    useMatchingGiftsPage(){
        return this.MatchingGiftsPage
    }
    useVolunteerHoursPage(){
        return this.extVolunteerHoursPage
    }
    useGivingPage(){
        return this.extGivingPage
    }
    useUWGivingPage(){
        return this.extUWGivingPage
    }
}