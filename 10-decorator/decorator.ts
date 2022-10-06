abstract class Beverage {
  base: Beverage | undefined;

  constructor(base: Beverage | undefined) {
      this.base = base;
  }

  abstract cost(): number;

  totalCost(): number {
      let baseCost = 0; 
      if (this.base) {
          baseCost = this.base.cost();
      }
      return this.cost() + baseCost;
  }
}

class Coffee extends Beverage {
  cost() {
      return 1;
  }
}

class Milk extends Beverage {
  cost() {
      return 2;
  }
}

const Latte = new Milk(new Coffee(undefined));
console.log(Latte.totalCost());

/**
3
*/