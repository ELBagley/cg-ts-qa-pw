import {test as base } from '@playwright/test'
import { extPageManager } from '../PageObjects/UO_regular/extPageManager'

export type TestOptions = {
    pageManager: extPageManager
}
export const test = base.extend<TestOptions>({
    pageManager: async({page}, use) =>{
        const pm = new extPageManager(page)
        await use(pm)
    }
})