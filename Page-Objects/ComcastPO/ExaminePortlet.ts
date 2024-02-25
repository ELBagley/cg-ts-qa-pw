import { Page, expect } from "@playwright/test";

export class examinePortletHelper {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  private TabRow0Locator = "";
  private TabRow1Locator = "";
  private TabRow2Locator = "";
  private TabRow3Locator = "";
  private TabRow4Locator = "";
  private TabRow5Locator = "";

  async examineTabs(testData: any, testLocators: any) {
    // use test data from JSON passed in
    // use the portlet locators for the page with the test data to perform the validation

    // check to see if there are the same number of expected tabs to process
    await expect(this.page.locator(testLocators.Tab1Counter)).toHaveCount(
      testData.numTabs
    );
    // set up locators so same code is used for each tab to verify the data
    for (let p = 1; p < testData.numTabs; p++) {
      if (p == 1) {
        // update the locator variables to reflect the tab's locators to use
        this.TabRow0Locator = testLocators.Tab1Row0Locator;
        this.TabRow1Locator = testLocators.Tab1Row1Locator;
        this.TabRow2Locator = testLocators.Tab1Row2Locator;
        this.TabRow3Locator = testLocators.Tab1Row3Locator;
        this.TabRow4Locator = testLocators.Tab1Row4Locator;
        this.TabRow5Locator = testLocators.Tab1Row5Locator;
        // verify the text then select it
        expect(
          testData.Tab1Text == this.page.locator("#span-tab-368796").textContent
        ); 
        await this.page.locator("#span-tab-368796").click();
        //await this.examineCurrentTab(testData)
      } else if (p == 2) {
        // update the locator variables to reflect the tab's locators to use
        this.TabRow0Locator = testLocators.Tab2Row0Locator;
        this.TabRow1Locator = testLocators.Tab2Row1Locator;
        this.TabRow2Locator = testLocators.Tab2Row2Locator;
        this.TabRow3Locator = testLocators.Tab2Row3Locator;
        this.TabRow4Locator = testLocators.Tab2Row4Locator;
        this.TabRow5Locator = testLocators.Tab2Row5Locator;
        // verify the text then select it
        expect(
          testData.Tab2Text ==
            (await this.page.locator(testLocators.Tab2Locator).textContent())
        );
        await this.page.locator(testLocators.Tab2Locator).click();
      } else if (p == 3) {
        // update the locator variables to reflect the tab's locators to use
        this.TabRow0Locator = testLocators.Tab3Row0Locator;
        this.TabRow1Locator = testLocators.Tab3Row1Locator;
        this.TabRow2Locator = testLocators.Tab3Row2Locator;
        this.TabRow3Locator = testLocators.Tab3Row3Locator;
        this.TabRow4Locator = testLocators.Tab3Row4Locator;
        this.TabRow5Locator = testLocators.Tab3Row5Locator;
        // verify the text then select it
        expect(
          testData.Tab3Text ==
            (await this.page.locator(testLocators.Tab3Locator).textContent())
        );
        await this.page.locator(testLocators.Tab3Locator).click();
      } else if (p == 4) {
        // update the locator variables to reflect the tab's locators to use
        this.TabRow0Locator = testLocators.Tab4Row0Locator;
        this.TabRow1Locator = testLocators.Tab4Row1Locator;
        this.TabRow2Locator = testLocators.Tab4Row2Locator;
        this.TabRow3Locator = testLocators.Tab4Row3Locator;
        this.TabRow4Locator = testLocators.Tab4Row4Locator;
        this.TabRow5Locator = testLocators.Tab4Row5Locator;
        // verify the text then select it
        expect(
          testData.Tab4Text ==
            (await this.page.locator(testLocators.Tab4Locator).textContent())
        );
        await this.page.locator(testLocators.Tab4Locator).click();
      } else if (p == 5) {
        // update the locator variables to reflect the tab's locators to use
        this.TabRow0Locator = testLocators.Tab5Row0Locator;
        this.TabRow1Locator = testLocators.Tab5Row1Locator;
        this.TabRow2Locator = testLocators.Tab5Row2Locator;
        this.TabRow3Locator = testLocators.Tab5Row3Locator;
        this.TabRow4Locator = testLocators.Tab5Row4Locator;
        this.TabRow5Locator = testLocators.Tab5Row5Locator;
        // verify the text then select it
        expect(
          testData.Tab4Text ==
            (await this.page.locator(testLocators.Tab4Locator).textContent())
        );
        await this.page.locator(testLocators.Tab4Locator).click();
      }

      console.log(this.page.locator(this.TabRow0Locator));
      console.log(testData.Tab1Row);
      // there is always a header/title row
      //await expect(this.page.locator(this.TabRow0Locator)).toContainText(testData.Tab1Row0[0])  //header row
      // if the first row has "No results found" it is a different locator so nothing wlse to verify
      if (testData.Tab1Row1[0] != "No Result Found") {
        expect(this.page.locator("[valign='top']")).toHaveCount(
          testData.Tab1Rows
        ); //how many rows of data not including the header
        for (let i = 0; i < testData.Tab1Columns; i++) {
          const numRowsWithData = testData.Tab1Rows;
          if (numRowsWithData == 1) {
            await expect(this.page.locator(this.TabRow1Locator)).toContainText(
              testData.Tab1Row1[i]
            );
          }
          if (numRowsWithData <= 2) {
            await expect(this.page.locator(this.TabRow2Locator)).toContainText(
              testData.Tab1Row1[i]
            );
          }
          if (numRowsWithData <= 3) {
            await expect(this.page.locator(this.TabRow3Locator)).toContainText(
              testData.Tab1Row1[i]
            );
          }
          if (numRowsWithData <= 4) {
            await expect(this.page.locator(this.TabRow4Locator)).toContainText(
              testData.Tab1Row1[i]
            );
          }
          if (numRowsWithData <= 5) {
            await expect(this.page.locator(this.TabRow5Locator)).toContainText(
              testData.Tab1Row1[i]
            );
          }
        }
        //DEBUG console.log(testData.Tab1Row0[i] + ", " + testData.Tab1Row1[i])
      }
    }
  }
}
