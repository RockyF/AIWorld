/**
 * Created by lenovo on 2014/6/18.
 */

class EgretInputDelegate extends TInputDelegate{
	target:egret.DisplayObject;

	constructor(target:egret.DisplayObject){
		super();

		this.target = target;
		this.target.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
		this.target.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
		this.target.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
	}

	private onTouchBegin(event:egret.TouchEvent):void{
		this.setMouseDown(true);
	}

	private onTouchEnd(event:egret.TouchEvent):void{
		this.setMouseDown(false);
	}

	private onMove(event:egret.TouchEvent):void{
		this.setMousePosition(event.stageX, event.stageY);
	}
}