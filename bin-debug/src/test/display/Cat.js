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
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        _super.call(this);
        var imgFace = new egret.Bitmap(RES.getRes("cat_face"));
        imgFace.x = -imgFace.width / 2;
        imgFace.y = -imgFace.height / 2;
        this.addChild(imgFace);
    }
    return Cat;
})(egret.Sprite);
