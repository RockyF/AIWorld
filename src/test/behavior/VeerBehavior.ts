/**
 * Created by lenovo on 2014/6/16.
 */

///<reference path="../../egret.d.ts"/>
///<reference path="../../core/TBehavior.ts"/>

class VeerBehavior extends TBehavior{
	// potential edge behaviors
	public static WRAP:string = "wrap";
	public static BOUNCE:string = "bounce";

	public _edgeBehavior:string = VeerBehavior.WRAP;
	public _mass:number = 1.0;
	public _maxSpeed:number = 10;
	public _position:Vector2D;
	public _velocity:Vector2D;

	private _maxForce:number = 1;
	private _steeringForce:Vector2D;
	private _arrivalThreshold:number = 100;

	private stageWidth:number = 480;
	private stageHeight:number = 800;

	constructor(){
		super();

		this._position = new Vector2D();
		this._velocity = new Vector2D();
		this._steeringForce = new Vector2D();
	}

	public update():void {
		this._steeringForce.truncate(this._maxForce);
		this._steeringForce = this._steeringForce.divide(this._mass);
		this._velocity = this._velocity.add(this._steeringForce);
		this._steeringForce = new Vector2D();

		this._velocity.truncate(this._maxSpeed);
		this._position = this._position.add(this._velocity);
		if (this._edgeBehavior == VeerBehavior.WRAP) {
			this.wrap();
		}
		else if (this._edgeBehavior == VeerBehavior.BOUNCE) {
			this.bounce();
		}

		this.position = this._position;
		this.target.rotation = this._velocity.angle * 180 / Math.PI;
	}

	private bounce():void {
		if (this.position.x > this.stageWidth) {
			this.position.x = this.stageWidth;
			this.velocity.x *= -1;
		}
		else if (this.position.x < 0) {
			this.position.x = 0;
			this.velocity.x *= -1;
		}
		if (this.position.y > this.stageHeight) {
			this.position.y = this.stageHeight;
			this.velocity.y *= -1;
		}
		else if (this.position.y < 0) {
			this.position.y = 0;
			this.velocity.y *= -1;
		}
	}

	private wrap():void {
		if (this.position.x > this.stageWidth) this.position.x = 0;
		if (this.position.x < 0) this.position.x = this.stageWidth;
		if (this.position.y > this.stageHeight) this.position.y = 0;
		if (this.position.y < 0) this.position.y = this.stageHeight;
	}

	public set edgeBehavior(value:string) {
		this._edgeBehavior = value;
	}

	public get edgeBehavior():string {
		return this._edgeBehavior;
	}

	public set mass(value:number) {
		this._mass = value;
	}

	public get mass():number {
		return this._mass;
	}

	public set maxSpeed(value:number) {
		this._maxSpeed = value;
	}

	public get maxSpeed():number {
		return this._maxSpeed;
	}

	public set position(value:Vector2D) {
		this._position = value;

		this.target.x = this._position.x;
		this.target.y = this._position.y;
	}

	public get position():Vector2D {
		return this._position;
	}

	public set velocity(value:Vector2D) {
		this._velocity = value;
	}

	public get velocity():Vector2D {
		return this._velocity;
	}

	public set maxForce(value:number) {
		this._maxForce = value;
	}

	public get maxForce():number {
		return this._maxForce;
	}

	public seek(target:Vector2D):void {
		var desiredVelocity:Vector2D = target.subtract(this._position);
		desiredVelocity.normalize();
		desiredVelocity = desiredVelocity.multiply(this._maxSpeed);
		var force:Vector2D = desiredVelocity.subtract(this._velocity);
		this._steeringForce = this._steeringForce.add(force);
	}

	public flee(target:Vector2D):void {
		var desiredVelocity:Vector2D = target.subtract(this._position);
		desiredVelocity.normalize();
		desiredVelocity = desiredVelocity.multiply(this._maxSpeed);
		var force:Vector2D = desiredVelocity.subtract(this._velocity);
		this._steeringForce = this._steeringForce.subtract(force);
	}

	public arrive(target:Vector2D):void {
		var desiredVelocity:Vector2D = target.subtract(this._position);
		desiredVelocity.normalize();
		var dist:number = this._position.dist(target);
		if (dist > this._arrivalThreshold) {
			desiredVelocity = desiredVelocity.multiply(this._maxSpeed);
		}
		else {
			desiredVelocity = desiredVelocity.multiply(this._maxSpeed * dist / this._arrivalThreshold);
		}
		var force:Vector2D = desiredVelocity.subtract(this._velocity);
		this._steeringForce = this._steeringForce.add(force);
	}

	public set arriveThreshold(value:number) {
		this._arrivalThreshold = value;
	}

	public get arriveThreshold():number {
		return this._arrivalThreshold;
	}

	public pursue(target: VeerBehavior): void{
		var lookAheadTime: number = this.position.dist(target.position) / this._maxSpeed;
		var predictedTarget: Vector2D = target.position.add(target.velocity.multiply(lookAheadTime));
		this.seek(predictedTarget);
	}
}