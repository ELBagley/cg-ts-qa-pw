import { Page, expect } from "@playwright/test";

export class examinePortletHelper {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
    // use test data from JSON passed in
    // use the portlet locators for the page with the test data to perform the validation
  async examineTabs(tabName: string, testData: any, testLocators: any) {
    //find the location of the tab in the tab list
    let currentTab = 0;
    while(currentTab <= 5){
      // find a matching tab location in the array
      if(tabName == testData.TabArray[currentTab]){
        break
      }
      currentTab++
    } // location of current tab in the array
    if((tabName == "Events I Created") || (tabName == "Unsubmitted Events I Created")){ // need to use a better identifier
      await this.page.locator(testLocators[tabName].TabLocator).click()
    }
    else {await this.page.getByText(tabName).click()}
   
    // HISTORY PORTLET
    if((testData[tabName].TabType == 1019) || (testData[tabName].TabType == 1002)){ 
      for(let currentRow = 0; currentRow < testData[tabName].TabRows; currentRow++){
        for(let currentElement = 0; currentElement < testData[tabName].TabElements; currentElement++){
          if(currentRow == 0){ // column headings
            await expect(this.page.locator(testLocators[tabName].TabRow0[currentElement])).toHaveText(testData[tabName].TabRow0[currentElement]);
          }
          else if ((currentRow == 1) && (testData[tabName].TabRow1[0] != 'No Result Found')){
            await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow1[currentElement]})).toBeVisible();
            break
          }
          else if (currentRow != 0 && currentRow != 1){
            await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow1[currentElement]})).toBeVisible();
          }
        }
      }
    }
    // BALANCE PORTLET
    else if (testData[tabName].TabType == 1006){ 
      for(let currentRow = 0; currentRow < testData[tabName].TabRows; currentRow++){
        for(let currentElement = 0; currentElement < testData[tabName].TabElements; currentElement++){
          if((currentRow == 0) && (testData[tabName].TabRow0[currentElement] != "x")){ 
            await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow0[currentElement],exact: true})).toBeVisible();
          }
          if((currentRow == 1) && (testData[tabName].TabRow1[currentElement] != "x")){
            await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow1[currentElement],exact: true})).toBeVisible();
          }
          if((currentRow == 2) && (testData[tabName].TabRow2[currentElement] != "x")){
            await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow2[currentElement],exact: true})).toBeVisible();
          }
          if((currentRow == 3) && (testData[tabName].TabRow3[currentElement] != "x")){
            await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow3[currentElement],exact: true})).toBeVisible();
          }
        }
      }
    }
    // UNSUBMITTED and MY UPCOMMING EVENTS
    else if ((testData[tabName].TabType == 1016) || (testData[tabName].TabType == 1036)){
      for(let currentRow = 0; currentRow < testData[tabName].TabRows; currentRow++){
        for(let currentElement = 0; currentElement < testData[tabName].TabElements; currentElement++){
          if((currentRow == 0) && (currentElement == 0)){} // don't bother
        }
      }
    }
    // RECURRING CREATED and COMPLETED EVENTS.  tab type 1010
    else if (testData[tabName].TabType == 1010){
      // expand all of the rows with "View Occurences"
      // this assumes
      // 1: the order of rows positions the Summary row first in the list
      // 2: tests will only hae one summary row
      if((testData[tabName].TabAction == "open") && (testData[tabName].TabRow1[0]).textContent() == "View Occurrences"){
        // select the cell with "View Occurrences" to expand the ongoing events
        testData[tabName].tab1Row1[0].click()
      }
      for(let currentRow = 0; currentRow < testData[tabName].TabRows; currentRow++){
        for(let currentElement = 0; currentElement < testData[tabName].TabElements; currentElement++){
        }
      }
    }
  }
}