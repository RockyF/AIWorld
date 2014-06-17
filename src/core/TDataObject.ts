/**
 * Created by lenovo on 2014/6/16.
 */

///<reference path="../utils/Utils.ts"/>
///<reference path="TBehavior.ts"/>

class TDataObject{
	static ID_INK:number = 0;

	id:number;

	x:number;
	y:number;
	alpha:number;
	rotation:number;

	userData:Object;

	behavior:TBehavior;

	constructor(){
		this.id = TDataObject.ID_INK++;

	}

	bindBehavior(behavior:TBehavior):void{
		this.behavior = behavior;
		this.behavior.target = this;
		this.behavior.onCreate();
	}

	destroy():void{
		if(this.behavior){
			this.behavior.onDestroy();
		}
	}

	update():void{
		this.behavior.onUpdate();
	}
}