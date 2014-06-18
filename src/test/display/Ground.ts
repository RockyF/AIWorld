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
	bg:egret.Bitmap;

	constructor(){
		super();

		this.init();
	}

	init():void{
		this.bg = new egret.Bitmap(RES.getRes("bg"));
		this.bg.width = 480;
		this.bg.height = 800;
		this.addChild(this.bg);

		this.world = new TWorld(480, 600);
		var inputDelegate = new EgretInputDelegate(this);
		this.world.setInputDelegate(inputDelegate);
		this.world.onUpdate = this.onUpdate;

		for(var i = 0; i < 10;i ++){
			var mouse:Mouse = new Mouse();
			dataObject = this.world.createDataObject({x:Math.random() * 480, y:Math.random() * 800, userData:mouse});
			dataObject.bindBehavior(this.world.createBehavior("BMouse"));
			this.addChild(mouse);
			this.world.addDataObject(dataObject);
		}

		var cat:Cat = new Cat();
		var dataObject = this.world.createDataObject({x:100, y:100, userData:cat});
		dataObject.bindBehavior(this.world.createBehavior("BCat"));
		this.addChild(cat);
		this.world.addDataObject(dataObject);

		setInterval(this.clock, 10);

		this.touchEnabled = true;
	}

	onUpdate=(objectMap:HashMap):void=>{
		objectMap.foreach(function(item):void{
			item.userData.x = item.x;
			item.userData.y = item.y;
			item.userData.rotation = item.rotation;
		}, this);
	};

	clock=():void=>{
		this.world.update();
	};
}
