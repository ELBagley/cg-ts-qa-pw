import { Page, expect } from "@playwright/test";

export class examineHowAmIDoingPortlet{
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async examinHowAmIDoing(testData: any){
    await this.page.locator('div').filter({ hasText: testData.Donated });
    await this.page.locator('div').filter({ hasText: testData.HoursVolunteered });
    //class: container-query-blocs container-query-three-blocs
  }
}