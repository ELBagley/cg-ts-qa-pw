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
    await this.page.getByText(tabName).click();
    // HISTORY PORTLET
    if(testData[tabName].TabType == 1019){ 
      for(let currentRow = 0; currentRow < testData[tabName].TabRows; currentRow++){
        for(let currentElement = 0; currentElement < testData[tabName].TabElements; currentElement++){
          if(currentRow == 0){
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
    // MY EVENTS PORTLET
    else if (testData[tabName].TabType == 1036){
      for(let currentRow = 0; currentRow < testData[tabName].TabRows; currentRow++){
        for(let currentElement = 0; currentElement < testData[tabName].TabElements; currentElement++){
          if((currentRow == 0) && (currentElement == 0)){} // don't bother
        }
      }
    }
  }
}


  /*
  async examineTabData(){
    let currentRow = 0
    // while there are rows to verify
    while (currentRow <= this.numRows) { 
      // verify each of the elements in the array of row data until there is no more data
        if (currentRow == 0){  
          for(let currentElement = 0; currentElement <= this.TabRow0Data.length; currentElement++){                
            await expect(this.page.getByRole('cell', { name: this.TabRow0Data[currentElement]})).toBeVisible();
            break
        }}
        if (currentRow == 1){
          for(let currentElement = 0; currentElement <= this.TabRow1Data.length; currentElement++){ 
            await expect(this.page.getByRole('cell', { name: this.TabRow1Data[currentElement]})).toBeVisible();
            break
        }}
        if (currentRow == 2){
          for(let currentElement = 0; currentElement <= this.TabRow2Data.length; currentElement++){ 
          await expect(this.page.getByRole('cell', { name: this.TabRow2Data[currentElement]})).toBeVisible();
          break
        }}
        if (currentRow == 3){
          for(let currentElement = 0; currentElement <= this.TabRow3Data.length; currentElement++){ 
          await expect(this.page.getByRole('cell', { name: this.TabRow3Data[currentElement]})).toBeVisible();
          break
        }}
        if (currentRow == 4){
          for(let currentElement = 0; currentElement <= this.TabRow4Data.length; currentElement++){ 
            await expect(this.page.getByRole('cell', { name: this.TabRow4Data[currentElement]})).toBeVisible();
            break
        }}
        if (currentRow == 5){
          for(let currentElement = 0; currentElement <= this.TabRow5Data.length; currentElement++){ 
            await expect(this.page.getByRole('cell', { name: this.TabRow5Data[currentElement]})).toBeVisible();
            break
        }}
        currentRow = currentRow + 1
    } //for 'currentRow'  
      //DEBUG console.log("ROWS" + testData.numRows + ", ELEMENTS " + testData.Tab1Row1[i])
  } //while 'currentRow'

} //class 'examinePortletHelper'
  */

