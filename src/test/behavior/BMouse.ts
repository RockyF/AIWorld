/**
 * Created by lenovo on 2014/6/16.
 */

class BMouse extends VeerBehavior{
	leaveAway():void{
		this.position = new Vector2D(Math.random() * this.world.width, Math.random() * this.world.height);
	}

	onUpdate():void{
		this.wander();
		this.update();
	}
	onCreate():void{
		this.maxSpeed = 3;
	}
	onDestroy():void{

	}
}