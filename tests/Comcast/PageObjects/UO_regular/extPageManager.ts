import { Page, expect } from "@playwright/test";

import { UO_ExternalPageLogin } from "../UO_regular/UO_ExternalLoginPO"
import { UO_ExternalGiving } from    "../UO_regular/UO_ExternalGivingPO"
import { UO_ExternalHome } from      "../UO_regular/UO_ExternalHomePO"
import { UO_ExternalEvents } from    "../UO_regular/UO_ExternalEventsPO"

export class extPageManager{
    private readonly page: Page
    private readonly extLoginPage:UO_ExternalPageLogin
    private readonly extGivingPage: UO_ExternalGiving
    private readonly extHomePage: UO_ExternalHome
    private readonly extEventsPage: UO_ExternalEvents

    constructor(page: Page) {
        this.page = page
        this.extLoginPage = new UO_ExternalPageLogin(this.page)
        this.extHomePage = new UO_ExternalHome(this.page)
        this.extGivingPage = new UO_ExternalGiving(this.page)
        this.extEventsPage = new UO_ExternalEvents(this.page)
    }

    useloginPage(){
        return this.extLoginPage
    }
    useHomePage(){
        return this.extHomePage
    }
    useGivingPage(){
        return this.extGivingPage
    }
    useEventsPage(){
        return this.extEventsPage
    }
}