import { Page, expect } from "@playwright/test";

export class SubmissionSuccessful{

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    async selectReturnToHome(){
        await this.page.getByRole('link', { name: 'Return to Home Page' }).click();
    }
}
/*
await this.page.goto('https://sandbox.cybergrants.com/pls/cybergrants-sb/cc_application.process_ggpay_response?x_confirmation_code=NR38C38&x_uid=072D55E802C9BF1E9788B71641AA809975A1693532574A74877F24DF46A816D5AC759F035F3CAF2C68A698A7ADF18B05BC4EAF77081014F3CAFCEEF2CC9C9215D65AB056BFA3F247A4700696CDD0C737BC0E2868A354CF410694C9AA55D5B276&x_wcd=JTdCJTIyZ3JhbnRtYWtlcklEJTIyJTNBMTA3NjIlMkMlMjJwcmltYXJ5S2V5JTIyJTNBMzEyNDU0MzglMkMlMjJ0YWJsZU5hbWUlMjIlM0ElMjJlZ19yZXF1ZXN0JTIyJTJDJTIyaXBBZGRyZXNzJTIyJTNBJTIyMTMuMjQ4LjEwOC40MCUyMiUyQyUyMmNhcmRUeXBlJTIyJTNBJTIyRGlzY292ZXIlMjIlMkMlMjJhbW91bnQlMjIlM0ElMjIyNTAwJTIyJTJDJTIycGF5bWVudFBlcmlvZCUyMiUzQSUyMiUyMiUyQyUyMnNjaGVkdWxlSUQlMjIlM0ElMjIlMjIlMkMlMjJzdGF0dXMlMjIlM0ElMjJDT01QTEVURSUyMiUyQyUyMmFkZHJlc3MlMjIlM0ElMjIxMiUyME1haW4lMjBTdCUyMiUyQyUyMmNpdHklMjIlM0ElMjJBbmRvdmVyJTIyJTJDJTIyc3RhdGVfcHJvdmluY2UlMjIlM0ElMjJNQSUyMiUyQyUyMnppcCUyMiUzQSUyMjAxODEwJTIyJTJDJTIybmFtZU9uQ2FyZCUyMiUzQSUyMkVyaWNhJTIwQmFnbGV5JTIyJTJDJTIybGFzdDQlMjIlM0ElMjI5NDI0JTIyJTJDJTIyZXhwaXJhdGlvbiUyMiUzQSUyMjAzMjglMjIlMkMlMjJzdGFydERhdGUlMjIlM0ElMjIlMjIlMkMlMjJlbmREYXRlJTIyJTNBJTIyJTIyJTJDJTIyY3NyZiUyMiUzQSUyMjU3MTkxMTlFMjZDNkI5Q0NDMjJBMDMzNThDMDY0NzM2JTIyJTdE');
await this.page.getByRole('link', { name: 'Return to Home Page' }).click();
*/