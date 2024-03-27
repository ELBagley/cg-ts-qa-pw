import { Page, expect } from "@playwright/test";


export class examinePortletHelper {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
    // use test data from JSON passed in
    // use the portlet locators for the page with the test data to perform the validation
  async examinePortletTab(pageReference: any, portletObject: string, testData: any, testLocators?: any) {
  
    // portlet test data reference
    const portletReference = portletObject
    
    // location of current tab in the array
    // duplicate tab strings causing confusion
    if(pageReference[portletObject].PortletTitle === "Events I Created"){
      //await this.page.locator(testLocators[portletReference].TabLocator).click()
      await this.page.getByText("Events I Created", {exact: true}).click()
    } 
    else if(pageReference[portletObject].PortletTitle === "Unsubmitted Events I Created"){ // need to use a better identifier
      //await this.page.locator(testLocators[portletReference].TabLocator).click()
      await this.page.getByText("Unsubmitted Events I Created", {exact: true}).click()
    }
    else if(pageReference[portletObject].PortletTitle == "How Am I Doing?"){
      // do not click because this is not a tab
    }
    // There is a button with sub text on the page
    else if(pageReference[portletObject].PortletTitle == "Board Service Matching Gifts History"){
      await this.page.getByRole('tab', {name: pageReference[portletObject].PortletTitle, exact: true}).click()
    }
    else {
      await this.page.getByText(pageReference[portletObject].PortletTitle).click()
    }

    await this.page.waitForTimeout(1000);

    // HISTORY PORTLET
    //   Current Payroll Contribution 1019
    //   Donation History 1002
    if((pageReference[portletObject].PortletType == 1019) || (pageReference[portletObject].PortletType == 1002)){ 
      for(let currentRow = 0; currentRow < pageReference[portletObject].TabHeader.length; currentRow++){ //columns using array length
        for(let currentElement = 0; currentElement < testData[portletReference].PortletNumRows; currentElement++){ //rows
          if(currentRow == 0){ // column headings
            // DO WE NEED LOCATORS?
            //await expect(this.page.locator(testLocators[portletReference].portletRow0[currentElement])).toHaveText(testData[portletReference].portletRow0[currentElement]);
            await expect(this.page.getByRole('cell', {name: pageReference[portletObject].TabHeader[currentElement], exact: true})).toBeVisible();
          }
          else if (currentRow == 1){
            if (testData[portletReference].portletRow1[0] == 'No Result Found'){
              await expect(this.page.getByRole('cell', {name: testData[portletReference].portletRow1[currentElement], exact: true})).toBeVisible();
              break
            }
            else if ((currentRow == 1 ) && (testData[portletReference].portletRow1[currentElement] != "x")){
              await expect(this.page.getByRole('cell', {name: testData[portletReference].portletRow1[currentElement], exact:true})).toBeVisible();
            }
          }
          else if ((currentRow == 2 ) && (testData[portletReference].portletRow1[currentElement] != "x")){
            await expect(this.page.getByRole('cell', {name: testData[portletReference].portletRow2[currentElement], exact:true})).toBeVisible();
          }
          else if ((currentRow == 3 ) && (testData[portletReference].portletRow1[currentElement] != "x")){
            await expect(this.page.getByRole('cell', {name: testData[portletReference].portletRow3[currentElement], exact:true})).toBeVisible();
          }
          else if ((currentRow == 4 ) && (testData[portletReference].portletRow1[currentElement] != "x")){
            await expect(this.page.getByRole('cell', {name: testData[portletReference].portletRow4[currentElement], exact:true})).toBeVisible();
          }
        }
      }
    }
    // BALANCE PORTLET
    //   Matching Gift Balance
    else if (pageReference[portletObject].PortletType == 1006){ 
      for(let currentRow = 0; pageReference[portletObject].PortletElements; currentRow++){ // columns
        for(let currentElement = 0; currentElement < testData[portletReference].TabElements; currentElement++){ //rows
          if((currentRow == 0) && (testData[portletReference].portletRow0[currentElement] != "x")){ 
            await expect(this.page.getByRole('cell', {name: testData[portletReference].portletRow0[currentElement],exact: true})).toBeVisible();
          }
          if((currentRow == 1) && (testData[portletReference].portletRow1[currentElement] != "x")){
            // if the string contains a '|'
            let curStringArray = testData[portletReference].portletRow1[currentElement].split('|')
            if(curStringArray.length == 2){ 
              await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
            }
            else{
              await expect(this.page.getByRole('cell', {name: testData[portletReference].portletRow1[currentElement],exact: true})).toBeVisible();
            }
          }
          if((currentRow == 2) && (testData[portletReference].portletRow2[currentElement] != "x")){
            let curStringArray = testData[portletReference].portletRow2[currentElement].split('|')
            if(curStringArray.length == 2){ 
              await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
            }
            else{
              await expect(this.page.getByRole('cell', {name: testData[portletReference].portletRow2[currentElement],exact: true})).toBeVisible();
            }
          }
          if((currentRow == 3) && (testData[portletReference].portletRow3[currentElement] != "x")){
            let curStringArray = testData[portletReference].portletRow3[currentElement].split('|')
            if(curStringArray.length == 2){ 
              await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
            }
            else{
              await expect(this.page.getByRole('cell', {name: testData[portletReference].portletRow3[currentElement],exact: true})).toBeVisible();
            }          
          }
        }
      }
    }

    // TODO: EVENTS PORTLET - Volunteer
    //    Upcoming Events
    //else if (testData[portletReference].TabType == 1036){}

    // 4012
    // DOLLARS FOR DOERS 
    else if (pageReference[portletObject].PortletType == 4012){
      //TODO: if "Details" select it to expand more information
      await this.page.waitForTimeout(5000);
      await this.page.getByText(testData[portletReference].message).click();
      if(testData[portletReference].span1Organization != ""){
        await this.page.getByText(testData[portletReference].span1Organization).isVisible
        await this.page.getByText(testData[portletReference].span1Hours).isVisible
      }
      if(testData[portletReference].span2Organization != ""){
        await this.page.getByText(testData[portletReference].span2Organization).isVisible
        await this.page.getByText(testData[portletReference].span2Hours).isVisible
      }
      await this.page.getByText("Redeemable").isVisible
      await this.page.getByText(testData[portletReference].redeemableAmount).isVisible
      await this.page.getByText("Hours Available").isVisible
      await this.page.getByText(testData[portletReference].redeemHours).isVisible
      await this.page.getByText("Redeemed").isVisible
      await this.page.getByText(testData[portletReference].redeemedAmount).isVisible
      await this.page.getByText("Hours Logged").isVisible
      await this.page.getByText(testData[portletReference].hoursLogged).isVisible
    }
    
    // EVENTS PORTLET - Edit/Delete
    //   Unsubmitted Events I Created
    else if (pageReference[portletObject].PortletType == 1016){
      await this.page.waitForTimeout(5000);
      for(let currentRow = 0; pageReference[portletObject].PortletElements; currentRow++){ //columns
        for(let currentElement = 0; currentElement < testData[portletReference].TabElements; currentElement++){ //rows
          if(currentRow == 0){ 
            await expect(this.page.getByRole('cell', {name: testData[portletReference].portletRow0[currentElement],exact: true})).toBeVisible();
          }
          if(currentRow == 1){
            await expect(this.page.getByRole('cell', {name: testData[portletReference].portletRow1[currentElement],exact: true})).toBeVisible();
          }
          if(currentRow == 2){
            await expect(this.page.getByRole('cell', {name: testData[portletReference].portletRow2[currentElement],exact: true})).toBeVisible();
          }
          if(currentRow == 3){
            await expect(this.page.getByRole('cell', {name: testData[portletReference].portletRow3[currentElement],exact: true})).toBeVisible();
          }
        }
      }
    }

    // EVENTS PORTLET - multi occurrences
    //   Manage Open Events 
    //   Manage Completed Events
    //   Events I Created 
    else if (pageReference[portletObject].PortletType == 1010){
      let expandedData = 0
      // TODO: CAN NOT assume
      // 1: the order of rows positions the Summary row first in the list
      // 2: tests will only have one summary row
      for(let currentRow = 0; currentRow < pageReference[portletObject].PortletElements; currentRow++){
        for(let currentElement = 0; currentElement < testData[portletReference].TabElements; currentElement++){
          if((testData[portletReference].TabAction == "open") && (expandedData == 0)){
            // select the cell with "View Occurrences" to expand the ongoing events
            await this.page.getByRole('link', {name: 'View Occurrences'}).click()
            await this.page.waitForTimeout(3000);
            expandedData = 1
          }
          if(currentRow == 0){ //headings
            await expect(this.page.getByRole('cell', {name: testData[portletReference].portletRow0[currentElement]})).toBeVisible();
          }
          if((currentRow == 1) && (testData[portletReference].portletRow1[currentElement] != "x")){
            // attempt to understand where to find duplicates are in the table
            // split the contents of the string and where it is located in the table
            let curStringArray = testData[portletReference].portletRow1[currentElement].split('|')
            if(curStringArray.length == 2){ 
              await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
            }
            else{
              await expect(this.page.getByRole('cell', {name: testData[portletReference].portletRow1[currentElement],exact: true})).toBeVisible();
            }
          }
          if((currentRow == 2) && (testData[portletReference].portletRow2[currentElement] != "x")){
            // attempt to understand where to find duplicates are in the table
            // split the contents of the string and where it is located in the table
            let curStringArray = testData[portletReference].portletRow2[currentElement].split('|')
            if(curStringArray.length == 2){ 
              await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
            }
            else{
              await expect(this.page.getByRole('cell', {name: testData[portletReference].portletRow2[currentElement],exact: true})).toBeVisible();
            }
          }
          if((currentRow == 3) && (testData[portletReference].portletRow3[currentElement] != "x")){
            // attempt to understand where to find duplicates are in the table
            // split the contents of the string and where it is located in the table
            let curStringArray = testData[portletReference].portletRow3[currentElement].split('|')
            if(curStringArray.length == 2){ 
              await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
            }
            else{
              await expect(this.page.getByRole('cell', {name: testData[portletReference].portletRow3[currentElement],exact: true})).toBeVisible();
            }
          }
          if((currentRow == 4) && (testData[portletReference].portletRow4[currentElement] != "x")){
            // attempt to understand where to find duplicates are in the table
            // split the contents of the string and where it is located in the table
            let curStringArray = testData[portletReference].portletRow4[currentElement].split('|')
            if(curStringArray.length == 2){ 
              await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
            }
            else{
              await expect(this.page.getByRole('cell', {name: testData[portletReference].portletRow4[currentElement],exact: true})).toBeVisible();
            }
          }
        }
      }
    }
    // Goals
    // 1033 How am I Doing
    else if (pageReference[portletObject].PortletType == 1033){ 
      if (testData[portletReference].Donated != ""){
        await expect(this.page.locator('div').filter({ hasText: testData.Donated })).toBeTruthy;
      }
      if (testData.HoursVolunteered != ""){
        await expect(this.page.locator('div').filter({ hasText: testData.HoursVolunteered })).toBeTruthy;
      }
        //class: container-query-blocs container-query-three-blocs      }
    }
    // 4014  Contribute Again
    else if (pageReference[portletObject].PortletType == 4014){
      await this.page.getByText(testData[portletReference]);
      //for the number of rows
      for (let i = 0; i < testData[portletReference].numText; i ++){
        // if numText = 0 then nothing to do
        if(testData[portletReference].textArray[i].split('|') == 2){
          let curStringArray = testData[portletReference].textArray[i].split('|')
          if(curStringArray.length == 2){ 
            await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
          }
          else{
            await expect(this.page.getByRole('cell', {name: testData[portletReference].TextArray[0],exact: true})).toBeVisible();
          }
        }
      }
    }
  }   
}

