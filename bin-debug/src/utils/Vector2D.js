/**
* Created by lenovo on 2014/6/16.
*/
var Vector2D = (function () {
    /**
    * Constructor.
    */
    function Vector2D(x, y) {
        if (typeof x === "undefined") { x = 0; }
        if (typeof y === "undefined") { y = 0; }
        this._x = x;
        this._y = y;
    }
    /**
    * Generates a copy of this vector.
    * @return com.foed.Vector2D A copy of this vector.
    */
    Vector2D.prototype.clone = function () {
        return new Vector2D(this.x, this.y);
    };

    /**
    * Sets this vector's x and y values, and thus length, to zero.
    * @return com.foed.Vector2D A reference to this vector.
    */
    Vector2D.prototype.zero = function () {
        this._x = 0;
        this._y = 0;
        return this;
    };

    /**
    * Whether or not this vector is equal to zero, i.e. its x, y, and length
    are zero.
    * @return Boolean True if vector is zero, otherwise false.
    */
    Vector2D.prototype.isZero = function () {
        return this._x == 0 && this._y == 0;
    };


    Object.defineProperty(Vector2D.prototype, "length", {
        get: function () {
            return Math.sqrt(this.lengthSQ);
        },
        /**
        * Sets / gets the length or magnitude of this vector. Changing the length
        will change the x and y but not the angle of this vector.
        */
        set: function (value) {
            var a = this.angle;
            this._x = Math.cos(a) * value;
            this._y = Math.sin(a) * value;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(Vector2D.prototype, "lengthSQ", {
        /**
        * Gets the length of this vector, squared.
        */
        get: function () {
            return this._x * this._x + this._y * this._y;
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(Vector2D.prototype, "angle", {
        get: function () {
            return Math.atan2(this._y, this._x);
        },
        /**
        * Gets / sets the angle of this vector. Changing the angle changes the x
        and y but retains the same length.
        6
        */
        set: function (value) {
            var len = this.length;
            this._x = Math.cos(value) * len;
            this._y = Math.sin(value) * len;
        },
        enumerable: true,
        configurable: true
    });

    /**
    * Normalizes this vector. Equivalent to setting the length to one, but
    more efficient.
    * @return com.foed.Vector2D A reference to this vector.
    */
    Vector2D.prototype.normalize = function () {
        if (this.length == 0) {
            this._x = 1;
            return this;
        }
        var len = this.length;
        this._x /= len;
        this._y /= len;
        return this;
    };

    /**
    * Ensures the length of the vector is no longer than the given value.
    * @param max The maximum value this vector should be. If length is larger
    than max, it will be truncated to this value.
    * @return com.foed.Vector2D A reference to this vector.
    */
    Vector2D.prototype.truncate = function (max) {
        this.length = Math.min(max, this.length);
        return this;
    };

    /**
    * Reverses the direction of this vector.
    * @return com.foed.Vector2D A reference to this vector.
    */
    Vector2D.prototype.reverse = function () {
        this._x = -this._x;
        this._y = -this._y;
        return this;
    };

    /**
    * Whether or not this vector is normalized, i.e. its length is equal to
    one.
    * @return Boolean True if length is one, otherwise false.
    */
    Vector2D.prototype.isNormalized = function () {
        return this.length == 1.0;
    };

    /**
    * Calculates the dot product of this vector and another given vector.
    * @param v2 Another Vector2D instance.
    * @return Number The dot product of this vector and the one passed in as a
    parameter.
    */
    Vector2D.prototype.dotProd = function (v2) {
        return this._x * v2.x + this._y * v2.y;
    };

    /**
    * Calculates the cross product of this vector and another given vector.
    * @param v2 Another Vector2D instance.
    * @return Number The cross product of this vector and the one passed in as
    a parameter.
    */
    Vector2D.prototype.crossProd = function (v2) {
        return this._x * v2.y - this._y * v2.x;
    };

    /**
    * Calculates the angle between two vectors.
    * @param v1 The first Vector2D instance.
    * @param v2 The second Vector2D instance.
    * @return Number the angle between the two given vectors.
    */
    Vector2D.angleBetween = function (v1, v2) {
        if (!v1.isNormalized())
            v1 = v1.clone().normalize();
        if (!v2.isNormalized())
            v2 = v2.clone().normalize();
        return Math.acos(v1.dotProd(v2));
    };

    /**
    * Determines if a given vector is to the right or left of this vector.
    * @return int If to the left, returns -1. If to the right, +1.
    */
    Vector2D.prototype.sign = function (v2) {
        return this.perp.dotProd(v2) < 0 ? -1 : 1;
    };

    Object.defineProperty(Vector2D.prototype, "perp", {
        /**
        * Finds a vector that is perpendicular to this vector.
        * @return com.foed.Vector2D A vector that is perpendicular to this vector.
        */
        get: function () {
            return new Vector2D(-this.y, this.x);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * Calculates the distance from this vector to another given vector.
    * @param v2 A Vector2D instance.
    * @return Number The distance from this vector to the vector passed as a
    parameter.
    */
    Vector2D.prototype.dist = function (v2) {
        return Math.sqrt(this.distSQ(v2));
    };

    /**
    * Calculates the distance squared from this vector to another given vector.
    * @param v2 A Vector2D instance.
    * @return Number The distance squared from this vector to the vector
    passed as a parameter.
    */
    Vector2D.prototype.distSQ = function (v2) {
        var dx = v2.x - this.x;
        var dy = v2.y - this.y;
        return dx * dx + dy * dy;
    };

    /**
    9
    * Adds a vector to this vector, creating a new Vector2D instance to hold
    the result.
    * @param v2 A Vector2D instance.
    * @return com.foed.Vector2D A new vector containing the results of the addition.
    */
    Vector2D.prototype.add = function (v2) {
        return new Vector2D(this._x + v2.x, this._y + v2.y);
    };

    /**
    * Subtacts a vector to this vector, creating a new Vector2D instance to
    hold the result.
    * @param v2 A Vector2D instance.
    * @return com.foed.Vector2D A new vector containing the results of the subtraction.
    */
    Vector2D.prototype.subtract = function (v2) {
        return new Vector2D(this._x - v2.x, this._y - v2.y);
    };

    /**
    * Multiplies this vector by a value, creating a new Vector2D instance to
    hold the result.
    * @param v2 A Vector2D instance.
    * @return com.foed.Vector2D A new vector containing the results of the
    multiplication.
    */
    Vector2D.prototype.multiply = function (value) {
        return new Vector2D(this._x * value, this._y * value);
    };

    /**
    * Divides this vector by a value, creating a new Vector2D instance to hold
    the result.
    * @param v2 A Vector2D instance.
    * @return com.foed.Vector2D A new vector containing the results of the division.
    */
    Vector2D.prototype.divide = function (value) {
        return new Vector2D(this._x / value, this._y / value);
    };

    /**
    * Indicates whether this vector and another Vector2D instance are equal in
    value.
    10
    * @param v2 A Vector2D instance.
    * @return Boolean True if the other vector is equal to this one, false if
    not.
    */
    Vector2D.prototype.equals = function (v2) {
        return this._x == v2.x && this._y == v2.y;
    };


    Object.defineProperty(Vector2D.prototype, "x", {
        get: function () {
            return this._x;
        },
        /**
        * Sets / gets the x value of this vector.
        */
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(Vector2D.prototype, "y", {
        get: function () {
            return this._y;
        },
        /**
        * Sets / gets the y value of this vector.
        */
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });

    /**
    * Generates a string representation of this vector.
    * @return String A description of this vector.
    */
    Vector2D.prototype.toString = function () {
        return "[Vector2D (x:" + this._x + ", y:" + this._y + ")]";
    };
    return Vector2D;
})();
