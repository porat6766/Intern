//<<< Interface Segregation Principle >>>//
//
var Worker_Just_Work = /** @class */ (function () {
    function Worker_Just_Work() {
    }
    Worker_Just_Work.prototype.work = function () {
        console.log("I am working all day!!");
    };
    return Worker_Just_Work;
}());
var Worker_Just_Rest = /** @class */ (function () {
    function Worker_Just_Rest() {
    }
    Worker_Just_Rest.prototype.takeBreak = function () {
        console.log("I am just resting all day!!");
    };
    return Worker_Just_Rest;
}());
var Worker_Normal = /** @class */ (function () {
    function Worker_Normal() {
    }
    Worker_Normal.prototype.work = function () {
        console.log("I am working...");
    };
    Worker_Normal.prototype.takeBreak = function () {
        console.log("Taking a short break...");
    };
    return Worker_Normal;
}());
var engineer_1 = new Worker_Normal();
engineer_1.work();
engineer_1.takeBreak();
