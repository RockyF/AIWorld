/**
 * Created by lenovo on 2014/6/16.
 */

///<reference path="../../egret.d.ts"/>
///<reference path="../../utils/HashMap.ts"/>
///<reference path="../../core/TWorld.ts"/>
///<reference path="../../core/TDataObject.ts"/>
///<reference path="Cat.ts"/>
///<reference path="Mouse.ts"/>

class Ground extends egret.Sprite{
	world:TWorld;

	constructor(){
		super();

		this.init();
	}

	init():void{
		this.world = new TWorld();
		this.world.onUpdate = this.onUpdate;

		var cat:Cat = new Cat();
		var dataObject = TDataObject.create({x:100, y:100, userData:cat});
		dataObject.bindBehavior("BCat");
		this.addChild(cat);
		this.world.addDataObject(dataObject);

		var mouse:Mouse = new Mouse();
		dataObject = TDataObject.create({x:400, y:400, userData:mouse});
		dataObject.bindBehavior("BMouse");
		this.addChild(mouse);
		this.world.addDataObject(dataObject);

		setInterval(this.clock, 10);
	}

	onUpdate=(objectMap:HashMap):void=>{
		objectMap.foreach(function(item):void{
			item.userData.x = item.x;
			item.userData.y = item.y;
		}, this);
	};

	clock=():void=>{
		this.world.update();
	};
}
