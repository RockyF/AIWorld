/**
 * Created by lenovo on 2014/6/16.
 */

///<reference path="../utils/HashMap.ts"/>
///<reference path="TDataObject.ts"/>

class TWorld{
	objectMap:HashMap;
	private _input:TInput;

	width:number;
	height:number;
	onUpdate:Function;

	constructor(width:number, height:number){
		this.width = width;
		this.height = height;
		this.objectMap = new HashMap();
		this._input = new TInput();
	}

	addDataObject(obj:TDataObject):void{
		this.objectMap.put(obj.id, obj);
	}

	removeDataObject(obj:TDataObject):void{
		this.objectMap.remove(obj.id);
	}

	removeDataObjectById(id:number):void{
		this.objectMap.remove(id);
	}

	update():void{
		this.objectMap.foreach(function(item:TDataObject):void{
			item.update();
		}, this);

		if(this.onUpdate){
			this.onUpdate(this.objectMap);
		}
	}

	createDataObject(data:Object):TDataObject{
		var instance:TDataObject = new TDataObject();
		Utils.injectProp(instance, data);

		return instance;
	}

	createBehavior(behaviorName:string):TBehavior{
		var def = Utils.getDefinitionByName(behaviorName);
		var behavior = new def();
		behavior.world = this;
		behavior.input = this._input;

		return behavior;
	}
}