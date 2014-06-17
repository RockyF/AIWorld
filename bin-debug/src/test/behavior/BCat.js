/**
* Created by lenovo on 2014/6/16.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="../../utils/Vector2D.ts"/>
var BCat = (function (_super) {
    __extends(BCat, _super);
    function BCat() {
        _super.apply(this, arguments);
        this.changeInterval = 500;
        this.interval = 0;
    }
    BCat.prototype.onCreate = function () {
        this.objectMap = this.world.objectMap;
        this.targetVector = new Vector2D(this.target.x, this.target.y);
    };
    BCat.prototype.onDestroy = function () {
    };

    BCat.prototype.onUpdate = function () {
        /*this.interval ++;
        console.log(this.interval);
        if(this.interval >= this.changeInterval){
        this.interval = 0;
        this.chooseTargetMouse(true);
        }else{
        this.chooseTargetMouse();
        }*/
        this.chooseTargetMouse(Math.random() < 0.01);

        this.arrive(this.targetVector);
        this.update();
    };

    BCat.prototype.arrivedCallback = function () {
        this.targetMouse.behavior["leaveAway"]();
        this.targetMouse = null;
    };

    BCat.prototype.chooseTargetMouse = function (force) {
        if (typeof force === "undefined") { force = false; }
        if (force || !this.targetMouse) {
            this.targetMouse = this.getNewMouse();
        }
        if (this.targetMouse) {
            this.targetVector.x = this.targetMouse.x;
            this.targetVector.y = this.targetMouse.y;
        }
    };

    BCat.prototype.getNewMouse = function () {
        while (true) {
            var t = (this.objectMap.randomGet());
            if (t.behavior != this && t != this.targetMouse) {
                return t;
            }
        }
    };
    return BCat;
})(VeerBehavior);
