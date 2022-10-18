interface Mediator {
  handleEvent(topic: string): void;
}

class ConcreteMediator implements Mediator {
  private a: A;
  private b: B;

  constructor(a: A, b: B) {
      this.a = a;
      this.b = b;
  }

  handleEvent(topic: string): void {
      switch (topic) {
          case 'A':
              console.log('hanle event A');
              this.a.do();
              this.b.do();
              break;
          case 'B':
              console.log('hanle event B');
              this.b.do();
              this.a.do();
              break;
          default:
              throw new Error('Unknown event');
      }
  }
}

interface MyWorker {
  do(): void;
  onEvent(med: Mediator): void;
}

class A implements MyWorker {
  do() {
      console.log('A');
  }

  onEvent(med: Mediator): void {
      med.handleEvent('A');
  }
}

class B implements MyWorker {
  do() {
      console.log('B');
  }

  onEvent(med: Mediator): void {
      med.handleEvent('B');
  }
}

const med = new ConcreteMediator(
  new A(),
  new B(),
);

med.handleEvent('A');
med.handleEvent('B');

/*
hanle event A
A
B
hanle event B
B
A
*/