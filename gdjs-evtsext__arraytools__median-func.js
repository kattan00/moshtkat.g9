
if (typeof gdjs.evtsExt__ArrayTools__Median !== "undefined") {
  gdjs.evtsExt__ArrayTools__Median.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ArrayTools__Median = {};
gdjs.evtsExt__ArrayTools__Median.idToCallbackMap = new Map();


gdjs.evtsExt__ArrayTools__Median.userFunc0x1a5d070 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const arr = runtimeScene.getVariables().get("__ArrayTools_tmp").getAllChildrenArray();
const i = arr.length / 2;
eventsFunctionContext.returnValue = 
    i % 1 == 0 
        ? (arr[i - 1].getAsNumber() + arr[i].getAsNumber()) / 2 
        : arr[Math.floor(i)].getAsNumber();

};
gdjs.evtsExt__ArrayTools__Median.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__ArrayTools__Slice.func(runtimeScene, "" + eventsFunctionContext.getArgument("arr"), "__ArrayTools_tmp", 0, 0, eventsFunctionContext);
}
{gdjs.evtsExt__ArrayTools__Sort.func(runtimeScene, "__ArrayTools_tmp", eventsFunctionContext);
}
}

}


{


gdjs.evtsExt__ArrayTools__Median.userFunc0x1a5d070(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__ArrayTools__Median.func = function(runtimeScene, arr, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ArrayTools"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ArrayTools"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "arr") return arr;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ArrayTools__Median.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ArrayTools__Median.registeredGdjsCallbacks = [];