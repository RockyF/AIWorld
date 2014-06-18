Hughes
======

A web game framework<br/>
这是一个web游戏框架，适用于单位对象的游戏。
框架的结构很简单，core为核心代码，目前只有5个类：
*   TWorld.ts 游戏世界，用作所有数据对象的管理。
*   TDataObject.ts 数据对象，存储基本的数据。
*   TBehavior.ts 对象行为基类，每个数据对象会绑定一个行为对象，单位的所有行为都有行为对象来实现。
*   TInput.ts 外界输入类，比如鼠标和键盘的数据集中类
*   TInputDelegate.ts 为了解耦合，使用该委托类来分离输入动作的实现

------
这个框架在一定程度上模仿了box2D，整个游戏世界由数据驱动，通过绑定userData来间接驱动视图，可以看到test中有代码：

    onUpdate=(objectMap:HashMap):void=>{
        objectMap.foreach(function(item):void{
    		item.userData.x = item.x;
    		item.userData.y = item.y;
    		item.userData.rotation = item.rotation;
    	}, this);
    };
    
最后给整个游戏世界一个定时器驱动：

    clock=():void=>{
    	this.world.update();
    };
    
代码里还有一个test，借用了《AS3动画高级教程》中的转向行为中的机制，写了个demo，demo的视图使用了[egret框架](https://github.com/egret-labs/egret-core "https://github.com/egret-labs/egret-core")