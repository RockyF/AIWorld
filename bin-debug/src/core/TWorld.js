/**
* Created by lenovo on 2014/6/16.
*/
///<reference path="../utils/HashMap.ts"/>
///<reference path="TDataObject.ts"/>
var TWorld = (function () {
    function TWorld(width, height) {
        this.width = width;
        this.height = height;
        this.objectMap = new HashMap();
        this._input = new TInput();
    }
    TWorld.prototype.addDataObject = function (obj) {
        this.objectMap.put(obj.id, obj);
    };

    TWorld.prototype.removeDataObject = function (obj) {
        this.objectMap.remove(obj.id);
    };

    TWorld.prototype.removeDataObjectById = function (id) {
        this.objectMap.remove(id);
    };

    TWorld.prototype.update = function () {
        this.objectMap.foreach(function (item) {
            item.update();
        }, this);

        if (this.onUpdate) {
            this.onUpdate(this.objectMap);
        }
    };

    TWorld.prototype.createDataObject = function (data) {
        var instance = new TDataObject();
        Utils.injectProp(instance, data);

        return instance;
    };

    TWorld.prototype.createBehavior = function (behaviorName) {
        var def = Utils.getDefinitionByName(behaviorName);
        var behavior = new def();
        behavior.world = this;
        behavior.input = this._input;

        return behavior;
    };
    return TWorld;
})();
