/**
 * Created by lenovo on 2014/6/16.
 */

class HashMap{
	private _length:number;
	private obj:any;

	constructor(){
		this.clear();
	}

	containsKey(key:any):boolean{
		return key in this.obj;
	}

	containsValue(value:any):boolean{
		for(var key in this.obj){
			if(this.obj[key] == value){
				return true;
			}
		}
		return false;
	}

	put(key:any, value:any):void{
		if(!this.containsKey(key)){
			this.obj[key] = value;
		}
	}

	get(key:any):any{
		return this.containsKey(key) ? this.obj[key] : null;
	}

	remove(key:any):any{
		if(this.containsKey(key)){
			var value = this.obj;
			delete this.obj[key];
			length--;

			return value;
		}
		return null;
	}

	foreach(callback:Function, thisOjb:any):void{
		for(var key in this.obj){
			callback.call(thisOjb, this.obj[key]);
		}
	}

	randomGet():any{
		var values = this.valueSet;
		return values[Math.floor(Math.random() * values.length)];
	}

	get keySet():any{
		var keys = [];
		for(var key in this.obj){
			keys.push(key);
		}

		return keys;
	}

	get valueSet():any{
		var values = [];
		for(var key in this.obj){
			values.push(this.obj[key]);
		}

		return values;
	}

	get size():number{
		return this._length;
	}

	clear():void{
		this._length = 0;
		this.obj = {};
	}
}