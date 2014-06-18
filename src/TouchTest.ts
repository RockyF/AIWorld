/**
 * Created by lenovo on 2014/6/18.
 */

class TouchTest extends egret.Sprite{
	constructor(){
		super();

		this.width = 400;
		this.height = 400;

		this.touchEnabled = true;

		var lab:egret.TextField = new egret.TextField();
		lab.text = "asdf";
		this.addChild(lab);

		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
	}

	private onTap(event:egret.TouchEvent):void{
		console.log("onTap.");
	}
}