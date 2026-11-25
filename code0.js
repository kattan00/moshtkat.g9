gdjs.introCode = {};
gdjs.introCode.localVariables = [];
gdjs.introCode.idToCallbackMap = new Map();
gdjs.introCode.GDNewObjectObjects1= [];
gdjs.introCode.GDNewObjectObjects2= [];
gdjs.introCode.GDNewObject2Objects1= [];
gdjs.introCode.GDNewObject2Objects2= [];
gdjs.introCode.GDNewObject3Objects1= [];
gdjs.introCode.GDNewObject3Objects2= [];
gdjs.introCode.GDNewObject4Objects1= [];
gdjs.introCode.GDNewObject4Objects2= [];


gdjs.introCode.mapOfGDgdjs_9546introCode_9546GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.introCode.GDNewObject2Objects1});
gdjs.introCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.introCode.GDNewObject2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.introCode.mapOfGDgdjs_9546introCode_9546GDNewObject2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "the game", false);
}
}

}


};gdjs.introCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.introCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.introCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.introCode.GDNewObject2Objects1[i].rotate(60, runtimeScene);
}
}
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.introCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introCode.GDNewObjectObjects1.length = 0;
gdjs.introCode.GDNewObjectObjects2.length = 0;
gdjs.introCode.GDNewObject2Objects1.length = 0;
gdjs.introCode.GDNewObject2Objects2.length = 0;
gdjs.introCode.GDNewObject3Objects1.length = 0;
gdjs.introCode.GDNewObject3Objects2.length = 0;
gdjs.introCode.GDNewObject4Objects1.length = 0;
gdjs.introCode.GDNewObject4Objects2.length = 0;

gdjs.introCode.eventsList1(runtimeScene);
gdjs.introCode.GDNewObjectObjects1.length = 0;
gdjs.introCode.GDNewObjectObjects2.length = 0;
gdjs.introCode.GDNewObject2Objects1.length = 0;
gdjs.introCode.GDNewObject2Objects2.length = 0;
gdjs.introCode.GDNewObject3Objects1.length = 0;
gdjs.introCode.GDNewObject3Objects2.length = 0;
gdjs.introCode.GDNewObject4Objects1.length = 0;
gdjs.introCode.GDNewObject4Objects2.length = 0;


return;

}

gdjs['introCode'] = gdjs.introCode;
