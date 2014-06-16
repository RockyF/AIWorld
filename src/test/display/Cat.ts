/**
 * Created by lenovo on 2014/6/16.
 */

///<reference path="../../egret.d.ts"/>

class Cat extends egret.Sprite{
	constructor(){
		super();
		var label:egret.TextField = new egret.TextField();
		label.text = "喵";
		this.addChild(label);
	}
}