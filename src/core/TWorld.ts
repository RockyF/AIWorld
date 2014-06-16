/**
 * Created by lenovo on 2014/6/16.
 */

///<reference path="../utils/HashMap.ts"/>
///<reference path="TContext.ts"/>
///<reference path="TDataObject.ts"/>

class TWorld{
	private _objectMap:HashMap;

	onUpdate:Function;

	constructor(){
		this._objectMap = new HashMap();

		TContext.getInstance().init(this._objectMap, null);
	}

	addDataObject(obj:TDataObject):void{
		this._objectMap.put(obj.id, obj);
	}

	removeDataObject(obj:TDataObject):void{
		this._objectMap.remove(obj.id);
	}

	removeDataObjectById(id:number):void{
		this._objectMap.remove(id);
	}

	update():void{
		this._objectMap.foreach(function(item:TDataObject):void{
			item.update();
		}, this);

		if(this.onUpdate){
			this.onUpdate(this._objectMap);
		}
	}
}