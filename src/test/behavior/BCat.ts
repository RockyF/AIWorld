/**
 * Created by lenovo on 2014/6/16.
 */

///<reference path="../../core/TContext.ts"/>
///<reference path="../../utils/Vector2D.ts"/>

class BCat extends VeerBehavior{
	objectMap:HashMap;
	targetMouse:TDataObject;
	targetVector:Vector2D;

	onCreate():void{
		this.objectMap = TContext.getInstance().objectMap;
		this.targetVector = new Vector2D(this.target.x, this.target.y);
	}
	onDestroy():void{

	}

	onUpdate():void{
		this.chooseTargetMouse();
		this.arrive(this.targetVector);
		this.update();
	}

	chooseTargetMouse():void{
		if(!this.targetMouse){
			while(true){
				this.targetMouse = <TDataObject>(this.objectMap.randomGet());
				if(this.targetMouse.behavior != this){
					break;
				}
			}
		}
		if(this.targetMouse){
			this.targetVector.x = this.targetMouse.x;
			this.targetVector.y = this.targetMouse.y;
		}
	}
}