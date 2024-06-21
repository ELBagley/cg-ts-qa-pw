export class DateHelper {

   public date_TO_String(date_Object: Date): string {
        // get the year, month, date, hours, and minutes seprately and append to the string.
        let date_String: string =
            (date_Object.getMonth() + 1) + "/" +
            date_Object.getDate() + "/" +
            date_Object.getFullYear()
        return date_String;
      }

    public findDate(getDate: string) {

        if (getDate == "Today") {        
            let today: Date = new Date()
            //let todayString: string = ""
            //todayString = today.setDate(today.getDate() + 7)
            return this.date_TO_String(today)
        }
        else if (getDate == "Tomorrow"){
            let today = new Date()
            let tomorrow = new Date()
            tomorrow.setDate(today.getDate() + 1)
            return this.date_TO_String(tomorrow)
        }
        else if (getDate == "OneWeekFromToday"){
            let today = new Date()
            var OneWeekFromToday = new Date()
            OneWeekFromToday.setDate(today.getDate() + 7).toLocaleString('en-US')
            return this.date_TO_String(OneWeekFromToday)
        }
        else if (getDate == "OneWeekFromTodayPlusOneDay"){
            let today = new Date()
            let OneWeekFromToday = new Date()
            OneWeekFromToday.setDate(today.getDate() + 8).toLocaleString('en-US')
            return this.date_TO_String(OneWeekFromToday)
        }       
        else if (getDate == "PreviousWeekFromToday"){
            let today = new Date()
            let PreviousWeekFromToday = new Date() 
            PreviousWeekFromToday.setDate(today.getDate() - 7).toLocaleString('en-US')
            return this.date_TO_String(PreviousWeekFromToday)
        }
        else if (getDate == "SixDaysPriorFromToday"){
            let today = new Date()
            let SixDaysPriorFromToday = new Date()
            SixDaysPriorFromToday.setDate(today.getDate() - 6).toLocaleString('en-US')
            return this.date_TO_String(SixDaysPriorFromToday)
        }
        else if (getDate == "OneMonthPriorFromToday"){
            let today = new Date()
            let OneMonthPriorFromToday = new Date()
            OneMonthPriorFromToday.setDate(today.getDate() - 30).toLocaleString('en-US')
            return this.date_TO_String(OneMonthPriorFromToday)
        }
    }
}
