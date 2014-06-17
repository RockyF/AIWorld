/**
* Created by lenovo on 2014/6/16.
*/
///<reference path="../utils/Utils.ts"/>
///<reference path="TBehavior.ts"/>
var TDataObject = (function () {
    function TDataObject() {
        this.id = TDataObject.ID_INK++;
    }
    TDataObject.prototype.bindBehavior = function (behavior) {
        this.behavior = behavior;
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
