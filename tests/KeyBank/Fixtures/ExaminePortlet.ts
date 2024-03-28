import { Page, expect } from "@playwright/test";


export class examinePortletHelper {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
    // use test data from JSON passed in
    // use the Portlet locators for the page with the test data to perform the validation
  async examinePortletTab(pageReference: any, testData: any, testLocators?: any) {
    await expect(pageReference.numPortlets <= 6).toBeTruthy
    let curPagePortletData: any
    let curPortletTestData : any
    let count = 1 
    while ( count <= pageReference.numPortlets ){
      if (count == 1){
        curPagePortletData = pageReference["Portlet1"] 
        curPortletTestData = testData["Portlet1"]
      }
      if (count == 2){
        curPagePortletData = pageReference["Portlet2"] 
        curPortletTestData = testData["Portlet2"]
      }
      if (count == 3){
        curPagePortletData = pageReference["Portlet3"]
        curPortletTestData = testData["Portlet3"]
      }
      if (count == 4){
        curPagePortletData = pageReference["Portlet4"]
        curPortletTestData = testData["Portlet4"]
      }
      if (count == 5){
        curPagePortletData = pageReference["Portlet5"]
        curPortletTestData = testData["Portlet5"]
      }
      if (count == 6){
        curPagePortletData = pageReference["Portlet6"]
        curPortletTestData = testData["Portlet6"]
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
        await expect(curPortletTestData.PortletNumRows <= 4 ).toBeTruthy
        
        for(let curColumn = 0; ((curColumn < curPagePortletData.PortletElements) && (curPortletTestData.PortletNumRows != 0)); curColumn++){ //columns using array length
          for(let curRow = 0; curRow <= curPortletTestData.PortletNumRows; curRow++){ //rows
            if (curRow == 1){
              if (curPortletTestData.PortletRow1[0] == 'No Result Found'){
                await expect(this.page.getByRole('cell', {name: curPortletTestData.PortletRow1[curColumn], exact: true})).toBeVisible();
                break
              }
              else if ((curRow == 1 ) && (curPortletTestData.PortletRow1[curColumn] != "x")){
                await expect(this.page.getByRole('cell', {name: curPortletTestData.PortletRow1[curColumn], exact:true})).toBeVisible();
              }
            }
            else if ((curRow == 2 ) && (curPortletTestData.PortletRow1[curColumn] != "x")){
              await expect(this.page.getByRole('cell', {name: curPortletTestData.PortletRow2[curColumn], exact:true})).toBeVisible();
            }
            else if ((curRow == 3 ) && (curPortletTestData.PortletRow1[curColumn] != "x")){
              await expect(this.page.getByRole('cell', {name: curPortletTestData.PortletRow3[curColumn], exact:true})).toBeVisible();
            }
            else if ((curRow == 4 ) && (curPortletTestData.PortletRow1[curColumn] != "x")){
              await expect(this.page.getByRole('cell', {name: curPortletTestData.PortletRow4[curColumn], exact:true})).toBeVisible();
            }
          }
        }
      }
      // BALANCE Portlet
      //   Matching Gift Balance
      else if (curPagePortletData.PortletType == 1006){ 
        for(let currentRow = 0; curPagePortletData.PortletElements; currentRow++){ // columns
          for(let currentElement = 0; currentElement < curPortletTestData.TabElements; currentElement++){ //rows
            if((currentRow == 0) && (curPortletTestData.PortletRow0[currentElement] != "x")){ 
              await expect(this.page.getByRole('cell', {name: curPortletTestData.PortletRow0[currentElement],exact: true})).toBeVisible();
            }
            if((currentRow == 1) && (curPortletTestData.PortletRow1[currentElement] != "x")){
              // if the string contains a '|'
              let curStringArray = curPortletTestData.PortletRow1[currentElement].split('|')
              if(curStringArray.length == 2){ 
                await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
              }
              else{
                await expect(this.page.getByRole('cell', {name: curPortletTestData.PortletRow1[currentElement],exact: true})).toBeVisible();
              }
            }
            if((currentRow == 2) && (curPortletTestData.PortletRow2[currentElement] != "x")){
              let curStringArray = curPortletTestData.PortletRow2[currentElement].split('|')
              if(curStringArray.length == 2){ 
                await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
              }
              else{
                await expect(this.page.getByRole('cell', {name: curPortletTestData.PortletRow2[currentElement],exact: true})).toBeVisible();
              }
            }
            if((currentRow == 3) && (curPortletTestData.PortletRow3[currentElement] != "x")){
              let curStringArray = curPortletTestData.PortletRow3[currentElement].split('|')
              if(curStringArray.length == 2){ 
                await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
              }
              else{
                await expect(this.page.getByRole('cell', {name: curPortletTestData.PortletRow3[currentElement],exact: true})).toBeVisible();
              }          
            }
          }
        }
      }

      // DOLLARS FOR DOERS 
      else if (curPagePortletData.PortletType == 4012){
        //TODO: if "Details" select it to expand more information
        await this.page.waitForTimeout(5000);
        await this.page.getByText(curPortletTestData.message).click();
        if(curPortletTestData.span1Organization != ""){
          await this.page.getByText(curPortletTestData.span1Organization).isVisible
          await this.page.getByText(curPortletTestData.span1Hours).isVisible
        }
        if(curPortletTestData.span2Organization != ""){
          await this.page.getByText(curPortletTestData.span2Organization).isVisible
          await this.page.getByText(curPortletTestData.span2Hours).isVisible
        }
        await this.page.getByText("Redeemable").isVisible
        await this.page.getByText(curPortletTestData.redeemableAmount).isVisible
        await this.page.getByText("Hours Available").isVisible
        await this.page.getByText(curPortletTestData.redeemHours).isVisible
        await this.page.getByText("Redeemed").isVisible
        await this.page.getByText(curPortletTestData.redeemedAmount).isVisible
        await this.page.getByText("Hours Logged").isVisible
        await this.page.getByText(curPortletTestData.hoursLogged).isVisible
      }
      
      // EVENTS Portlet - Edit/Delete
      //   Unsubmitted Events I Created
      else if (curPagePortletData.PortletType == 1016){
        await this.page.waitForTimeout(5000);
        for(let currentRow = 0; curPagePortletData.PortletHeader.lenght(); currentRow++){ //columns
          for(let currentElement = 0; currentElement < curPortletTestData.TabElements; currentElement++){ //rows
            if(currentRow == 0){ 
              await expect(this.page.getByRole('cell', {name: curPortletTestData.PortletRow0[currentElement],exact: true})).toBeVisible();
            }
            if(currentRow == 1){
              await expect(this.page.getByRole('cell', {name: curPortletTestData.PortletRow1[currentElement],exact: true})).toBeVisible();
            }
            if(currentRow == 2){
              await expect(this.page.getByRole('cell', {name: curPortletTestData.PortletRow2[currentElement],exact: true})).toBeVisible();
            }
            if(currentRow == 3){
              await expect(this.page.getByRole('cell', {name: curPortletTestData.PortletRow3[currentElement],exact: true})).toBeVisible();
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
          for(let currentElement = 0; currentElement < curPortletTestData.TabElements; currentElement++){
            if((curPortletTestData.TabAction == "open") && (expandedData == 0)){
              // select the cell with "View Occurrences" to expand the ongoing events
              await this.page.getByRole('link', {name: 'View Occurrences'}).click()
              await this.page.waitForTimeout(3000);
              expandedData = 1
            }
            if(currentRow == 0){ //headings
              await expect(this.page.getByRole('cell', {name: curPortletTestData.PortletRow0[currentElement]})).toBeVisible();
            }
            if((currentRow == 1) && (curPortletTestData.PortletRow1[currentElement] != "x")){
              // attempt to understand where to find duplicates are in the table
              // split the contents of the string and where it is located in the table
              let curStringArray = curPortletTestData.PortletRow1[currentElement].split('|')
              if(curStringArray.length == 2){ 
                await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
              }
              else{
                await expect(this.page.getByRole('cell', {name: curPortletTestData.PortletRow1[currentElement],exact: true})).toBeVisible();
              }
            }
            if((currentRow == 2) && (curPortletTestData.PortletRow2[currentElement] != "x")){
              // attempt to understand where to find duplicates are in the table
              // split the contents of the string and where it is located in the table
              let curStringArray = curPortletTestData.PortletRow2[currentElement].split('|')
              if(curStringArray.length == 2){ 
                await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
              }
              else{
                await expect(this.page.getByRole('cell', {name: curPortletTestData.PortletRow2[currentElement],exact: true})).toBeVisible();
              }
            }
            if((currentRow == 3) && (curPortletTestData.PortletRow3[currentElement] != "x")){
              // attempt to understand where to find duplicates are in the table
              // split the contents of the string and where it is located in the table
              let curStringArray = curPortletTestData.PortletRow3[currentElement].split('|')
              if(curStringArray.length == 2){ 
                await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
              }
              else{
                await expect(this.page.getByRole('cell', {name: curPortletTestData.PortletRow3[currentElement],exact: true})).toBeVisible();
              }
            }
            if((currentRow == 4) && (curPortletTestData.PortletRow4[currentElement] != "x")){
              // attempt to understand where to find duplicates are in the table
              // split the contents of the string and where it is located in the table
              let curStringArray = curPortletTestData.PortletRow4[currentElement].split('|')
              if(curStringArray.length == 2){ 
                await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
              }
              else{
                await expect(this.page.getByRole('cell', {name: curPortletTestData.PortletRow4[currentElement],exact: true})).toBeVisible();
              }
            }
          }
        }
      }
      // Goals
      // 1033 How am I Doing
      else if (curPagePortletData.PortletType == 1033){ 
        if (curPortletTestData.Donated != ""){
          await expect(this.page.locator('div').filter({ hasText: testData.Donated })).toBeTruthy;
        }
        if (testData.HoursVolunteered != ""){
          await expect(this.page.locator('div').filter({ hasText: testData.HoursVolunteered })).toBeTruthy;
        }
          //class: container-query-blocs container-query-three-blocs      }
      }
      // 4014  Contribute Again
      else if (curPagePortletData.PortletType == 4014){
        await this.page.getByText(curPortletTestData);
        //for the number of rows
        for (let i = 0; i < curPortletTestData.numText; i ++){
          // if numText = 0 then nothing to do
          if(curPortletTestData.textArray[i].split('|') == 2){
            let curStringArray = curPortletTestData.textArray[i].split('|')
            if(curStringArray.length == 2){ 
              await expect(this.page.getByRole('cell', {name: curStringArray[0],exact: true}).nth(curStringArray[1])).toBeVisible();
            }
            else{
              await expect(this.page.getByRole('cell', {name: curPortletTestData.TextArray[0],exact: true})).toBeVisible();
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

