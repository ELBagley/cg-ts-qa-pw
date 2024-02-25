import { Page, expect } from "@playwright/test";

const eventsPage = "https://sandbox.cybergrants.com/pls/cybergrants-sb/eg_portal.home?x_gm_id=7272&x_page=uo_create_events"

export class UO_ExternalEvents {

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async navigateToEventsPage (){
        await this.page.goto(eventsPage)
    }
    //const testdata = 
    async validatePortlet(testData: any){
        const Tab1Text = "ul[role='tablist'] > li:nth-of-type(1)"
        const Tab2Text = "ul[role='tablist'] > li:nth-of-type(2)"
        const Tab3Text = "ul[role='tablist'] > li:nth-of-type(3)"
        const Tab4Text = "ul[role='tablist'] > li:nth-of-type(4)"
        const Tab1Row0 = "[id] .tab-content:nth-of-type(2) thead"
        const Tab1Row1 = "[id] [class='388924year2024 rowodd']:nth-of-type(1) [align='center']:nth-of-type(1)"
        const Tab1Action = "[id] [align] [onclick='\(\$\(\'cg388924\'\)\.select\(\'\.388924batch12532\'\)\)\.invoke\(\'toggle\'\)']:nth-of-type(1)"
        //before action
        const Tab1Row4a = "[id] tbody [class='388924year2024 rowodd']:nth-of-type(3)"
        const Tab1Row4Action = "[id] [class='388924batch12532 roweven']:nth-of-type(4) [align='center']:nth-of-type(1) .cglink"
        //after action
        const Tab1Row2 = "[id] [class='388924batch12532 roweven']:nth-of-type(2) [align='center']:nth-of-type(1)"
        const Tab1Row3 = "[id] [class='388924year2024 rowodd']:nth-of-type(3) [align='center']:nth-of-type(1)"
        const Tab1Row4b = "[id] [class='388924batch12532 roweven']:nth-of-type(4) [align='center']:nth-of-type(1)"

        const Tab2Row0 = ".headerCell"
        const Tab2Row1 = "table[role='presentation'] .cell"
        const Tab2Row2 = ""
        const Tab2Row3 = ""
        
        const Tab3Row0 = "[id] .tab-content:nth-of-type(4) thead tr"
        const Tab3Row1 = "[id] tbody [class='388918year2024 roweven']:nth-of-type(2)"
        const Tab3Row1Action =     "[id] [class='388924year2024 rowodd']:nth-of-type(1) [align='center']:nth-of-type(1)"
        const Tab3Row1DescAction = "[id] [class='388924year2024 rowodd']:nth-of-type(1) .cell:nth-of-type(5) .cglink"
        const Tab3Row2 = "[id] tbody [class='388918year2024 roweven']:nth-of-type(4)"
        const Tab3Row2Action =     "[id] [class='388924year2024 rowodd']:nth-of-type(3) [align='center']:nth-of-type(1) .cglink"
        const Tab3Row2DescAction = "[id] [class='388924year2024 rowodd']:nth-of-type(3) .cell:nth-of-type(5) .cglink"
    }
}