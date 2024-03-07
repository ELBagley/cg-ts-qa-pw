import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sandbox.cybergrants.com/pls/cybergrants-sb/np_portal.turnstile?x_source_flag=&x_gm_id=2932&x_proposal_type_id=49608&x_invitation_id=&x_org_id=&x_style_id=&x_language_code=en-US');
    // first need to login as the already certified grantseeker
  await page.getByLabel('E-mail Address:').fill('erica.bagley@cybergrants.com');
  await page.getByLabel('Password:').fill('123!SilverFox');
  await page.getByLabel('Password:').press('Enter');
    // opens GEMS HOME Page for IIT
    // two buttons
    ////await page.getByText('Clinical - Investigator Initiated Trials (IITs) Research which constitutes a').click();
    ////await page.getByRole('link', { name: 'Clinical - IIT Application' }).click();
    // PT 49608, Principal Investigator Information
    ////await page.goto('https://sandbox.cybergrants.com/pls/cybergrants-sb/np_portal.turnstile?x_source_flag=&x_gm_id=2932&x_proposal_type_id=49608&x_invitation_id=&x_org_id=&x_style_id=&x_language_code=en-US');
    ////await page.getByRole('link', { name: 'Non-clinical IIR Application' }).click();
    // PT 83972, Principal Investigator Information
    //               https://sandbox.cybergrants.com/pls/cybergrants-sb/ao_application.display_step?x_gm_id=2932&x_step=1&x_source_flag=&x_style_id=&x_org_id=22375438&x_proposal_type_id=83972&x_invitation_id=

      await page.getByLabel('*E-mail Address').click();

      const page1Promise = page.waitForEvent('popup');
      await page.getByLabel('*CV Upload').click();
      const page1 = await page1Promise;
      await page1.getByLabel('Upload File: CV Upload').click();
      await page1.getByLabel('Upload File: CV Upload').setInputFiles('11802148_PO_03282023101945.pdf'); // need a path??
      await page1.getByRole('button', { name: 'Upload File' }).click();
      await page1.getByRole('button', { name: 'Close Window' }).click();
      await page.getByRole('button', { name: 'Save and Proceed' }).click();
      
      await page.getByLabel('*E-mail Address').fill('erica.bagley@bonterratech.com');
      await page.getByLabel('Telephone').fill(' 978-500-9999');
      await page.getByRole('button', { name: 'Save and Proceed' }).click();

      // Proposal and Institution Information page
      await page.getByLabel('*Study Title').fill('SQA 0222 DEMO Automation');
      await page.getByLabel('*Study Type').selectOption('38417126');
      await page.getByLabel('*Sponsor').selectOption('38741114');
      await page.getByLabel('*Primary Institution Name').fill('General Hospital');
      await page.getByLabel('*Institution Country').press('Tab'); //defaults to USA
      await page.getByLabel('*Institution Address').fill('123 Main');
      await page.getByLabel('Institution Address 2').press('Tab');
      await page.getByLabel('*Institution City').fill('Boston');
      await page.getByLabel('Institution Zip/Postal Code').fill('01810');
      await page.getByLabel('Institution E-mail Address').press('Tab');
      await page.getByLabel('*Institution Telephone').fill('978-500-8888');
      await page.getByLabel('*Institution Telephone').press('Tab');
      await page.getByLabel('Institution Fax').press('Tab');
      await page.getByLabel('*Institution Type').selectOption('38916514');
      await page.getByRole('button', { name: 'Save and Proceed' }).click();

      //Investigator Qualifications
      await page.getByLabel('* Has the Primary').selectOption('N'); //Y Has the Primary Investigator ever participated in a Novartis sponsored study?	
                                                                    // opens up two list fields
      // MISSING await page.getByLabel('* When was the Primary').fill('032022'); // !! not on the page anymore
      await page.getByLabel('*Years of Experience as').selectOption('38840532'); //3-6 years
      await page.getByLabel('*Number of Ongoing Clinical').fill('1');
      await page.getByLabel('*Health Authority Inspection').selectOption('Y'); // opens two more edit fields which and date
      await page.getByLabel('* Which Health Authority?').fill('General');
      await page.getByLabel('* Date of Last Inspection').fill('022022');
      await page.getByLabel('* Did the FDA issue a FDA483').selectOption('N'); //Y opens form upload and details edit field
      await page.getByRole('button', { name: 'Save and Proceed' }).click();

      // Study Design page
      await page.getByLabel('*Therapeutic Area').selectOption('39188780'); //Cardiovascular
      await page.getByLabel('*Primary Indication').fill('infarction');
      await page.getByLabel('*Is your research proposal').selectOption('N'); // related to COVID-19
      await page.getByLabel('*Primary Novartis Product Name').selectOption('40889644'); //tons of drugs!! Belinostat

      /* HIDDEN
      await page.getByLabel('* Primary Product Use').selectOption('38783374'); //Comparator??
      await page.getByLabel('* If you are requesting').selectOption('1618398|38977054');
      */
      await page.getByLabel('*Rationale for Study').fill('TESt');
      await page.getByLabel('*Primary Objectives').fill('TESt');
      await page.getByLabel('*Primary Endpoints').fill('TESt');
      await page.getByLabel('*Do you have Secondary').selectOption('N'); //Y opens two more edit fields
      await page.getByLabel('*Do you have Exploratory').selectOption('N');//Y opens two more edit fields
      /* HIDDEN
      // await page.getByLabel('* Study Design Description').fill('TEST');
      // await page.getByLabel('* Study Phase').selectOption('38741708');
      // await page.getByLabel('Single Group').check();
      // await page.getByLabel('* Randomized').selectOption('38743832');
      // await page.getByLabel('* Blinding').selectOption('38743820');
      // await page.locator('#grid_1675258_16384').fill('left');
      // await page.locator('#grid_1669848_16384').press('ArrowDown');
      // await page.getByLabel('*\n*Treatment of the patient at the end of the trial is the responsibility of the').fill('TESt');
      */
      await page.getByLabel('*Total Planned Number of').fill('1');
      await page.getByLabel('*Sample Size Justification').fill('TEST');

      await page.getByLabel('*Population').fill('TESt');
      await page.getByLabel('*Key Exclusion Criteria').fill('TESt');
      await page.getByLabel('Male', { exact: true }).check();
      await page.getByLabel('*Pediatric Designation').selectOption('38840946'); 
      await page.getByLabel('*Minimum Age', { exact: true }).fill('19');
      await page.getByLabel('*Minimum Age Unit').selectOption('38783402');// Days
      await page.getByLabel('Maximum Age', { exact: true }).fill('30');
      await page.getByLabel('Maximum Age Unit').selectOption('38741798');//Years 4 different IDs from minimum items
      await page.getByLabel('*Do you have any comments on').selectOption('N');
      await page.getByRole('button', { name: 'Save and Proceed' }).click();
      // HIDDEN await page.getByLabel('*Primary Indication').click();
      // HIDDEN await page.getByLabel('Select the Applicable Type of  Interventional Study  for Safety Reporting requirements', { exact: true }).selectOption('43788010');
      
      // Study Setup and Plans page
      await page.getByLabel('*Total Planned Number of Countries').selectOption('38797684');
      await page.getByLabel('*Total Planned Number of Centers').selectOption('38977056');
      // HIDDEN  await page.getByLabel('* Planned Study Start/First').click();
      //   await page.getByRole('button', { name: '23' }).click();
      // HIDDEN await page.getByLabel('* Planned Recruitment End/').click();
      //   await page.getByRole('button', { name: '29' }).click();
      // HIDDEN await page.getByLabel('* Planned Study End/Last').click();

      await page.getByLabel('*Planned Final Study Report').click(); // calendar widget
      await page.getByRole('button', { name: 'Next Month' }).click();
      await page.getByRole('button', { name: '4', exact: true }).click();

      await page.getByLabel('*Planned Final Publication').click(); // calendar widget
      await page.getByRole('button', { name: 'Next Month' }).click();
      await page.getByRole('button', { name: '4', exact: true }).click();
      await page.getByLabel('Do you have supporting').selectOption('N'); // personnel details is not required with No
      await page.getByRole('button', { name: 'Save and Proceed' }).click();


      // Support Requested
      await page.getByLabel('*Are you requesting funding').selectOption('Y');
      await page.getByLabel('* Request Amount Local').selectOption('USD');
      await page.getByRole('row', { name: '* Request Amount in Local' }).getByRole('textbox').fill('1000');
      await page.getByRole('row', { name: '* Total Study Budget Amount' }).getByRole('textbox').fill('1200');
      await page.getByLabel('*Other Support').selectOption('N');
      await page.getByRole('button', { name: 'Save and Proceed' }).click();

      // Requested Funding page
      await page.locator('#requested_amount').fill('1000'); // third in the grid
      await page.locator('#category').selectOption('39557232'); //fills in sub category
      await page.locator('#sub_cat').selectOption(['39557248', '39557296', '39557240', '39557292', '39557244', '39557284', '39557286', '39557290', '39557288', '39557280', '39557274', '39557250', '39557256', '39557300', '39557300', '39557260', '39557254', '39557238', '39557298', '39557282', '39557246', '39557242']);
      await page.locator('#description').fill('materials');
      await page.getByRole('button', { name: 'Save and Proceed' }).click();

      // Attestation page
      await page.getByLabel('*The research proposal I am').getByLabel('Yes').check();
      await page.getByLabel('*I have reviewed and will').locator('span').filter({ hasText: 'Yes' }).click();
      // HIDDEN await page.getByLabel('* I have the capability and').getByLabel('Yes').check();
      // HIDDEN await page.getByLabel('* The trial will be executed').getByLabel('Yes').check();
      // HIDDEN  page.getByLabel('* I assume all of the responsibilities in my role as the Sponsor and Investigator per ICH GCP guidelines/Ethical Guidelines for Medical and Health Research Involving Human Subjects.', { exact: true }).getByLabel('Yes').check();
      await page.getByLabel('*I confirm that I would be').getByLabel('Yes').check();
      await page.getByLabel('* Has the institutional IRB').selectOption('N');
      await page.getByRole('button', { name: 'Save and Proceed' }).click();

    });


