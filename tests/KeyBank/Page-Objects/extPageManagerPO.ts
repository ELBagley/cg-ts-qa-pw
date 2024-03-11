import { Page, expect } from "@playwright/test";

import { extBoardService } from "./BoardServicePO"
import { CreditCardDonation } from "./CreditCardDonationPO"
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
    private readonly extBoardServicePage: extBoardService
    private readonly CreditCardDonationPage: CreditCardDonation
    private readonly extDisasterReliefPage: extDisasterRelief
    private readonly extD4DPage: extDollarsForDoers
    private readonly DonorMatchingPage: DonorMatching
    private readonly EventInformationPage: eventInformation
    private readonly extGivingPage: extGiving
    private readonly GivingReviewPage: GivingReview
    private readonly extHomePage: extHome
    private readonly extLoginPage: extLogin
    private readonly extManageEventsPage: extManageEvents
    private readonly MatchingGiftsPage: MatchingGifts
    private readonly OrganizationSearchPage: OrganizationSearch
    private readonly SubmissionSuccessfulPage: SubmissionSuccessful
    private readonly extUWGivingPage: extUWGiving
    private readonly extVolunteerHoursPage: extVolunteerHours
    private readonly extVolunteerPage: extVolunteer
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
        this.extBoardServicePage = new extBoardService (this.page)
        this.CreditCardDonationPage = new CreditCardDonation (this.page)
        this.extDisasterReliefPage = new extDisasterRelief (this.page)
        this.extD4DPage = new extDollarsForDoers (this.page)
        this.DonorMatchingPage = new DonorMatching (this.page)
        this.EventInformationPage = new eventInformation (this.page)
        this.extGivingPage = new extGiving(this.page)
        this.GivingReviewPage = new GivingReview (this.page)
        this.extHomePage = new extHome(this.page)
        this.extLoginPage = new extLogin (this.page)
        this.extManageEventsPage = new extManageEvents (this.page)
        this.MatchingGiftsPage = new MatchingGifts(this.page)
        this.OrganizationSearchPage = new OrganizationSearch(this.page)
        this.SubmissionSuccessfulPage = new SubmissionSuccessful(this.page)
        this.extUWGivingPage = new extUWGiving(this.page)      
        this.extVolunteerHoursPage = new extVolunteerHours(this.page)
        this.extVolunteerPage = new extVolunteer(this.page)
    }
    useBoardServicePage(){
        return this.extBoardServicePage
    }
    useCreditCardDonationPage(){
        return this.CreditCardDonationPage
    }
    useDisasterReliefPage(){
        return this.extDisasterReliefPage
    }
    useD4DPage(){
        return this.extD4DPage
    }
    useDonorMatchingPage(){
        return this.DonorMatchingPage
    }
    useEventInformationPage(){
        return this.EventInformationPage
    }
    useGivingPage(){
        return this.extGivingPage
    }
    useGivingReviewPage(){
        return this.GivingReviewPage
    }
    useHomePage(){
        return this.extHomePage
    }
    useloginPage(){
        return this.extLoginPage
    }
    useManageEventsPage(){
        return this.extManageEventsPage
    }
    useMatchingGiftsPage(){
        return this.MatchingGiftsPage
    }
    useOrganizationSearchPage(){
        return this.OrganizationSearchPage
    }
    useSubmissionSuccessfulPage(){
        return this.SubmissionSuccessfulPage
    }
    useUWGivingPage(){
        return this.extUWGivingPage
    }
    useVolunteerHoursPage(){
        return this.extVolunteerHoursPage
    }
    useVolunteerPage(){
        return this.extVolunteerPage
    }
}