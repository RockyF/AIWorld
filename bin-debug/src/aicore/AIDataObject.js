/**
* Created by lenovo on 2014/6/12.
*/
var AIDataObject = (function () {
    function AIDataObject() {
        this.alive = true;
        this.level = 0;
        this.levelChanged = true;
        this.autoAttackRange = 100;
        this.attackRange = 5;
    }
    AIDataObject.create = function (x, y, level) {
        var instance = new AIDataObject();
        instance.x = x;
        instance.y = y;
        instance.level = level;
        instance.speed = level;

        return instance;
    };

    AIDataObject.prototype.update = function () {
        this.doScript();

        this.userData.update();
    };

    AIDataObject.prototype.destroy = function () {
        this.alive = false;

        this.world.removeFromWorld(this);
    };

    AIDataObject.prototype.doScript = function () {
        if (this.attackTarget && this.attackTarget.alive) {
            this.moveToTarget();
        } else {
            this.attackTarget = this.world.getObjectRandom(this, true);
            if (this.attackTarget) {
                this.moveToTarget();
            } else {
                //this.world.stop();
            }
        }
    };

    AIDataObject.prototype.moveToTarget = function () {
        if (Math.abs(this.x - this.attackTarget.x) < this.speed) {
            this.x = this.attackTarget.x;
        } else {
            this.x += (this.x < this.attackTarget.x ? 1 : -1) * this.speed;
        }
        if (Math.abs(this.y - this.attackTarget.y) < this.speed) {
            this.y = this.attackTarget.y;
        } else {
            this.y += (this.y < this.attackTarget.y ? 1 : -1) * this.speed;
        }

        this.rotation = Math.atan2(this.y - this.attackTarget.y, this.x - this.attackTarget.x);

        if (this.x == this.attackTarget.x && this.y == this.attackTarget.y) {
            this.attack();
        }
    };

    AIDataObject.prototype.attack = function () {
        if (this.level >= this.attackTarget.level) {
            this.speed++;
            this.level++;
            this.levelChanged = true;
            this.autoAttackRange++;

            this.attackTarget.destroy();
        }
    };
    return AIDataObject;
})();
