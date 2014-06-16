/**
* Created by lenovo on 2014/6/16.
*/
var HashMap = (function () {
    function HashMap() {
        this.clear();
    }
    HashMap.prototype.containsKey = function (key) {
        return key in this.obj;
    };

    HashMap.prototype.containsValue = function (value) {
        for (var key in this.obj) {
            if (this.obj[key] == value) {
                return true;
            }
        }
        return false;
    };

    HashMap.prototype.put = function (key, value) {
        if (!this.containsKey(key)) {
            this.obj[key] = value;
        }
    };

    HashMap.prototype.get = function (key) {
        return this.containsKey(key) ? this.obj[key] : null;
    };

    HashMap.prototype.remove = function (key) {
        if (this.containsKey(key)) {
            var value = this.obj;
            delete this.obj[key];
            length--;

            return value;
        }
        return null;
    };

    HashMap.prototype.foreach = function (callback, thisOjb) {
        for (var key in this.obj) {
            callback.call(thisOjb, this.obj[key]);
        }
    };

    HashMap.prototype.randomGet = function () {
        var values = this.valueSet;
        return values[Math.floor(Math.random() * values.length)];
    };

    Object.defineProperty(HashMap.prototype, "keySet", {
        get: function () {
            var keys = [];
            for (var key in this.obj) {
                keys.push(key);
            }

            return keys;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(HashMap.prototype, "valueSet", {
        get: function () {
            var values = [];
            for (var key in this.obj) {
                values.push(this.obj[key]);
            }

            return values;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(HashMap.prototype, "size", {
        get: function () {
            return this._length;
        },
        enumerable: true,
        configurable: true
    });

    HashMap.prototype.clear = function () {
        this._length = 0;
        this.obj = {};
    };
    return HashMap;
})();
