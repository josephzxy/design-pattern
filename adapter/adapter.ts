interface Dog {
  woof(): void;
}

class Cat {
  meow(): void { console.log("meow"); }
}

class CatAdapter implements Dog {
  cat: Cat;
  constructor(cat: Cat) {
    this.cat = cat;
  }
  woof() { this.cat.meow(); }
}

const pretendDog = new CatAdapter(new Cat());
pretendDog.woof();

/*
meow
*/