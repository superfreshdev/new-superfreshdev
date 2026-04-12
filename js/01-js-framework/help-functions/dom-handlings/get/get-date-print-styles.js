// console.log("🟨 get-date-print-styles.js")


/* ------------------------------------------------------------------------------- */
/* Get Year
/* > print the full year, eg. 2025
/* ------------------------------------------------------------------------------- */

function getYear() {

    return new Date().getFullYear();
}

/* ------------------------------------------------------------------------------- */
/* Get Month
/* > print the month nr ( 0-11 = 12 )
/* ------------------------------------------------------------------------------- */

function getMonth() {

    return ( new Date().getMonth() + 1);
}


/* ------------------------------------------------------------------------------- */
/* get Day
/* > print the day of month
/* ------------------------------------------------------------------------------- */

function getDay() {

    return new Date().getDate();
}


/* ------------------------------------------------------------------------------- */
/* Get English Suffix Day
/* > Day Index = 1=1st, 2=2nd, 3=3rd, 4=4th, 5=5th,...
/* ------------------------------------------------------------------------------- */

function get_english_suffix_day( day ) {

    switch( day ) {

        case 1:
            return "st"
        case 2:
           return "nd"
        case 3:
            return "rd"
        default:
            return "th"

    }
}

/* ------------------------------------------------------------------------------- */
/* Get English Short Month Name
/* > e.g 0=Jan, 1=Feb, 2=Mar, 4=Apr, ...
/* ------------------------------------------------------------------------------- */

function get_english_short_month_name( month ) {

    switch( month ) {

        case 0:
            return "Jan"
        case 1:
           return "Feb"
        case 2:
            return "Mar"
        case 3:
            return "Apr"
        case 4:
            return "May"
        case 5:
            return "Jun"
        case 6:
            return "Jul"
        case 7:
            return "Aug"
        case 8:
            return "Sep"
        case 9:
            return "Okt"
        case 10:
            return "Nov"
        case 11:
            return "Dec"

        default:
            return "-1"

    }
}

/* ------------------------------------------------------------------------------- */
/* Get Full Month Name and Short Year
/* > e.g January 25 ( means the year 2025)
/* ------------------------------------------------------------------------------- */

function get_full_MonthName_and_ShortYear( indexMonth, year ) {

    var strMonth = "";
    var strYear = year.toString();

    switch( indexMonth ) {

        case 0:
            strMonth = "January"
            break;
        case 1:
            strMonth = "February"
            break;
        case 2:
            strMonth = "March"
            break;
        case 3:
            strMonth = "April"
            break;
        case 4:
            strMonth = "May"
            break;
        case 5:
            strMonth = "June"
            break;
        case 6:
            strMonth = "July"
            break;
        case 7:
            strMonth = "August"
            break;
        case 8:
            strMonth = "September"
            break;
        case 9:
            strMonth = "October"
            break;
        case 10:
            strMonth = "November"
            break;
        case 11:
            strMonth = "December"
            break;

        default:
            strMonth = "-1"

    }

    // cut shot year in last 2 strings
    return strMonth + " " + strYear.substring(2,4);
}

/* ------------------------------------------------------------------------------- */
/* Get Full Date
/* > e.g DD.MM.YYYY
/* ------------------------------------------------------------------------------- */

function get_full_date() {

    var str_day = get_two_formatted_number_style( getDay() );
    var str_month = get_two_formatted_number_style( getMonth() ); ;
    var str_year = getYear();

    return str_day + "." + str_month + "." + str_year;

}
