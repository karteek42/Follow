var observable=require("data/observable");
var frameModule=require("ui/frame");
//var topmost=frameModule.topmost();
var registrationModel=new observable.Observable;

registrationModel.Register=function(){
    console.log("userName :: ",registrationModel.get("userName"));
    console.log("password :: ",registrationModel.get("password"));
    console.log("Contactnumber :: ",registrationModel.get("contactNumber"));
    frameModule.topmost().navigate("CreateTask/CreateTask");
}
exports.registrationModel=registrationModel;