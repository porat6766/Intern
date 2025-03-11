interface Order {
    address: string,
    client: string
}

interface OrderRepository {
    save(order: Order): void;
}

class SqlRepo implements OrderRepository {
    private static instance: SqlRepo;

    private constructor() { }

    static getInstance(): SqlRepo {
        if (!SqlRepo.instance) {
            SqlRepo.instance = new SqlRepo();
        }
        return SqlRepo.instance;
    }

    save(order: Order): void {
        console.log(`Saving order in SQL: Address - ${order.address}, Client - ${order.client}`);
    }
}



class MongoRepo implements OrderRepository {
    save(order: Order): void {
        console.log(`Saving order in Mongo: Address - ${order.address}, Client - ${order.client}`);
    }
}

class OrderServiceSaver {
    private repo: OrderRepository

    constructor(repository: OrderRepository) {
        this.repo = repository
    }
    placeHolder(order: Order) {
        this.repo.save(order)
    }
}

const Db_Sql_1 = SqlRepo.getInstance();

const makeOrder_1 = new OrderServiceSaver(Db_Sql_1);

makeOrder_1.placeHolder({ address: "israel", client: "Dude" });