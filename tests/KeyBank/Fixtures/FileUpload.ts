export class uploadFile {

    public createURL(requestID: any, proposalType: string ): string {
        let firstPart = "https://sandbox.cybergrants.com/pls/cybergrants-sb/upload.entry?x_gm_id=10762&x_ut=DONOR&x_custom_field_id=2848544&x_key="
        let URLToUse = firstPart + requestID + "&x_parent_table_name=eg_request&x_proposal_type_id=" + proposalType + "&x_section_id=1868070&x_internal_flag=N&x_style_id=&x_invitation_id=&x_language_code=en-US"
        //requestKey = "31322250&"
        //x_parent_table_name=eg_request&
        //x_proposal_type_id=97538&
        //x_section_id=1868070&x_internal_flag=N&x_style_id=&x_invitation_id=&x_language_code=en-US
        return URLToUse
    }
}