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
var AIDisplayObject = (function (_super) {
    __extends(AIDisplayObject, _super);
    function AIDisplayObject() {
        _super.call(this);

        this._face = new egret.Bitmap(RES.getRes("face"));
        this.addChild(this._face);
    }
    AIDisplayObject.prototype.update = function () {
        this.x = this._data.x;
        this.y = this._data.y;
        this.rotation = this._data.rotation;
        this.alpha = this._data.alpha;

        if (this._data.levelChanged) {
            this._data.levelChanged = false;
            this.reDraw();
        }
    };

    AIDisplayObject.prototype.setData = function (value) {
        this._data = value;
    };

    AIDisplayObject.prototype.getData = function () {
        return this._data;
    };

    AIDisplayObject.prototype.reDraw = function () {
        var r = this._data.level;
        this._face.scaleX = this._face.scaleY = 0.3;
        //this._face.scaleX = this._face.scaleY = 0.7 * 10 / r + 0.3;
        /*this._face.graphics.clear();
        this._face.graphics.lineStyle(2, Math.random() * 0xFFFFFF);
        this._face.graphics.drawCircle(0, 0, r);
        this._face.graphics.lineTo(0, -r + 1);
        this._face.graphics.lineTo(0, 0);*/
    };
    return AIDisplayObject;
})(egret.DisplayObjectContainer);
