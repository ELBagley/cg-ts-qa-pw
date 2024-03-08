import { Page, expect } from "@playwright/test";

import { extLogin } from "./LoginPO"
import { extHome } from "./HomePO"
import { extDollarsForDoers } from "./DollarsForDoersPO"
import { extMatchingGifts } from "./MatchingGiftsPO"
import { extVolunteerHours } from "./VolunteerHoursInformationPO"
import { extGiving } from "./GivingPO"
import { extUWGiving } from "./UWGivingPO"

export class extPageManager{
    private readonly page: Page
    private readonly extLoginPage: extLogin
    private readonly extHomePage: extHome
    private readonly extD4DPage: extDollarsForDoers
    private readonly extMatchingGiftsPage: extMatchingGifts
    private readonly extVolunteerHoursPage: extVolunteerHours
    private readonly extGivingPage: extGiving
    private readonly extUWGivingPage: extUWGiving

    constructor(page: Page) {
        this.page = page
        this.extLoginPage = new extLogin (this.page)
        this.extHomePage = new extHome(this.page)
        this.extD4DPage = new extDollarsForDoers(this.page)
        this.extMatchingGiftsPage = new extMatchingGifts(this.page)
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
        return this.extMatchingGiftsPage
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