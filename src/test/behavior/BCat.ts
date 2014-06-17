/**
 * Created by lenovo on 2014/6/16.
 */

///<reference path="../../core/TContext.ts"/>
///<reference path="../../utils/Vector2D.ts"/>

class BCat extends VeerBehavior{
	objectMap:HashMap;
	targetMouse:TDataObject;
	targetVector:Vector2D;

	changeInterval:number = 500;
	interval:number = 0;

	onCreate():void{
		this.objectMap = TContext.getInstance().objectMap;
		this.targetVector = new Vector2D(this.target.x, this.target.y);
	}
	onDestroy():void{

	}

	onUpdate():void{
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
	}

	public arrivedCallback():void{
		this.targetMouse.behavior["leaveAway"]();
		this.targetMouse = null;
	}

	chooseTargetMouse(force:boolean = false):void{
		if(force || !this.targetMouse){
			this.targetMouse = this.getNewMouse();
		}
		if(this.targetMouse){
			this.targetVector.x = this.targetMouse.x;
			this.targetVector.y = this.targetMouse.y;
		}
	}

	getNewMouse():TDataObject{
		while(true){
			var t = <TDataObject>(this.objectMap.randomGet());
			if(t.behavior != this && t != this.targetMouse){
				return t;
			}
		}
	}
}