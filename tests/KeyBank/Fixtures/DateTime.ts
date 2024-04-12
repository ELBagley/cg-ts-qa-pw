export class DateHelper {

    public findDate(getDate: string) {

        if (getDate == "Today") {        
            let today = new Date()
            let todayString = ""
            todayString = today.setDate(today.getDate() + 7).toString()
            return todayString
        }
        else if (getDate == "Tomorrow"){
            let today = new Date()
            let tomorrow = new Date()
            let tomorrowString = ""
            tomorrowString = tomorrow.setDate(today.getDate() + 1).toString()
            return tomorrowString
        }
        else if (getDate == "OneWeekFromToday"){
            let today = new Date()
            var OneWeekFromToday = new Date()
            let OneWeekFromTodayString = ""
            OneWeekFromTodayString = OneWeekFromToday.setDate(today.getDate() + 7).toString()
            return OneWeekFromTodayString
        }
        /*
        else if (getDate == "OneWeekFromTodayPlusOneDay"){
            let today = new Date()
            let OneWeekFromToday = new Date()
            OneWeekFromToday.setDate(today.getDate() + 8)
            return OneWeekFromToday.toLocaleDateString()
        }       
        else if (getDate == "PreviousWeekFromToday"){
            let today = new Date()
            let PreviousWeekFromToday = new Date() 
            PreviousWeekFromToday.setDate(today.getDate() - 7)
            return PreviousWeekFromToday.toLocaleDateString()
        }
        else if (getDate == "SixDaysPriorFromToday"){
            let today = new Date()
            let SixDaysPriorFromToday = new Date()
            SixDaysPriorFromToday.setDate(today.getDate() - 6)
            return SixDaysPriorFromToday.toLocaleDateString()
        }
        */
    }
}
