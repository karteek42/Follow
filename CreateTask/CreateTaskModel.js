var activityIndicator=require("ui/activity-indicator");
var observable=require("data/observable");
var datePickerObj=require("ui/date-picker");
var timePickerObje=require("ui/time-picker");
var commonFunctions=require("~/commonFunctions");// JS file for common functions
var createTaskModel=new observable.Observable;
var date=commonFunctions.getCurDate();// For getting date and time in the current time zone
console.log("Date :"+date);


createTaskModel.createTask=function(){// yet to write the code
    console.log("taskName :: ",registrationModel.get("taskName"));
    console.log("category :: ",registrationModel.get("category"));
    console.log("datePicker :: ",registrationModel.get("datePicker"));
    console.log("assignee :: ",registrationModel.get("assignee"));  
}


createTaskModel.showDatePicker=function(){// after clicking on datetime text field this function will be called
console.log("showDetails ",createTaskModel.get("showDetails"));    
    if(createTaskModel.get("showDetails"))// if we are already showing datepicker and timepicker parent layout then hide it
    createTaskModel.set("showDetails",false);//hiding datepicker and timepicker parent layout
    else// if datepicker and timepicker parent layout is hidden then show it
    {

    datePickerObj.year=date.getFullYear();
    datePickerObj.month=date.getMonth();
    datePickerObj.date=date.getDate();
    
console.log("date full ",date);
console.log("date ",datePickerObj.date);
console.log("month ",datePickerObj.month);
console.log("year ",datePickerObj.year);

    createTaskModel.set("date",datePickerObj.date);// setting datepicker date as current date
    createTaskModel.set("month",datePickerObj.month);// setting datepicker month as current month
    createTaskModel.set("year",datePickerObj.year);// setting datepicker year as current year

    createTaskModel.set("minDate",new Date(datePickerObj.year,datePickerObj.month,datePickerObj.date));/*setting mindate to
                                                                                        display in datepicker as todaydate*/

    createTaskModel.set("showDetails",true);// display datepicker and timepicker parent layout
    createTaskModel.set("showDatePicker",true);// display datepicker in datepicker and timepicker parent layout
    }
}

createTaskModel.selectDate=function(){// after clicking on done button in datepicker and timepicker parent layout
    if(createTaskModel.get("showDatePicker"))// if datepicker is visible means we are clicking on done button for date
    {
     
    var curDate=createTaskModel.get("date");// get date from ui
    var month=createTaskModel.get("month");// get month from ui
    var year=createTaskModel.get("year");// get year from ui
 console.log("curDate ",curDate);
    var formattedDate=commonFunctions.formatDate(curDate,month,year);// calling custom method to format date for our requirement

 console.log("formattedDate ",formattedDate);
    createTaskModel.set("datePickerVal",formattedDate);// displaying date in the due date & time field
    createTaskModel.set("showDatePicker",false);// Hiding date picker
    createTaskModel.set("showTimePicker",true);// Displaying time picker
  console.log("hour ",date.getHours());
  console.log("minute ",date.getMinutes());
    createTaskModel.set("hour",date.getHours());// setting time picker time as current hour
    createTaskModel.set("minute",date.getMinutes());// setting time picker minutes as current minutes
    }
    else if(createTaskModel.get("showTimePicker"))// if timepicker is visible means we are clicking on done button for time
    {
    var hour=createTaskModel.get("hour");// get hours from ui
    var minute=createTaskModel.get("minute");// get minutes from ui
    var curFullDate=createTaskModel.get("datePickerVal");// get date from due date & time field in ui
    var dateTime=commonFunctions.formatTime(curFullDate,hour,minute); // formatting date and time according to our requirement
    createTaskModel.set("datePickerVal",dateTime);// displaying formatted date and time in the due date & time field 
    createTaskModel.set("showTimePicker",false);// Hiding time picker
    createTaskModel.set("showDetails",false);// Hiding datepicker and timepicker parent layout
    }
}

exports.createTaskModel=createTaskModel;