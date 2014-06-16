/**
* Created by lenovo on 2014/6/16.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="../../egret.d.ts"/>
///<reference path="../../utils/HashMap.ts"/>
///<reference path="../../core/TWorld.ts"/>
///<reference path="../../core/TDataObject.ts"/>
///<reference path="Cat.ts"/>
///<reference path="Mouse.ts"/>
var Ground = (function (_super) {
    __extends(Ground, _super);
    function Ground() {
        var _this = this;
        _super.call(this);
        this.onUpdate = function (objectMap) {
            objectMap.foreach(function (item) {
                item.userData.x = item.x;
                item.userData.y = item.y;
            }, _this);
        };
        this.clock = function () {
            _this.world.update();
        };

        this.init();
    }
    Ground.prototype.init = function () {
        this.world = new TWorld();
        this.world.onUpdate = this.onUpdate;

        var cat = new Cat();
        var dataObject = TDataObject.create({ x: 100, y: 100, userData: cat });
        dataObject.bindBehavior("BCat");
        this.addChild(cat);
        this.world.addDataObject(dataObject);

        var mouse = new Mouse();
        dataObject = TDataObject.create({ x: 400, y: 400, userData: mouse });
        dataObject.bindBehavior("BMouse");
        this.addChild(mouse);
        this.world.addDataObject(dataObject);

        setInterval(this.clock, 10);
    };
    return Ground;
})(egret.Sprite);
