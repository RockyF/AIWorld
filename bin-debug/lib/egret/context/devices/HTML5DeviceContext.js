/**
* Copyright (c) 2014,Egret-Labs.org
* All rights reserved.
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright
*       notice, this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions and the following disclaimer in the
*       documentation and/or other materials provided with the distribution.
*     * Neither the name of the Egret-Labs.org nor the
*       names of its contributors may be used to endorse or promote products
*       derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="DeviceContext.ts"/>
/// <reference path="../../utils/getTimer.ts"/>
var egret;
(function (egret) {
    /**
    * @class egret.HTML5DeviceContext
    * @classdesc
    * @extends egret.DeviceContext
    */
    var HTML5DeviceContext = (function (_super) {
        __extends(HTML5DeviceContext, _super);
        /**
        * @method egret.HTML5DeviceContext#constructor
        */
        function HTML5DeviceContext() {
            _super.call(this);
            this._time = 0;
            /**
            * @member egret.HTML5DeviceContext#frameRate
            */
            this.frameRate = 60;
        }
        /**
        * @method egret.HTML5DeviceContext#executeMainLoop
        * @param callback {Function}
        * @param thisObject {any}
        */
        HTML5DeviceContext.prototype.executeMainLoop = function (callback, thisObject) {
            var self = this;

            var enterFrame = function () {
                var thisTime = egret.getTimer();
                var advancedTime = thisTime - self._time;
                callback.call(thisObject, advancedTime);
                self._time = thisTime;
                HTML5DeviceContext.requestAnimationFrame.call(window, enterFrame);
            };

            HTML5DeviceContext.requestAnimationFrame.call(window, enterFrame);
        };
        HTML5DeviceContext.requestAnimationFrame = window["requestAnimationFrame"] || window["webkitRequestAnimationFrame"] || window["mozRequestAnimationFrame"] || window["oRequestAnimationFrame"] || window["msRequestAnimationFrame"] || function (callback) {
            return window.setTimeout(callback, 1000 / 60);
        };
        return HTML5DeviceContext;
    })(egret.DeviceContext);
    egret.HTML5DeviceContext = HTML5DeviceContext;
})(egret || (egret = {}));
