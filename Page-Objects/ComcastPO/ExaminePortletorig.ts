import { Page, expect } from "@playwright/test";

export class examinePortletHelper {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  private currentTab = 0;
  private numRows = 0;
  private numElements = 0;
  private TabRow0Data = [" "];
  private TabRow1Data = [" "];
  private TabRow2Data = [" "];
  private TabRow3Data = [" "];
  private TabRow4Data = [" "];
  private TabRow5Data = [" "];

  async examineTabs(tabName: string, testData: any) {
    // use test data from JSON passed in
    // use the portlet locators for the page with the test data to perform the validation

    // check to see if there are the same number of expected tabs to process

  //await expect(this.page.getByRole('tablist')).toHaveCount(3)
  const list = this.page.getByRole('tab', {name: '/i'}).count;


    for (let tab = 1; tab <= testData.numTabs; tab++) {
      this.currentTab = tab
      if (tab == 1 && testData.Tab1Rows != 0) {
        // update the class variables to reflect the current tab's data
        this.numRows = testData.Tab1Rows;
        this.numElements = testData.Tab1Elements;
        this.TabRow0Data = testData.Tab1Row0;
        this.TabRow1Data = testData.Tab1Row1;
        this.TabRow2Data = testData.Tab1Row2;
        this.TabRow3Data = testData.Tab1Row3;
        this.TabRow4Data = testData.Tab1Row4;
        this.TabRow5Data = testData.Tab1Row5;
        // verify the text then select it
        //expect(testData.Tab1Text == this.page.getByRole('tab',testData.Tab1Text).textContent());
        await this.page.locator('#span-tab-368796').click();
        this.currentTab = tab
      } 
      if (tab == 2 && testData.Tab2Rows != 0) {
        // update the class variables to reflect the tab's data
        this.numRows = testData.Tab2Rows;
        this.numElements = testData.Tab2Elements;
        this.TabRow0Data = testData.Tab2Row0;
        this.TabRow1Data = testData.Tab2Row1;
        this.TabRow2Data = testData.Tab2Row2;
        this.TabRow3Data = testData.Tab2Row3;
        this.TabRow4Data = testData.Tab2Row4;
        this.TabRow5Data = testData.Tab2Row5;
        // verify the text then select it
        //expect(testData.Tab2Text == await this.page.getByRole('tab',testData.Tab2Text).textContent());
        await this.page.getByRole('tab',testData.Tab2Text).click();
        this.currentTab = tab
      } 
      if (tab == 3 && testData.Tab3Rows != 0) {
        // update the class variables to reflect the tab's data
        this.numRows = testData.Tab3Rows;
        this.numElements = testData.Tab3Elements;
        this.TabRow0Data = testData.Tab3Row0;
        this.TabRow1Data = testData.Tab3Row1;
        this.TabRow2Data = testData.Tab3Row2;
        this.TabRow3Data = testData.Tab3Row3;
        this.TabRow4Data = testData.Tab3Row4;
        this.TabRow5Data = testData.Tab3Row5;
        // verify the text then select it
        //expect(testData.Tab3Text == await this.page.getByRole('tab',testData.Tab3Text).textContent());
        await this.page.getByRole('tab',testData.Tab3Text).click();
        this.currentTab = tab
      } 
      if (tab == 4 && testData.Tab4Rows != 0) {
        // update the class variables to reflect the tab's data
        this.numRows = testData.Tab4Rows;
        this.numElements = testData.Tab4Elements;
        this.TabRow0Data = testData.Tab4Row0;
        this.TabRow1Data = testData.Tab4Row1;
        this.TabRow2Data = testData.Tab4Row2;
        this.TabRow3Data = testData.Tab4Row3;
        this.TabRow4Data = testData.Tab4Row4;
        this.TabRow5Data = testData.Tab4Row5;
        // verify the text then select it
        //expect(testData.Tab4Text == await this.page.getByRole('tab',testData.Tab4Text).textContent());
        await this.page.getByRole('tab',testData.Tab4Text).click();
        this.currentTab = tab
      } 
      if (tab == 5 && testData.Tab5Rows != 0) {
        // update the class variables to reflect the tab's data
        this.numRows = testData.Tab5Rows;
        this.numElements = testData.Tab5Elements;
        this.TabRow0Data = testData.Tab5Row0;
        this.TabRow1Data = testData.Tab5Row1;
        this.TabRow2Data = testData.Tab5Row2;
        this.TabRow3Data = testData.Tab5Row3;
        this.TabRow4Data = testData.Tab5Row4;
        this.TabRow5Data = testData.Tab5Row5;
        // verify the text then select it
       // expect(testData.Tab5Text == await this.page.getByRole('tab',testData.Tab5Text).textContent());
        await this.page.getByRole('tab',testData.Tab5Text).click();
        this.currentTab = tab
      }
      this.examineTabData(this.currentTab);
    }
  }

  async examineTabData(currentTab: number){
    let currentRow = 0
    // while there are rows to verify
    while (currentRow <= this.numRows) { 
      // verify each of the elements in the array of row data until there is no more data
        if (currentRow == 0){  
          for(let currentElement = 0; currentElement <= this.numElements; currentElement++){                
            await expect(this.page.getByRole('cell', { name: this.TabRow0Data[currentElement]})).toBeVisible();
        }}
        if (currentRow == 1){
          for(let currentElement = 0; currentElement <= this.numElements; currentElement++){ 
            await expect(this.page.getByRole('cell', { name: this.TabRow1Data[currentElement]})).toBeVisible();
        }}
        if (currentRow == 2){
          for(let currentElement = 0; currentElement <= this.numElements; currentElement++){ 
          await expect(this.page.getByRole('cell', { name: this.TabRow2Data[currentElement]})).toBeVisible();
        }}
        if (currentRow == 3){
          for(let currentElement = 0; currentElement <= this.numElements; currentElement++){ 
          await expect(this.page.getByRole('cell', { name: this.TabRow3Data[currentElement]})).toBeVisible();
        }}
        if (currentRow == 4){
          for(let currentElement = 0; currentElement <= this.numElements; currentElement++){ 
            await expect(this.page.getByRole('cell', { name: this.TabRow4Data[currentElement]})).toBeVisible();
        }}
        if (currentRow == 5){
          for(let currentElement = 0; currentElement <= this.numElements; currentElement++){ 
            await expect(this.page.getByRole('cell', { name: this.TabRow5Data[currentElement]})).toBeVisible();
        }}
      } //for 'currentRow'
      currentRow = currentRow + 1
      //DEBUG console.log("ROWS" + testData.numRows + ", ELEMENTS " + testData.Tab1Row1[i])
    } //while 'currentRow'
} //class 'examinePortletHelper'
