/**
* Created by lenovo on 2014/6/16.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BMouse = (function (_super) {
    __extends(BMouse, _super);
    function BMouse() {
        _super.apply(this, arguments);
    }
    BMouse.prototype.leaveAway = function () {
        this.position = new Vector2D(Math.random() * 480, Math.random() * 800);
    };

    BMouse.prototype.onUpdate = function () {
        this.wander();
        this.update();
    };
    BMouse.prototype.onCreate = function () {
        this.maxSpeed = 3;
    };
    BMouse.prototype.onDestroy = function () {
    };
    return BMouse;
})(VeerBehavior);
