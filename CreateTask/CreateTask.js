var vmModule=require("./CreateTaskModel");
function pageLoaded(args){
    var page=args.object;
    page.bindingContext=vmModule.createTaskModel;
}
exports.pageLoaded=pageLoaded;
