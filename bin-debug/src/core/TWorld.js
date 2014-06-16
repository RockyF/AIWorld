/**
* Created by lenovo on 2014/6/16.
*/
///<reference path="../utils/HashMap.ts"/>
///<reference path="TContext.ts"/>
///<reference path="TDataObject.ts"/>
var TWorld = (function () {
    function TWorld() {
        this._objectMap = new HashMap();

        TContext.getInstance().init(this._objectMap, null);
    }
    TWorld.prototype.addDataObject = function (obj) {
        this._objectMap.put(obj.id, obj);
    };

    TWorld.prototype.removeDataObject = function (obj) {
        this._objectMap.remove(obj.id);
    };

    TWorld.prototype.removeDataObjectById = function (id) {
        this._objectMap.remove(id);
    };

    TWorld.prototype.update = function () {
        this._objectMap.foreach(function (item) {
            item.update();
        }, this);

        if (this.onUpdate) {
            this.onUpdate(this._objectMap);
        }
    };
    return TWorld;
})();
