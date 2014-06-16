/**
* Created by lenovo on 2014/6/12.
*/
var Utils = (function () {
    function Utils() {
    }
    Utils.foreach = function (arr, callback, thisObj) {
        var tempDic = {};
        for (var i = 0, len = arr.length; i < len; i++) {
            tempDic[i] = arr[i];
        }

        for (var key in tempDic) {
            if (!(callback.call(thisObj, tempDic[key]))) {
                break;
            }
        }
    };

    Utils.distance = function (x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    };

    Utils.injectProp = function (target, data) {
        if (typeof data === "undefined") { data = null; }
        if (!data) {
            return false;
        }

        var result = true;
        for (var key in data) {
            target[key] = data[key];
        }
        return result;
    };

    Utils.getDefinitionByName = function (name) {
        if (!name)
            return null;
        var definition = Utils.__getDefinitionByName__cache[name];
        if (definition) {
            return definition;
        }
        var paths = name.split(".");
        var length = paths.length;
        definition = __global;
        for (var i = 0; i < length; i++) {
            var path = paths[i];
            definition = definition[path];
            if (!definition) {
                return null;
            }
        }
        Utils.__getDefinitionByName__cache[name] = definition;
        return definition;
    };
    Utils.__getDefinitionByName__cache = {};
    return Utils;
})();
