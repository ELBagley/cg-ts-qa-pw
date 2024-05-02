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
    //look through the portlet title array to find which portlet data to use
    for(let curPortlet = 1; curPortlet <= pageReference.numPortlets; curPortlet++){
      if (curPortlet == 1){
        curPagePortletData = pageReference["Portlet1"] 
        testData = pagetestData["Portlet1"]
      }
      if (curPortlet == 2){
        curPagePortletData = pageReference["Portlet2"] 
        testData = pagetestData["Portlet2"]
      }
      if (curPortlet == 3){
        curPagePortletData = pageReference["Portlet3"]
        testData = pagetestData["Portlet3"]
      }
      if (curPortlet == 4){
        curPagePortletData = pageReference["Portlet4"]
        testData = pagetestData["Portlet4"]
      }
      if (curPortlet == 5){
        curPagePortletData = pageReference["Portlet5"]
        testData = pagetestData["Portlet5"]
      }
      if (curPortlet == 6){
        curPagePortletData = pageReference["Portlet6"]
        testData = pagetestData["Portlet6"]
      }
    
      if (curPagePortletData.PortletType != 4012){
        //need to verify the portlet's headings first
        for(let curColumn = 0; curColumn < curPagePortletData.PortletElements; curColumn++){ 
          if (curPagePortletData.PortletElements != 0){ // there is no table for the portlet
            await expect(this.page.getByRole('cell', {name: curPagePortletData.PortletHeader[curColumn], exact: true})).toBeVisible();
          }
        }

        // some portlets have nested rows. Expand them if test data specifies
        let expandedData = 0 // flag to indicate if rows were expanded
        // TODO: CAN NOT assume
        // 1: the order of rows positions the Summary row first in the list
        // 2: FUTURE: tests will only have one summary row
        if((testData.TabAction == "open") && (expandedData == 0)){
            // select the cell with "View Occurrences" to expand the ongoing events
            await this.page.getByRole('link', {name: 'View Occurrences'}).click()
            await this.page.waitForTimeout(3000);
            expandedData = 1 
        }

        // need to verify the data presented in the portlet
        await expect(testData.PortletNumRows |= 0 ).toBeTruthy

        //Verify the data for the portlet
        // review each column of each row for verification
        // each portlet type has a different number of columns; PortletElements however there may not be a table for data
        for(let curColumn = 0; ((curColumn < curPagePortletData.PortletElements) && (testData.PortletNumRows != 0)); curColumn++){ //columns using array length
          // There is a table so continue to review each row column by column. Each test may have any number of rows; PortletDataRows
          for(let curRow = 0; curRow <= testData.PortletDataRows; curRow++){ 
            // 
            if((curColumn == 0) && (curPagePortletData.PortletElements != 0)){ // make sure there is a table for the portlet
              await expect(this.page.getByRole('cell', {name: curPagePortletData.PortletHeader[curColumn],exact: true})).toBeVisible();
            }
            if((curColumn == 1) && (testData.PortletDataRow1[curColumn] != "x")){ //there may not be any data in this column/row location in the table
              // handle duplicaate locators, if any. The JASON data will indicate if the string contains a '|'  // 
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
        */

        // HISTORY Portlet
        //   Current Payroll Contribution 1019
        //   Donation History 1002
        
        // BALANCE Portlet
        //   Matching Gift Balance 1006
        

    }
  }
  }
}}

