import { Page, expect } from "@playwright/test";


export class examinePortletHelper {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }


  // ** GOAL is to abstact all page texts to one location, use JSON files for expected results
  //
  // the portlet references for the PO will have a list of portlet titles mapped to a data ID in the data JSON file
  // each ext page has 1 or more portlets
  // for each page get a list of it's portlet strings
  //  for each portlet listed in the array 
  //    find the portlet by matching it's text to a PORTLET ID in the Data file
  //    load the data


    // use test data from JSON passed in
    // use the Portlet locators for the page with the test data to perform the validation
  async examinePortletTab(pageReference: any, pagetestData: any, testLocators?: any) {
    await expect(pageReference.numPortlets <= 6).toBeTruthy
    let testData: any
    let curPagePortletData: any
    let count = 1 
    while ( count <= pageReference.numPortlets ){
      if (count == 1){
        curPagePortletData = pageReference["Portlet1"] 
        testData = pagetestData["Portlet1"]
      }
      if (count == 2){
        curPagePortletData = pageReference["Portlet2"] 
        testData = pagetestData["Portlet2"]
      }
      if (count == 3){
        curPagePortletData = pageReference["Portlet3"]
        testData = pagetestData["Portlet3"]
      }
      if (count == 4){
        curPagePortletData = pageReference["Portlet4"]
        testData = pagetestData["Portlet4"]
      }
      if (count == 5){
        curPagePortletData = pageReference["Portlet5"]
        testData = pagetestData["Portlet5"]
      }
      if (count == 6){
        curPagePortletData = pageReference["Portlet6"]
        testData = pagetestData["Portlet6"]
      }
    

      // duplicate tab strings causing confusion
      if(curPagePortletData.PortletTitle === "Events I Created"){
        //await this.page.locator(testLocators[PortletReference].TabLocator).click()
        await this.page.getByText("Events I Created", {exact: true}).click()
      } 
      else if(curPagePortletData.PortletTitle === "Unsubmitted Events I Created"){ // need to use a better identifier
        //await this.page.locator(testLocators[PortletReference].TabLocator).click()
        await this.page.getByText("Unsubmitted Events I Created", {exact: true}).click()
      }
      else if(curPagePortletData.PortletTitle == "How Am I Doing?"){
        // do not click because this is not a tab
      }
      // There is a button with sub text on the page
      else if(curPagePortletData.PortletTitle == "Board Service Matching Gifts History"){
        await this.page.getByRole('tab', {name: curPagePortletData.PortletTitle, exact: true}).click()
      }
      else {
        await this.page.getByText(curPagePortletData.PortletTitle).click()
      }
      await this.page.waitForTimeout(1000);


      // HISTORY Portlet
      //   Current Payroll Contribution 1019
      //   Donation History 1002
      if((curPagePortletData.PortletType == 1019) || (curPagePortletData.PortletType == 1002)){ 
        
        //need to verify the headings first
        for(let curColumn = 0; curColumn < curPagePortletData.PortletElements; curColumn++){ //header's using array length
          if (curPagePortletData.PortletElements != 0){ // there is no table for the portlet
            await expect(this.page.getByRole('cell', {name: curPagePortletData.PortletHeader[curColumn], exact: true})).toBeVisible();
          }
        }
        
        // need to verify the data presented in the portlet
        await expect(testData.PortletNumRows <= 4 ).toBeTruthy
        
        for(let curColumn = 0; ((curColumn < curPagePortletData.PortletElements) && (testData.PortletNumRows != 0)); curColumn++){ //columns using array length
          for(let curRow = 1; curRow <= testData.PortletNumRows; curRow++){ //rows
            if((curColumn == 0) && (testData.PortletDataRow1[curColumn] != "x")){
              let curStringArray = testData.PortletDataRow1[curColumn].split('|')
              if(curStringArray.length == 2){ 
                await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
              }
              else{
                await expect(this.page.getByRole('cell', {name: testData.PortletDataRow1[curColumn],exact: true})).toBeVisible();
              }
              //await expect(this.page.getByRole('cell', {name: testData.PortletDataRow1[curColumn], exact: true})).toBeVisible();
              break
              //}
              //else if ((curRow == 1 ) && (testData.PortletDataRow1[curColumn] != "x")){ 
              //  await expect(this.page.getByRole('cell', {name: testData.PortletDataRow1[curColumn], exact:true})).toBeVisible();
            }
            else if ((curRow == 2 ) && (testData.PortletDataRow2[curColumn] != "x")){
              await expect(this.page.getByRole('cell', {name: testData.PortletDataRow2[curColumn], exact:true})).toBeVisible();
            }
            else if ((curRow == 3 ) && (testData.PortletDataRow3[curColumn] != "x")){
              await expect(this.page.getByRole('cell', {name: testData.PortletDataRow3[curColumn], exact:true})).toBeVisible();
            }
            else if ((curRow == 4 ) && (testData.PortletDataRow4[curColumn] != "x")){
              await expect(this.page.getByRole('cell', {name: testData.PortletDataRow4[curColumn], exact:true})).toBeVisible();
            }
          }
        }
      }
      // BALANCE Portlet
      //   Matching Gift Balance
      else if (curPagePortletData.PortletType == 1006){ 
        for(let curColumn = 0; ((curColumn < curPagePortletData.PortletElements) && (testData.PortletNumRows != 0)); curColumn++){ //columns using array length
          for(let curRow = 0; curRow <= testData.PortletDataRows; curRow++){ //rows
            if((curColumn == 0) && (curPagePortletData.PortletHeader[curColumn] != "x")){ // sometimes there is no heading/table for a portlet
              await expect(this.page.getByRole('cell', {name: curPagePortletData.PortletHeader[curColumn],exact: true})).toBeVisible();
            }
            if((curColumn == 1) && (testData.PortletDataRow1[curColumn] != "x")){
              // if the string contains a '|'  // handle duplicaate locators, if any
              let curStringArray = testData.PortletDataRow1[curColumn].split('|')
              if(curStringArray.length == 2){ 
                await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
              }
              else{
                await expect(this.page.getByRole('cell', {name: testData.PortletDataRow1[curColumn],exact: true})).toBeVisible();
              }
            } 
            if((curColumn == 2) && (testData.PortletDataRow2[curColumn] != "x")){
              let curStringArray = testData.PortletDataRow2[curColumn].split('|')// handle duplicate locators, if any
              if(curStringArray.length == 2){ 
                await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
              }
              else{
                await expect(this.page.getByRole('cell', {name: testData.PortletDataRow2[curColumn],exact: true})).toBeVisible();
              }
            } 
            if((curColumn == 3) && (testData.PortletDataRow3[curColumn] != "x")){
              let curStringArray = testData.PortletDataRow3[curColumn].split('|')// handle duplicate locators, if any
              if(curStringArray.length == 2){ 
                await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
              }
              else{
                await expect(this.page.getByRole('cell', {name: testData.PortletDataRow3[curColumn],exact: true})).toBeVisible();
              }          
            }
          } 
          if((curColumn == 4) && (testData.PortletDataRow3[curColumn] != "x")){
            let curStringArray = testData.PortletDataRow3[curColumn].split('|')// handle duplicate locators, if any
            if(curStringArray.length == 2){ 
              await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
            }
            else{
              await expect(this.page.getByRole('cell', {name: testData.PortletDataRow4[curColumn],exact: true})).toBeVisible();
            }          
          }
          if((curColumn == 5) && (testData.PortletDataRow3[curColumn] != "x")){
            let curStringArray = testData.PortletDataRow3[curColumn].split('|')// handle duplicate locators, if any
            if(curStringArray.length == 2){ 
              await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
            }
            else{
              await expect(this.page.getByRole('cell', {name: testData.PortletDataRow5[curColumn],exact: true})).toBeVisible();
            }          
          }
          
        }
      }

      // DOLLARS FOR DOERS 
      else if (curPagePortletData.PortletType == 4012){
        //TODO: if "Details" select it to expand more information. Details class is css-1eirz6y
        await this.page.waitForTimeout(5000);
        await this.page.getByText(testData.message).click();
        if(testData.span1Organization != ""){
          await this.page.getByText(testData.span1Organization).isVisible
          await this.page.getByText(testData.span1Hours).isVisible
        }
        if(testData.span2Organization != ""){
          await this.page.getByText(testData.span2Organization).isVisible
          await this.page.getByText(testData.span2Hours).isVisible
        }
        await this.page.getByText("Redeemable").isVisible
        await this.page.getByText(testData.redeemableAmount).isVisible
        await this.page.getByText("Hours Available").isVisible
        await this.page.getByText(testData.redeemHours).isVisible
        await this.page.getByText("Redeemed").isVisible
        await this.page.getByText(testData.redeemedAmount).isVisible
        await this.page.getByText("Hours Logged").isVisible
        await this.page.getByText(testData.hoursLogged).isVisible
      }
      /*
      else if (curPagePortletData.PortletType == 4012){
        // class css-1eirz6y
        await this.page.getByRole('button', { name: 'Details' }).click();
        await this.page.getByText('RED CROSS ELEMENTARY PTO INC10 hours').click();
        await this.page.getByText('HEART 1 MISSION3 hours').click();
        await this.page.getByText('Total13 hours').click();
        await this.page.getByText('RED CROSS ELEMENTARY PTO INC$500.00Total$').click();
      }
      */

      // EVENTS Portlet - Edit/Delete
      //   Unsubmitted Events I Created
      else if (curPagePortletData.PortletType == 1016){
        await this.page.waitForTimeout(5000);
        for(let currentRow = 0; curPagePortletData.PortletHeader.length(); currentRow++){ //columns
          for(let curColumn = 0; curColumn < testData.TabElements; curColumn++){ //rows
            if(currentRow == 0){ 
              await expect(this.page.getByRole('cell', {name: testData.PortletRow0[curColumn],exact: true})).toBeVisible();
            }
            if(currentRow == 1){
              await expect(this.page.getByRole('cell', {name: testData.PortletRow1[curColumn],exact: true})).toBeVisible();
            }
            if(currentRow == 2){
              await expect(this.page.getByRole('cell', {name: testData.PortletRow2[curColumn],exact: true})).toBeVisible();
            }
            if(currentRow == 3){
              await expect(this.page.getByRole('cell', {name: testData.PortletRow3[curColumn],exact: true})).toBeVisible();
            }
          }
        }
      }

      // EVENTS Portlet - multi occurrences
      //   Manage Open Events 
      //   Manage Completed Events
      //   Events I Created 
      else if (curPagePortletData.PortletType == 1010){
        let expandedData = 0
        // TODO: CAN NOT assume
        // 1: the order of rows positions the Summary row first in the list
        // 2: tests will only have one summary row
        for(let currentRow = 0; currentRow < curPagePortletData.PortletElements; currentRow++){
          for(let curColumn = 0; curColumn < testData.TabElements; curColumn++){
            if((testData.TabAction == "open") && (expandedData == 0)){
              // select the cell with "View Occurrences" to expand the ongoing events
              await this.page.getByRole('link', {name: 'View Occurrences'}).click()
              await this.page.waitForTimeout(3000);
              expandedData = 1
            }
            if(currentRow == 0){ //headings
              await expect(this.page.getByRole('cell', {name: curPagePortletData.PortletRow0[curColumn]})).toBeVisible();
            }
            if((currentRow == 1) && (curPagePortletData.PortletRow1[curColumn] != "x")){
              // attempt to understand where to find duplicates are in the table
              // split the contents of the string and where it is located in the table
              let curStringArray = testData.PortletDataRow1[curColumn].split('|')
              if(curStringArray.length == 2){ 
                await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
              }
              else{
                await expect(this.page.getByRole('cell', {name: testData.PortletRow1[curColumn],exact: true})).toBeVisible();
              }
            }
            if((currentRow == 2) && (testData.PortletDataRow2[curColumn] != "x")){
              // attempt to understand where to find duplicates are in the table
              // split the contents of the string and where it is located in the table
              let curStringArray = testData.PortletDataRow2[curColumn].split('|')
              if(curStringArray.length == 2){ 
                await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
              }
              else{
                await expect(this.page.getByRole('cell', {name: testData.PortletDataRow2[curColumn],exact: true})).toBeVisible();
              }
            }
            if((currentRow == 3) && (testData.PortletRow3[curColumn] != "x")){
              // attempt to understand where to find duplicates are in the table
              // split the contents of the string and where it is located in the table
              let curStringArray = testData.PortletDataRow3[curColumn].split('|')
              if(curStringArray.length == 2){ 
                await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
              }
              else{
                await expect(this.page.getByRole('cell', {name: testData.PortletDataRow3[curColumn],exact: true})).toBeVisible();
              }
            }
            if((currentRow == 4) && (testData.PortletDataRow4[curColumn] != "x")){
              // attempt to understand where to find duplicates are in the table
              // split the contents of the string and where it is located in the table
              let curStringArray = testData.PortletRow4[curColumn].split('|')
              if(curStringArray.length == 2){ 
                await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
              }
              else{
                await expect(this.page.getByRole('cell', {name: testData.PortletDataRow4[curColumn],exact: true})).toBeVisible();
              }
            }
          }
        }
      }
      // Goals
      // 1033 How am I Doing
      else if (curPagePortletData.PortletType == 1033){ 
        if (testData.Donated != ""){
          await expect(this.page.locator('div').filter({ hasText: testData.Donated })).toBeTruthy;
        }
        if (testData.HoursVolunteered != ""){
          await expect(this.page.locator('div').filter({ hasText: testData.HoursVolunteered })).toBeTruthy;
        }
        if (testData.HoursGoal != 0){
          await expect(this.page.locator('div').filter({ hasText: testData.HoursGoal })).toBeTruthy;
        }
          //class: container-query-blocs container-query-three-blocs      }
      }
      // 4014  Contribute Again
      else if (curPagePortletData.PortletType == 4014){
        await this.page.getByText(testData);
        //for the number of rows
        for (let i = 0; i < testData.numText; i ++){
          // if numText = 0 then nothing to do
          if(testData.textArray[i].split('|') == 2){
            let curStringArray = testData.textArray[i].split('|')
            if(curStringArray.length == 2){ 
              await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
            }
            else{
              await expect(this.page.getByRole('cell', {name: testData.TextArray[0],exact: true})).toBeVisible();
            }
          }
        }
      }
      count = count + 1 // while loop
    }   
    
      // TODO: EVENTS Portlet - Volunteer
      //    Upcoming Events
      //else if (curPagePortletData.PortletType == 1036){}
  }
}

