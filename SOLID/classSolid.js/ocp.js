class CalculateTax {
  constructor(strategy) {
    this.strategy = strategy;
  }
  calCulate(amount) {
    return this.strategy.calCulate(amount);
  }
}
class IndiaTax {
  calCulate(amount) {
    return amount * 0.4;
  }
}
class UsaTax {
  calCulate(amount) {
    return amount * 0.35;
  }
}
class UkTax {
  calCulate(amount) {
    return amount * 0.4;
  }
}
const indianTaxCalulator = new CalculateTax(new IndiaTax());
console.log(indianTaxCalulator.calCulate(1000));
