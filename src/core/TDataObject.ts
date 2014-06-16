/**
 * Created by lenovo on 2014/6/16.
 */

///<reference path="../utils/Utils.ts"/>
///<reference path="TBehavior.ts"/>

class TDataObject{
	static create(data:Object){
		var instance:TDataObject = new TDataObject();
		Utils.injectProp(instance, data);
		
		return instance;
	}

	static ID_INK:number = 0;

	id:number;

	x:number;
	y:number;
	alpha:number;
	rotation:number;

	userData:Object;

	behaviorName:string;
	behavior:TBehavior;

	constructor(){
		this.id = TDataObject.ID_INK++;

	}

	bindBehavior(behaviorName:string):void{
		this.behaviorName = behaviorName;

		var def = Utils.getDefinitionByName(this.behaviorName);
		this.behavior = new def();
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