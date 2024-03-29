import { Page, expect } from "@playwright/test";

export class examinePortletHelper {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
    // use test data from JSON passed in
    // use the portlet locators for the page with the test data to perform the validation
  async examinePortletTab(tabName: string, testData: any, testLocators: any) {
    //find the location of the tab in the tab list
    let currentTab = 0;
    while(currentTab <= 5){
      // find a matching tab location in the array
      if(tabName == testData.TabArray[currentTab]){
        break
      }
      currentTab++
    } // location of current tab in the array
    // duplicate strings causing confusion
    if(tabName == "Events I Created"){
      //await this.page.locator(testLocators[tabName].TabLocator).click()
      await this.page.getByRole('tab', {name: tabName, exact: true}).click()
    } 
    else if(tabName == "Unsubmitted Events I Created"){ // need to use a better identifier
      //await this.page.locator(testLocators[tabName].TabLocator).click()
      await this.page.getByRole('tab', {name: tabName, exact: true}).click()
    }
    else {
      await this.page.getByText(tabName).click()
    }
    await this.page.waitForTimeout(3000);

    // HISTORY PORTLET
    //   Current Payroll Contribution 1019
    //   Donation History 1002
    if((testData[tabName].TabType == 1019) || (testData[tabName].TabType == 1002)){ 
      for(let currentRow = 0; currentRow < testData[tabName].TabRows; currentRow++){
        for(let currentElement = 0; currentElement < testData[tabName].TabElements; currentElement++){
          if(currentRow == 0){ // column headings
            await expect(this.page.locator(testLocators[tabName].TabRow0[currentElement])).toHaveText(testData[tabName].TabRow0[currentElement]);
          }
          else if ((currentRow == 1) && (testData[tabName].TabRow1[0] != 'No Result Found')){
            await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow1[currentElement], exact: true})).toBeVisible();
            break
          }
          else if (currentRow != 0 && currentRow != 1){
            await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow1[currentElement], exact:true})).toBeVisible();
          }
        }
      }
    }
    // BALANCE PORTLET
    //   Matching Gift Balance
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

    // TODO: EVENTS PORTLET - Volunteer
    //    Upcoming Events
    //else if (testData[tabName].TabType == 1036){}

    // TODO: DOLLARS FOR DOERS std is 4012 (associated Bank)
    //

    // EVENTS PORTLET - Edit/Delete
    //   Unsubmitted Events I Created
    else if (testData[tabName].TabType == 1016){
      await this.page.waitForTimeout(5000);
      for(let currentRow = 0; currentRow < testData[tabName].TabRows; currentRow++){
        for(let currentElement = 0; currentElement < testData[tabName].TabElements; currentElement++){
          if(currentRow == 0){ 
            await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow0[currentElement],exact: true})).toBeVisible();
          }
          if(currentRow == 1){
            await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow1[currentElement],exact: true})).toBeVisible();
          }
          if(currentRow == 2){
            await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow2[currentElement],exact: true})).toBeVisible();
          }
          if(currentRow == 3){
            await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow3[currentElement],exact: true})).toBeVisible();
          }
        }
      }
    }

    // EVENTS PORTLET - multi occurrences
    //   Manage Open Events 
    //   Manage Completed Events
    //   Events I Created 
    else if (testData[tabName].TabType == 1010){
      let expandedData = 0
      // TODO: CAN NOT assume
      // 1: the order of rows positions the Summary row first in the list
      // 2: tests will only have one summary row
      for(let currentRow = 0; currentRow < testData[tabName].TabRows; currentRow++){
        for(let currentElement = 0; currentElement < testData[tabName].TabElements; currentElement++){
          if((testData[tabName].TabAction == "open") && (expandedData == 0)){
            // select the cell with "View Occurrences" to expand the ongoing events
            await this.page.getByRole('link', {name: 'View Occurrences'}).click()
            await this.page.waitForTimeout(3000);
            expandedData = 1
          }
          if(currentRow == 0){ //headings
            await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow0[currentElement]})).toBeVisible();
          }
          if((currentRow == 1) && (testData[tabName].TabRow1[currentElement] != "x")){
            // attempt to understand where to find duplicates are in the table
            // split the contents of the string and where it is located in the table
            let curStringArray = testData[tabName].TabRow1[currentElement].split('|')
            if(curStringArray.length == 2){ 
              await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
            }
            else{
              await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow1[currentElement],exact: true})).toBeVisible();
            }
          }
          if((currentRow == 2) && (testData[tabName].TabRow2[currentElement] != "x")){
            // attempt to understand where to find duplicates are in the table
            // split the contents of the string and where it is located in the table
            let curStringArray = testData[tabName].TabRow2[currentElement].split('|')
            if(curStringArray.length == 2){ 
              await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
            }
            else{
              await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow2[currentElement],exact: true})).toBeVisible();
            }
          }
          if((currentRow == 3) && (testData[tabName].TabRow3[currentElement] != "x")){
            // attempt to understand where to find duplicates are in the table
            // split the contents of the string and where it is located in the table
            let curStringArray = testData[tabName].TabRow3[currentElement].split('|')
            if(curStringArray.length == 2){ 
              await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
            }
            else{
              await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow3[currentElement],exact: true})).toBeVisible();
            }
          }
          if((currentRow == 4) && (testData[tabName].TabRow4[currentElement] != "x")){
            // attempt to understand where to find duplicates are in the table
            // split the contents of the string and where it is located in the table
            let curStringArray = testData[tabName].TabRow4[currentElement].split('|')
            if(curStringArray.length == 2){ 
              await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
            }
            else{
              await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow4[currentElement],exact: true})).toBeVisible();
            }
          }
        }
      }
    }
  }
}