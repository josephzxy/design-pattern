class Memento {
  firstNum: number;
  secNum: number;

  constructor(firstNum: number, secNum: number) {
    this.firstNum = firstNum;
    this.secNum = secNum;
  }
}

class Calculator {
  firstNum: number;
  secNum: number;

  constructor() {
    this.firstNum = 0;
    this.secNum = 0;
  }

  getResult() {
    return this.firstNum + this.secNum;
  }

  saveState(): Memento {
    return new Memento(this.firstNum, this.secNum);
  }

  restoreState(mem: Memento) {
    this.firstNum = mem.firstNum;
    this.secNum = mem.secNum;
  }
}

const calc = new Calculator();
calc.firstNum = 1;
calc.secNum = 2;
console.log(calc.getResult());

const mem = calc.saveState();

calc.secNum = 3;
console.log(calc.getResult());

calc.restoreState(mem);
console.log(calc.getResult());

/*
3
4
3
*/
