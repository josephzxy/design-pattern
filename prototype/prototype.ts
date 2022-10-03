// Prototype

class Burger {
  ingredients: string[];
  id: number;

  constructor(ingredients: string[]) {
      this.ingredients = ingredients;
      this.id = Math.random();
  }

  clone(): Burger {
      return new Burger(this.ingredients);
  }
}

const b1 = new Burger(['cheese', 'meat']);
console.log(b1);
const b2 = b1.clone();
console.log(b2);

/**
Burger { ingredients: [ 'cheese', 'meat' ], id: 0.16575460444972023 }
Burger { ingredients: [ 'cheese', 'meat' ], id: 0.7097143262807961 }
*/