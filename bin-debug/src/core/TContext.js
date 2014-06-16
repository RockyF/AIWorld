/**
* Created by lenovo on 2014/6/16.
*/
var TContext = (function () {
    function TContext() {
    }
    TContext.getInstance = function () {
        if (TContext._instance == undefined) {
            TContext._instance = new TContext();
        }
        return TContext._instance;
    };

    TContext.prototype.init = function (objectMap, input) {
        this.objectMap = objectMap;
        this.input = input;
    };
    return TContext;
})();
