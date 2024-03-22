import { Page, expect } from "@playwright/test";

import { extBoardService } from "./extBoardServicePO"
import { BoardServiceMembershipInformation } from "./actBoardServiceMembershipInformation"
import { CreditCardDonation } from "./actCreditCardDonationPO"
import { extDisasterRelief } from "./extDisasterReliefPO"
import { extEmployeeNomination } from "./extEmployeeNominationPO"
import { DonorMatching } from "./actDonorMatchingGiftPO"
import { eventInformation } from "./actEventInformationPO"
import { extGiving } from "./extGivingPO"
import { GivingReview } from "./xxxGivingReviewPO"
import { extHome } from "./extHomePO"
import { extLogin } from "./extLoginPO"
import { extManageEvents } from "./extManageEventsPO"
import { BoardServiceMatchingGift } from "./actBoardServiceMatchingGiftPO"
import { OrganizationSearch } from "./actOrganizationSearchPO"
import { OrganizationSummary } from "./actOrganizationSummaryPO"
import { PayrollDeduction } from "./actPayrollDeductionsPO"
import { selectBoardServiceOrg } from "./actBoardServiceSelectOrgPO"
import { ReviewInformation} from "./actReviewInformationPO"
import { SubmissionSuccessful } from "./actSubmissionSuccessfulPO"
import { extUWGiving } from "./extUWGivingPO"
import { VolunteerHours } from "./actVolunteerHoursPO"
import { extVolunteer } from "./extVolunteerPO"

export class extPageManager{
    private readonly extBoardServicePage: extBoardService
    private readonly BoardServiceMembershipInformationPage: BoardServiceMembershipInformation
    private readonly CreditCardDonationPage: CreditCardDonation
    private readonly extDisasterReliefPage: extDisasterRelief
    private readonly DonorMatchingPage: DonorMatching
    private readonly EmployeeNominationPage: extEmployeeNomination
    private readonly EventInformationPage: eventInformation
    private readonly extGivingPage: extGiving
    private readonly GivingReviewPage: GivingReview
    private readonly extHomePage: extHome
    private readonly extLoginPage: extLogin
    private readonly extManageEventsPage: extManageEvents
    private readonly BoardServiceMatchingGiftPage: BoardServiceMatchingGift
    private readonly OrganizationSearchPage: OrganizationSearch
    private readonly OrganizationSummaryPage: OrganizationSummary
    private readonly PayrollDeductionPage: PayrollDeduction
    private readonly BoardServiceOrgPage: selectBoardServiceOrg
    private readonly ReviewInformationPage: ReviewInformation
    private readonly SubmissionSuccessfulPage: SubmissionSuccessful
    private readonly extUWGivingPage: extUWGiving
    private readonly extVolunteerHoursPage: VolunteerHours
    private readonly extVolunteerPage: extVolunteer
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
        this.extBoardServicePage = new extBoardService (this.page)
        this.BoardServiceMembershipInformationPage = new BoardServiceMembershipInformation (this.page)
        this.CreditCardDonationPage = new CreditCardDonation (this.page)
        this.extDisasterReliefPage = new extDisasterRelief (this.page)
        this.DonorMatchingPage = new DonorMatching (this.page)
        this.EmployeeNominationPage = new extEmployeeNomination(this.page)
        this.EventInformationPage = new eventInformation (this.page)
        this.extGivingPage = new extGiving(this.page)
        this.GivingReviewPage = new GivingReview (this.page)
        this.extHomePage = new extHome(this.page)
        this.extLoginPage = new extLogin (this.page)
        this.extManageEventsPage = new extManageEvents (this.page)
        this.BoardServiceMatchingGiftPage = new BoardServiceMatchingGift(this.page)
        this.OrganizationSearchPage = new OrganizationSearch(this.page)
        this.OrganizationSummaryPage = new OrganizationSummary(this.page)
        this.PayrollDeductionPage = new PayrollDeduction(this.page)
        this.BoardServiceOrgPage = new selectBoardServiceOrg(this.page)
        this.ReviewInformationPage = new ReviewInformation(this.page)
        this.SubmissionSuccessfulPage = new SubmissionSuccessful(this.page)
        this.extUWGivingPage = new extUWGiving(this.page)      
        this.extVolunteerHoursPage = new VolunteerHours(this.page)
        this.extVolunteerPage = new extVolunteer(this.page)
    }
    useBoardServicePage(){
        return this.extBoardServicePage
    }
    useBoardServiceMembershipInformationPage(){
        return this.BoardServiceMembershipInformationPage
    }
    useCreditCardDonationPage(){
        return this.CreditCardDonationPage
    }
    useDisasterReliefPage(){
        return this.extDisasterReliefPage
    }
    useDonorMatchingPage(){
        return this.DonorMatchingPage
    }
    useEmployeeNominationPage(){
        return this.EmployeeNominationPage
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
    useBoardServiceMatchingGiftsPage(){
        return this.BoardServiceMatchingGiftPage
    }
    useBoardServiceOrgPage(){
        return this.BoardServiceOrgPage
    }
    useOrganizationSearchPage(){
        return this.OrganizationSearchPage
    }
    useOrganizationSummaryPage(){
        return this.OrganizationSummaryPage
    }
    usePayrollDeductionPage(){
        return this.PayrollDeductionPage
    }
    useReviewInformationPage(){
        return this.ReviewInformationPage
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