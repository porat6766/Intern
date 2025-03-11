//<<< Interface Segregation Principle >>>//

interface Work {
    work: () => void;
}

interface TakeBreak {
    takeBreak: () => void;
}

//
class Worker_Just_Work implements Work {
    work() {
        console.log("I am working all day!!");
    }
}


class Worker_Just_Rest implements TakeBreak {
    takeBreak() {
        console.log("I am just resting all day!!");
    }
}


class Worker_Normal implements Work, TakeBreak {
    work() {
        console.log("I am working...");
    }

    takeBreak() {
        console.log("Taking a short break...");
    }
}

const engineer_1 = new Worker_Normal();

engineer_1.work();
engineer_1.takeBreak();  
