var vmModule=require("./registrationModel");
function pageLoaded(args){
    var page=args.object;
    page.bindingContext=vmModule.registrationModel;
}
exports.pageLoaded=pageLoaded;