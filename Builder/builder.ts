// Builder

class Burger {
  ingredients: string[];

  constructor() {
      this.ingredients = [];
  }
}

class BurgerBuilder {
  burger: Burger;

  constructor() {
      this.burger = new Burger();
  }

  addCheese(): void {
      this.burger.ingredients.push('cheese');
  }

  addMeat(): void {
      this.burger.ingredients.push('meat');
  }

  getBurger(): Burger {
      return this.burger;
  }
}

const burgerBuilder = new BurgerBuilder();
burgerBuilder.addCheese();
burgerBuilder.addMeat();
const burger = burgerBuilder.getBurger();
console.log(burger);

/**
Burger { ingredients: [ 'cheese', 'meat' ] }
*/