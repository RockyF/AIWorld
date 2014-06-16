/**
 * Created by lenovo on 2014/6/12.
 */

class Utils{
	static	foreach(arr:any, callback:Function, thisObj:Object):void{
		var tempDic:Object = {};
		for(var i = 0, len = arr.length; i < len; i++){
			tempDic[i] = arr[i];
		}

		for(var key in tempDic){
			if(!(callback.call(thisObj, tempDic[key]))){
				break;
			}
		}
	}

	static distance(x1:number, y1:number, x2:number, y2:number):number{
		return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
	}

	static injectProp(target:Object, data:Object = null):boolean{
		if(!data){
			return false;
		}

		var result = true;
		for(var key in data){
			target[key] = data[key];
		}
		return result;
	}

	static __getDefinitionByName__cache:Object = {};
	static getDefinitionByName(name:string):any{
		if(!name)
			return null;
		var definition:any = Utils.__getDefinitionByName__cache[name];
		if(definition){
			return definition;
		}
		var paths:Array<string> = name.split(".");
		var length:number = paths.length;
		definition = __global;
		for(var i:number=0;i<length;i++){
			var path:string = paths[i];
			definition = definition[path];
			if(!definition){
				return null;
			}
		}
		Utils.__getDefinitionByName__cache[name] = definition;
		return definition;
	}
}