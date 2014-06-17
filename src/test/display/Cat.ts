/**
 * Created by lenovo on 2014/6/16.
 */

///<reference path="../../egret.d.ts"/>

class Cat extends egret.Sprite{
	constructor(){
		super();
		var imgFace:egret.Bitmap = new egret.Bitmap(RES.getRes("cat_face"));
		imgFace.x = - imgFace.width / 2;
		imgFace.y = - imgFace.height / 2;
		this.addChild(imgFace);
	}
}