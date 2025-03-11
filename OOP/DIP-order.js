var SqlRepo = /** @class */ (function () {
    function SqlRepo() {
    }
    SqlRepo.getInstance = function () {
        if (!SqlRepo.instance) {
            SqlRepo.instance = new SqlRepo();
        }
        return SqlRepo.instance;
    };
    SqlRepo.prototype.save = function () {
        console.log("I save in SQL");
    };
    return SqlRepo;
}());
var MongoRepo = /** @class */ (function () {
    function MongoRepo() {
    }
    MongoRepo.prototype.save = function () {
        console.log("I save in Mongo");
    };
    return MongoRepo;
}());
var OredrServiceSaver = /** @class */ (function () {
    function OredrServiceSaver(repository) {
        this.repo = repository;
    }
    OredrServiceSaver.prototype.placeHolder = function (order) {
        this.repo.save(order);
    };
    return OredrServiceSaver;
}());
var Db_Sql_1 = SqlRepo.getInstance();
var makeOrder_1 = new OredrServiceSaver(Db_Sql_1);
makeOrder_1.placeHolder({ address: "vghbj", client: "hcghvb" });
