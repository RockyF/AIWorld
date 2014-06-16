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
var Mouse = (function (_super) {
    __extends(Mouse, _super);
    function Mouse() {
        _super.call(this);
        var label = new egret.TextField();
        label.text = "吱";
        this.addChild(label);
    }
    return Mouse;
})(egret.Sprite);
