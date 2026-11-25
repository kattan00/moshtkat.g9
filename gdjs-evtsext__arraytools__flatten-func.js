
if (typeof gdjs.evtsExt__ArrayTools__Flatten !== "undefined") {
  gdjs.evtsExt__ArrayTools__Flatten.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ArrayTools__Flatten = {};
gdjs.evtsExt__ArrayTools__Flatten.idToCallbackMap = new Map();


gdjs.evtsExt__ArrayTools__Flatten.userFunc0x19e3f10 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const arr = runtimeScene.getVariables().get(eventsFunctionContext.getArgument("arr"));
// Cast to array to ensure getAllChildrenArray returns the real array
arr.castTo("array");
const a = arr.getAllChildrenArray();
const deep = eventsFunctionContext.getArgument("deep");

for (let i = 0; i < a.length; i++)
    if (a[i].getType() === "array") {
        const b = a[i].getAllChildrenArray();
        // At the position of the array (i), remove 1 element (the array), 
        // and insert elements of b (the contents of the array) in-place of the array.
        a.splice(i, 1, ...b);
        // Skip over the elements that were just added as we are flattening only 1 level deep 
        if(!deep) i += b.length;
        // If deep, the current element has been replaced with another, we need to recheck it on next iteration.
        // If not deep, the current element is now the one after the array elements and needs to be checked too.
        // In both case, decreasing by 1 is necessary.
        i--;
    }

};
gdjs.evtsExt__ArrayTools__Flatten.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ArrayTools__Flatten.userFunc0x19e3f10(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__ArrayTools__Flatten.func = function(runtimeScene, arr, deep, parentEventsFunctionContext) {
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
if (argName === "deep") return deep;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ArrayTools__Flatten.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__ArrayTools__Flatten.registeredGdjsCallbacks = [];