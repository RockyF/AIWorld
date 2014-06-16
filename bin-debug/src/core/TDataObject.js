/**
* Created by lenovo on 2014/6/16.
*/
///<reference path="../utils/Utils.ts"/>
///<reference path="TBehavior.ts"/>
var TDataObject = (function () {
    function TDataObject() {
        this.id = TDataObject.ID_INK++;
    }
    TDataObject.create = function (data) {
        var instance = new TDataObject();
        Utils.injectProp(instance, data);

        return instance;
    };

    TDataObject.prototype.bindBehavior = function (behaviorName) {
        this.behaviorName = behaviorName;

        var def = Utils.getDefinitionByName(this.behaviorName);
        this.behavior = new def();
        this.behavior.target = this;
        this.behavior.onCreate();
    };

    TDataObject.prototype.destroy = function () {
        if (this.behavior) {
            this.behavior.onDestroy();
        }
    };

    TDataObject.prototype.update = function () {
        this.behavior.onUpdate();
    };
    TDataObject.ID_INK = 0;
    return TDataObject;
})();
