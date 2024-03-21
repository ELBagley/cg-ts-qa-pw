export class DateHelper {
    public static today (){
        let today = new Date()
        return today.toString()
    }
    public static tomorrow(){
        let today = new Date()
        let tomorrow = new Date(); 
        tomorrow.setDate(today.getDate() + 1)
        return tomorrow.toString()
    }
    public static OneWeekFromToday(){
        let today = new Date()
        let OneWeekFromToday = new Date('dd/mm/yyyy')
        OneWeekFromToday.setDate(today.getDate() -1)
        return OneWeekFromToday.toString()
    }
    public static PreviousWeekFromToday(){
        let today = new Date()
        let PreviousWeekFromToday = new Date('dd/mm/yyyy') 
        PreviousWeekFromToday.setDate(today.getDate() - 7)
        return PreviousWeekFromToday.toString()
    }
    public static SixDaysPriorFromToday(){
        let today = new Date()
        let SixDaysPriorFromToday = new Date('dd/mm/yyyy')
        SixDaysPriorFromToday.setDate(today.getDate() - 6)
        return SixDaysPriorFromToday.toString()
    }
}
