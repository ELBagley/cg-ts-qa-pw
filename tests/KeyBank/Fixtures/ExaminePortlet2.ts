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
    
    //look through the portlet title array to find which portlet reference in the JSON data to use
    for(let curPortlet = 0; curPortlet < pageReference.numPortlets; curPortlet++){
      // for the each portlet title find the reference match
      // does portlet1's PortletReference match with the first title in the array
      if(pageReference.Portlet1.PortletTitle == pageReference.PortletArray[curPortlet]){
          curPagePortletData = pageReference["Portlet1"] 
          testData = pagetestData["Portlet1"]
      }
      else if(pageReference.Portlet2.PortletTitle == pageReference.PortletArray[curPortlet]){
        curPagePortletData = pageReference["Portlet2"] 
        testData = pagetestData["Portlet2"]
      }
      else if(pageReference.Portlet3.PortletTitle == pageReference.PortletArray[curPortlet]){
          curPagePortletData = pageReference["Portlet3"]
          testData = pagetestData["Portlet3"]
      }
      else if(pageReference.Portlet4.PortletTitle == pageReference.PortletArray[curPortlet]){
        curPagePortletData = pageReference["Portlet4"]
        testData = pagetestData["Portlet4"]
      }
      else if(pageReference.Portlet5.PortletTitle == pageReference.PortletArray[curPortlet]){
        curPagePortletData = pageReference["Portlet5"]
        testData = pagetestData["Portlet5"]
      }
      else if(pageReference.Portlet6.PortletTitle == pageReference.PortletArray[curPortlet]){
        curPagePortletData = pageReference["Portlet6"]
        testData = pagetestData["Portlet6"]
      }

      if((curPagePortletData.PortletTitle != 'Give Again') && (curPagePortletData.PortletTitle != 'How Am I Doing?')){
        await this.page.getByText(curPagePortletData.PortletTitle, {exact: true}).click()
      }

      // Verify the table headings, if any
      for(let curColumn = 0; curColumn < curPagePortletData.PortletElements; curColumn++){ 
        if (testData.PortletHeadings != 0){ 
          await expect(this.page.getByRole('cell', {name: curPagePortletData.PortletHeader[curColumn], exact: true})).toBeVisible();
        }
      }

      // some portlets have nested rows. Expand them if test data specifies
      // Portlet 1010  EVENTS - multi occurrences 
      // all portlet data will either has "none" or "open"
      let expandedData = 0 // flag to indicate if rows were expanded
      // TODO: CAN NOT ASSUME
      // 1: the order of rows positions the Summary row first in the list
      // 2: tests will only have one summary row
      if((testData.TabAction == "open") && (expandedData == 0)){
          // select the cell with "View Occurrences" to expand the ongoing events
          await this.page.getByRole('link', {name: 'View Occurrences'}).click()
          await this.page.waitForTimeout(3000);
          expandedData = 1 
      }

      // 4012 is Dollars for Doers
      //  this section hadles portlets that do not follwow the same format 
      //      as standard portlets with headers and data tables
      //
      // 1033 is home page graphical portets
      //
      // need to verify the data presented in the portlet
      if ((curPagePortletData.PortletType != 4012) && (curPagePortletData.PortletType != 1033) && (testData.PortletNumRows != 0 )){
        //Verify the data for the portlet
        //  review each column of each row for verification
        //  each portlet type has a different number of columns; PortletElements. 
        //  each test may have any number of rows; PortletDataRows
        var curStringArray = []
        for(let curRow = 0; curRow <= testData.PortletNumRows; curRow++){ 
          for(let curColumn = 0; (curColumn < curPagePortletData.PortletElements); curColumn++){ //columns using array length
            // if curRow = 1 then start with that rows array of data, then go accross each column
            //     split that value and select correct locator based on its nth
            if((curRow == 1) && (testData.PortletDataRow1[curColumn] != 'x')){ //there may not be any data in this column/row location in the table
              //if there is a css locator for row 1 ("No Results Found") use the css locator 
              if(testData.PortletDataRow1[curColumn] == "No results Found" && curPagePortletData.TabRow1Locator != ""){
                await expect(this.page.locator(curPagePortletData.TabRow1Locator)).toHaveText("No results Found");
                continue;
              }
              // handle duplicate locators, if any. The JASON data will indicate if the string contains a '|'  // 
              curStringArray = testData.PortletDataRow1[curColumn].split('|')
              if(curStringArray.length == 2){ 
                await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
              }
              else{
                await expect(this.page.getByRole('cell', {name: testData.PortletDataRow1[curColumn],exact: true})).toBeVisible();
              }
            }
            if((curRow == 2) && (testData.PortletDataRow2[curColumn] != 'x')){
              let curStringArray = testData.PortletDataRow2[curColumn].split('|')// handle duplicate locators, if any
              if(curStringArray.length == 2){ 
                await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
              }
              else{
                await expect(this.page.getByRole('cell', {name: testData.PortletDataRow2[curColumn],exact: true})).toBeVisible();
              }
            } 
            if((curRow == 3) && (testData.PortletDataRow3[curColumn] != 'x')){
              let curStringArray = testData.PortletDataRow3[curColumn].split('|')// handle duplicate locators, if any
              if(curStringArray.length == 2){ 
                await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
              }
              else{
                await expect(this.page.getByRole('cell', {name: testData.PortletDataRow3[curColumn],exact: true})).toBeVisible();
              }          
            }
            if((curRow == 4) && (testData.PortletDataRow4[curColumn] != 'x')){
              let curStringArray = testData.PortletDataRow4[curColumn].split('|')// handle duplicate locators, if any
              if(curStringArray.length == 2){ 
                await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
              }
              else{
                await expect(this.page.getByRole('cell', {name: testData.PortletDataRow4[curColumn],exact: true})).toBeVisible();
              }          
            }
            if((curColumn == 5) && (testData.PortletDataRow5[curColumn] != 'x')){
              let curStringArray = testData.PortletDataRow5[curColumn].split('|')// handle duplicate locators, if any
              if(curStringArray.length == 2){ 
                await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
              }
              else{
                await expect(this.page.getByRole('cell', {name: testData.PortletDataRow5[curColumn],exact: true})).toBeVisible();
              }          
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
      //Could not use standard locators for these
      else if (curPagePortletData.PortletType == 1033){ 
        if (testData.Donated != ''){
          //expect(this.page.getByText(testData.Donated, { exact: true })).toBeVisible();
          expect(this.page.locator('div:nth-of-type(1) > .blocs-content > .goals__circle-outer > .goals__progress > .goals__value')).toHaveText(testData.Donated)
        }
        if (testData.HoursVolunteered != ''){
          //expect(this.page.getByText(testData.HoursVolunteered, { exact: true })).toBeVisible();
          expect(this.page.locator(':nth-of-type(2) > .blocs-content > .goals__circle-outer > .goals__progress > .goals__value')).toHaveText(testData.HoursVolunteered)
        }
        if (testData.HoursGoal != ''){
          //expect(this.page.getByText(testData.HoursGoal, { exact: true })).toBeVisible();
          expect(this.page.locator('.goals__percent > .goals__value')).toHaveText(testData.HoursGoal)
        }
      }
          //class: container-query-blocs container-query-three-blocs      }
    }
        /*
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
        
        // BALANCE Portlet
        //   Matching Gift Balance 1006
        
        */
  }
}



