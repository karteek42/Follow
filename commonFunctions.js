var commonFunctions=new Object();
function formatDate(date,month,year)
{
    month++;// since month will start from 0 in javascript incrementing month to display correct value
    month=month>10?month:"0"+month;// converting month into two digit format
    date=date>10?date:"0"+date;// converting date into two digit format
    console.log("date :"+date);
    console.log("month :"+month);
    console.log("year :"+year);
    var formattedDate=date+"-"+month+"-"+year;// formatting date into dd-MM-yyyy
    return formattedDate;
    
}
function getCurDate()
{
    var date=new Date();
    var timeOffset=date.getTimezoneOffset();
    date=new Date(date.getTime()+timeOffset*60000);
    console.log("timeOffset :"+timeOffset);
    return date;
}
function formatTime(curFullDate,hour,minute)
{
    hour=hour>10?hour:"0"+hour;
    minute=minute>10?minute:"0"+minute;
    var dateTime=curFullDate+" "+hour+":"+minute;// formatting date time into dd-MM-yyyy H:M
    return dateTime;
}
exports.formatDate=formatDate;
exports.getCurDate=getCurDate;
exports.formatTime=formatTime;
