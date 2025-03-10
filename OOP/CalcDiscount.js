//<<<Open-Closed Principle>>>//

class DiscountStrategy {
    calc(amount) {
        throw new Error("Method 'calc' must be implemented.");
    }
}

class PercentageDiscount extends DiscountStrategy {
    constructor(precent) {
        super()
        this.precent = precent
    }

    calc(amount) {
        const newPrecent = this.precent / 100
        return amount - (amount * newPrecent)
    }
}

class FixedAmountDiscount extends DiscountStrategy {
    constructor(discount) {
        super()

        this.discount = discount
    }

    calc(amount) {
        if (amount < this.discount) {
            return
        }
        return amount - this.discount
    }
}


class Calculator {

    constructor(amount, strategy) {
        this.amount = amount
        this.strategy = strategy
    }


    Calculate() {
        return this.strategy.calc(this.amount)
    }
}

const precent_1 = new PercentageDiscount(100)

const calacProduct_1 = new Calculator(1000, precent_1)

console.log(calacProduct_1.Calculate());
