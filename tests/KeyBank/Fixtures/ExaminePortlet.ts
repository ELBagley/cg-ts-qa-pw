import { Page, expect } from "@playwright/test";

export class examinePortletHelper {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
    // use test data from JSON passed in
    // use the portlet locators for the page with the test data to perform the validation
  async examinePortletTab(tabName: string, testData: any, testLocators?: any) {
    //find the location of the tab in the tab list
    let currentTab = 0;
    while(currentTab <= 5){
      // find a matching tab location in the array
      if(tabName == testData.TabArray[currentTab]){
        break
      }
      currentTab++
    } 
    
    // location of current tab in the array
    // duplicate tab strings causing confusion
    if(tabName.trim() === "Events I Created"){
      //await this.page.locator(testLocators[tabName].TabLocator).click()
      await this.page.getByText("Events I Created", {exact: true}).click()
    } 
    else if(tabName.trim() === "Unsubmitted Events I Created"){ // need to use a better identifier
      //await this.page.locator(testLocators[tabName].TabLocator).click()
      await this.page.getByText("Unsubmitted Events I Created", {exact: true}).click()
    }
    else if(tabName == "How Am I Doing?"){
      // do not click because this is not a tab
    }
    else if(tabName == "Board Service Matching Gifts"){
      await this.page.getByRole('tab', {name: tabName, exact: true}).click()
    }
    else {
      await this.page.getByText(tabName).click()
    }

    await this.page.waitForTimeout(1000);

    // HISTORY PORTLET
    //   Current Payroll Contribution 1019
    //   Donation History 1002
    if((testData[tabName].TabType == 1019) || (testData[tabName].TabType == 1002)){ 
      for(let currentRow = 0; currentRow < testData[tabName].TabRows; currentRow++){
        for(let currentElement = 0; currentElement < testData[tabName].TabElements; currentElement++){
          if(currentRow == 0){ // column headings
            // DO WE NEED LOCATORS?
            //await expect(this.page.locator(testLocators[tabName].TabRow0[currentElement])).toHaveText(testData[tabName].TabRow0[currentElement]);
            await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow0[currentElement], exact: true})).toBeVisible();
          }
          else if (currentRow == 1){
            if (testData[tabName].TabRow1[0] == 'No Result Found'){
              await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow1[currentElement], exact: true})).toBeVisible();
              break
            }
            else if ((currentRow == 1 ) && (testData[tabName].TabRow1[currentElement] != "x")){
              await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow1[currentElement], exact:true})).toBeVisible();
            }
          }
          else if ((currentRow == 2 ) && (testData[tabName].TabRow1[currentElement] != "x")){
            await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow2[currentElement], exact:true})).toBeVisible();
          }
          else if ((currentRow == 3 ) && (testData[tabName].TabRow1[currentElement] != "x")){
            await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow3[currentElement], exact:true})).toBeVisible();
          }
          else if ((currentRow == 4 ) && (testData[tabName].TabRow1[currentElement] != "x")){
            await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow4[currentElement], exact:true})).toBeVisible();
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
            // if the string contains a '|'
            let curStringArray = testData[tabName].TabRow1[currentElement].split('|')
            if(curStringArray.length == 2){ 
              await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
            }
            else{
              await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow1[currentElement],exact: true})).toBeVisible();
            }
          }
          if((currentRow == 2) && (testData[tabName].TabRow2[currentElement] != "x")){
            let curStringArray = testData[tabName].TabRow2[currentElement].split('|')
            if(curStringArray.length == 2){ 
              await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
            }
            else{
              await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow2[currentElement],exact: true})).toBeVisible();
            }
          }
          if((currentRow == 3) && (testData[tabName].TabRow3[currentElement] != "x")){
            let curStringArray = testData[tabName].TabRow3[currentElement].split('|')
            if(curStringArray.length == 2){ 
              await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
            }
            else{
              await expect(this.page.getByRole('cell', {name: testData[tabName].TabRow3[currentElement],exact: true})).toBeVisible();
            }          
          }
        }
      }
    }

    // TODO: EVENTS PORTLET - Volunteer
    //    Upcoming Events
    //else if (testData[tabName].TabType == 1036){}

    // 4012
    // DOLLARS FOR DOERS 
    else if (testData[tabName].TabType == 4012){
      //TODO: if "Details" select it to expand more information
      await this.page.waitForTimeout(5000);
      await this.page.getByText(testData[tabName].message).click();
      if(testData[tabName].span1Organization != ""){
        await this.page.getByText(testData[tabName].span1Organization).isVisible
        await this.page.getByText(testData[tabName].span1Hours).isVisible
      }
      if(testData[tabName].span2Organization != ""){
        await this.page.getByText(testData[tabName].span2Organization).isVisible
        await this.page.getByText(testData[tabName].span2Hours).isVisible
      }
      await this.page.getByText("Redeemable").isVisible
      await this.page.getByText(testData[tabName].redeemableAmount).isVisible
      await this.page.getByText("Hours Available").isVisible
      await this.page.getByText(testData[tabName].redeemHours).isVisible
      await this.page.getByText("Redeemed").isVisible
      await this.page.getByText(testData[tabName].redeemedAmount).isVisible
      await this.page.getByText("Hours Logged").isVisible
      await this.page.getByText(testData[tabName].hoursLogged).isVisible
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
    // Goals
    // 1033 How am I Doing
    else if (testData[tabName].TabType == 1033){ 
      if (testData[tabName].Donated != ""){
        await expect(this.page.locator('div').filter({ hasText: testData.Donated })).toBeTruthy;
      }
      if (testData.HoursVolunteered != ""){
        await expect(this.page.locator('div').filter({ hasText: testData.HoursVolunteered })).toBeTruthy;
      }
        //class: container-query-blocs container-query-three-blocs      }
    }
    // 4014  Contribute Again
    else if (testData[tabName].TabType == 4014){
      await this.page.getByText(testData[tabName]);
      //for the number of rows
      for (let i = 0; i < testData[tabName].numText; i ++){
        // if numText = 0 then nothing to do
        if(testData[tabName].textArray[i].split('|') == 2){
          let curStringArray = testData[tabName].textArray[i].split('|')
          if(curStringArray.length == 2){ 
            await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
          }
          else{
            await expect(this.page.getByRole('cell', {name: testData[tabName].TextArray[0],exact: true})).toBeVisible();
          }
        }
      }
    }
  }   
}

