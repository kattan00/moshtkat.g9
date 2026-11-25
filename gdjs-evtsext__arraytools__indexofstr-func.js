
if (typeof gdjs.evtsExt__ArrayTools__IndexOfStr !== "undefined") {
  gdjs.evtsExt__ArrayTools__IndexOfStr.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ArrayTools__IndexOfStr = {};
gdjs.evtsExt__ArrayTools__IndexOfStr.idToCallbackMap = new Map();


gdjs.evtsExt__ArrayTools__IndexOfStr.userFunc0x19e8dc0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const str = eventsFunctionContext.getArgument("str");
const arr = runtimeScene
    .getVariables()
    .get(eventsFunctionContext.getArgument("array"))
    .getAllChildrenArray();

// Technically findIndex would be more suitable but it may be a bit too recent and unsupported by some browsers
eventsFunctionContext.returnValue = arr.indexOf(arr.find(variable => variable.getAsString() === str));

};
gdjs.evtsExt__ArrayTools__IndexOfStr.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ArrayTools__IndexOfStr.userFunc0x19e8dc0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__ArrayTools__IndexOfStr.func = function(runtimeScene, array, str, parentEventsFunctionContext) {
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
if (argName === "array") return array;
if (argName === "str") return str;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ArrayTools__IndexOfStr.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ArrayTools__IndexOfStr.registeredGdjsCallbacks = [];