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

    // TODO: Board Service -> DOLLARS FOR DOERS std is 4012 (associated Bank)
    // action = open
    // 
    else if (testData[tabName].TabType == 4012){
      await this.page.waitForTimeout(5000);
      let expandedData = 0
      for(let currentRow = 0; currentRow < testData[tabName].TabRows; currentRow++){
        for(let currentElement = 0; currentElement < testData[tabName].TabElements; currentElement++){
          if((testData[tabName].TabAction == "open") && (expandedData == 0)){
            // select the cell with "View Occurrences" to expand the ongoing events
            await this.page.getByRole('button', { name: 'Details' }).click();
            await this.page.waitForTimeout(3000);
            expandedData = 1
          }
        }          
      }
      /*  DONOR1
      //portlet Banner
      await page.getByText('Dollars for DoersCongratulations! You are eligible to redeem a volunteer match!').click();
  await page.getByText('Deadline:').click();
  await page.getByText('12/31/').click();
      await page.getByRole('button', { name: 'Details' }).click();

      // expands portlet details

      await page.getByText('HEART 1 MISSION5 hoursTotal5 hours').click();
      await page.getByText('Total$500.00').click();
      await page.locator('#drawer_d4d-details-report-2').click();
      await page.getByText('Redeemable').click();
      await page.getByText('$500.00').nth(1).click();
      await page.getByText('Hours Available').click();
      await page.getByText('5', { exact: true }).nth(1).click();
      await page.getByText('Redeemed', { exact: true }).click();
      await page.getByText('$0.00').nth(1).click();
      await page.getByText('Hours Logged').click();
      await page.getByText('5', { exact: true }).nth(2).click();
      await page.getByRole('button', { name: 'Redeem' }).click();
      await page.getByRole('link', { name: 'HEART 1 MISSION' }).click();
      await page.getByRole('button', { name: 'Save and Proceed' }).click();
      await page.getByRole('button', { name: 'Submit' }).click();
      await page.getByRole('link', { name: 'Return to Home Page' }).click();
      await page.getByRole('button', { name: 'Details' }).click();
      await page.getByRole('button', { name: 'Details' }).click();


  await page.getByText('RED CROSS ELEMENTARY PTO INC10/1 hours').click();
  await page.locator('span').filter({ hasText: /^RED CROSS ELEMENTARY PTO INC10\/1 hours$/ }).locator('div').nth(2).click();
  await page.getByText('HEART 1 MISSION3/1 hours').click();
  await page.locator('span').filter({ hasText: /^1 HEART 1 MISSION3\/1 hours$/ }).locator('div').nth(2).click();
  await page.getByText('RED CROSS ELEMENTARY PTO INC10 hours1 HEART 1 MISSION3 hoursTotal13 hours').click();
  await page.locator('#drawer_d4d-details-report-1').click();
  await page.getByText('Total$1,000.00').click();
  await page.getByText('RED CROSS ELEMENTARY PTO INC$').click();
  await page.getByText('$500.00').first().click();
  await page.getByText('Total$500.00').click();
  await page.getByText('Redeemable').click();
  await page.getByText('$500.00').nth(2).click();
  await page.getByText('Hours Available').click();
  await page.getByText('3', { exact: true }).nth(1).click();
  await page.getByText('Redeemed', { exact: true }).click();
  await page.getByText('$500.00').nth(3).click();
  await page.getByText('Hours Logged').click();
  await page.getByText('13', { exact: true }).click();
  await page.getByRole('link', { name: 'Log Hours' }).click();
      */
    }
    
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