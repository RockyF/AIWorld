/**
 * Created by lenovo on 2014/6/16.
 */

///<reference path="../../egret.d.ts"/>

class Mouse extends egret.Sprite{
	constructor(){
		super();
		var label:egret.TextField = new egret.TextField();
		label.text = "吱";
		this.addChild(label);
	}
}