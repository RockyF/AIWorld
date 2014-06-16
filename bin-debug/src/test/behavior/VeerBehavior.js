/**
* Created by lenovo on 2014/6/16.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="../../egret.d.ts"/>
///<reference path="../../core/TBehavior.ts"/>
var VeerBehavior = (function (_super) {
    __extends(VeerBehavior, _super);
    function VeerBehavior() {
        _super.call(this);
        this._edgeBehavior = VeerBehavior.WRAP;
        this._mass = 1.0;
        this._maxSpeed = 10;
        this._maxForce = 1;
        this._arrivalThreshold = 100;
        this.stageWidth = 480;
        this.stageHeight = 800;

        this._position = new Vector2D();
        this._velocity = new Vector2D();
        this._steeringForce = new Vector2D();
    }
    VeerBehavior.prototype.update = function () {
        this._steeringForce.truncate(this._maxForce);
        this._steeringForce = this._steeringForce.divide(this._mass);
        this._velocity = this._velocity.add(this._steeringForce);
        this._steeringForce = new Vector2D();

        this._velocity.truncate(this._maxSpeed);
        this._position = this._position.add(this._velocity);
        if (this._edgeBehavior == VeerBehavior.WRAP) {
            this.wrap();
        } else if (this._edgeBehavior == VeerBehavior.BOUNCE) {
            this.bounce();
        }

        this.position = this._position;
        this.target.rotation = this._velocity.angle * 180 / Math.PI;
    };

    VeerBehavior.prototype.bounce = function () {
        if (this.position.x > this.stageWidth) {
            this.position.x = this.stageWidth;
            this.velocity.x *= -1;
        } else if (this.position.x < 0) {
            this.position.x = 0;
            this.velocity.x *= -1;
        }
        if (this.position.y > this.stageHeight) {
            this.position.y = this.stageHeight;
            this.velocity.y *= -1;
        } else if (this.position.y < 0) {
            this.position.y = 0;
            this.velocity.y *= -1;
        }
    };

    VeerBehavior.prototype.wrap = function () {
        if (this.position.x > this.stageWidth)
            this.position.x = 0;
        if (this.position.x < 0)
            this.position.x = this.stageWidth;
        if (this.position.y > this.stageHeight)
            this.position.y = 0;
        if (this.position.y < 0)
            this.position.y = this.stageHeight;
    };


    Object.defineProperty(VeerBehavior.prototype, "edgeBehavior", {
        get: function () {
            return this._edgeBehavior;
        },
        set: function (value) {
            this._edgeBehavior = value;
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(VeerBehavior.prototype, "mass", {
        get: function () {
            return this._mass;
        },
        set: function (value) {
            this._mass = value;
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(VeerBehavior.prototype, "maxSpeed", {
        get: function () {
            return this._maxSpeed;
        },
        set: function (value) {
            this._maxSpeed = value;
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(VeerBehavior.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (value) {
            this._position = value;

            this.target.x = this._position.x;
            this.target.y = this._position.y;
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(VeerBehavior.prototype, "velocity", {
        get: function () {
            return this._velocity;
        },
        set: function (value) {
            this._velocity = value;
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(VeerBehavior.prototype, "maxForce", {
        get: function () {
            return this._maxForce;
        },
        set: function (value) {
            this._maxForce = value;
        },
        enumerable: true,
        configurable: true
    });

    VeerBehavior.prototype.seek = function (target) {
        var desiredVelocity = target.subtract(this._position);
        desiredVelocity.normalize();
        desiredVelocity = desiredVelocity.multiply(this._maxSpeed);
        var force = desiredVelocity.subtract(this._velocity);
        this._steeringForce = this._steeringForce.add(force);
    };

    VeerBehavior.prototype.flee = function (target) {
        var desiredVelocity = target.subtract(this._position);
        desiredVelocity.normalize();
        desiredVelocity = desiredVelocity.multiply(this._maxSpeed);
        var force = desiredVelocity.subtract(this._velocity);
        this._steeringForce = this._steeringForce.subtract(force);
    };

    VeerBehavior.prototype.arrive = function (target) {
        var desiredVelocity = target.subtract(this._position);
        desiredVelocity.normalize();
        var dist = this._position.dist(target);
        if (dist < 1) {
            return;
        }
        console.log(dist);
        if (dist > this._arrivalThreshold) {
            desiredVelocity = desiredVelocity.multiply(this._maxSpeed);
        } else {
            desiredVelocity = desiredVelocity.multiply(this._maxSpeed * dist / this._arrivalThreshold);
        }
        var force = desiredVelocity.subtract(this._velocity);
        this._steeringForce = this._steeringForce.add(force);
    };


    Object.defineProperty(VeerBehavior.prototype, "arriveThreshold", {
        get: function () {
            return this._arrivalThreshold;
        },
        set: function (value) {
            this._arrivalThreshold = value;
        },
        enumerable: true,
        configurable: true
    });

    VeerBehavior.prototype.pursue = function (target) {
        var lookAheadTime = this.position.dist(target.position) / this._maxSpeed;
        var predictedTarget = target.position.add(target.velocity.multiply(lookAheadTime));
        this.seek(predictedTarget);
    };
    VeerBehavior.WRAP = "wrap";
    VeerBehavior.BOUNCE = "bounce";
    return VeerBehavior;
})(TBehavior);
