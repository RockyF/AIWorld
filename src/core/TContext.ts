/**
 * Created by lenovo on 2014/6/16.
 */

class TContext{
	private static _instance:TContext;
	public static getInstance():TContext{
		if(TContext._instance == undefined){
			TContext._instance = new TContext();
		}
		return TContext._instance;
	}

	objectMap:HashMap;
	input:Object;
	init(objectMap:HashMap, input:Object):void{
		this.objectMap = objectMap;
		this.input = input;
	}
}