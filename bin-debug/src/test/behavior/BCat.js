/**
* Created by lenovo on 2014/6/16.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="../../core/TContext.ts"/>
///<reference path="../../utils/Vector2D.ts"/>
var BCat = (function (_super) {
    __extends(BCat, _super);
    function BCat() {
        _super.apply(this, arguments);
    }
    BCat.prototype.onCreate = function () {
        this.objectMap = TContext.getInstance().objectMap;
        this.targetVector = new Vector2D(this.target.x, this.target.y);
    };
    BCat.prototype.onDestroy = function () {
    };

    BCat.prototype.onUpdate = function () {
        this.chooseTargetMouse();
        this.arrive(this.targetVector);
        this.update();
    };

    BCat.prototype.chooseTargetMouse = function () {
        if (!this.targetMouse) {
            while (true) {
                this.targetMouse = (this.objectMap.randomGet());
                if (this.targetMouse.behavior != this) {
                    break;
                }
            }
        }
        if (this.targetMouse) {
            this.targetVector.x = this.targetMouse.x;
            this.targetVector.y = this.targetMouse.y;
        }
    };
    return BCat;
})(VeerBehavior);
