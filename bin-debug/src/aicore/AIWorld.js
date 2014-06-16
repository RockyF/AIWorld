/**
* Created by lenovo on 2014/6/12.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="../egret.d.ts"/>
///<reference path="../utils/Utils.ts"/>
var AIWorld = (function (_super) {
    __extends(AIWorld, _super);
    function AIWorld() {
        _super.call(this);
        this.playing = false;
        this.objects = [];
    }
    AIWorld.prototype.start = function () {
        this.playing = true;
    };

    AIWorld.prototype.stop = function () {
        this.playing = false;
    };

    AIWorld.prototype.clock = function () {
        if (this.playing) {
            this.update();
        }
    };

    AIWorld.prototype.addToWorld = function (data, defName) {
        var clazz = egret.getDefinitionByName(defName);
        var instance = new clazz();
        instance.setData(data);
        instance.x = data.x;
        instance.y = data.y;
        this.addChild(instance);
        data.userData = instance;
        data.world = this;
        this.objects.push(data);
    };

    AIWorld.prototype.removeFromWorld = function (data) {
        this.removeChild((data.userData));
        var index = this.objects.indexOf(data);
        if (index >= 0) {
            this.objects.splice(data, 1);
        }
    };

    AIWorld.prototype.getObjectsInRange = function (object, range) {
        var result = [];
        Utils.foreach(this.objects, function (item) {
            if (object == item) {
                return true;
            }
            var distance = Utils.distance(object.x, object.y, item.x, item.y);
            if (distance <= range && object.level >= item.level) {
                result.push(item);
            }
            return true;
        }, this);

        return result;
    };

    AIWorld.prototype.getObjectRandom = function (self, inAutoAttackRange) {
        var arr;
        if (inAutoAttackRange) {
            arr = this.getObjectsInRange(self, self.autoAttackRange);
        } else {
            arr = this.objects;
        }
        var index = Math.floor(Math.random() * arr.length);
        return arr[index];
    };

    AIWorld.prototype.update = function () {
        Utils.foreach(this.objects, function (item) {
            if (!item) {
                console.log("error");
            }
            item.update();
            return true;
        }, this);
    };
    return AIWorld;
})(egret.DisplayObjectContainer);
