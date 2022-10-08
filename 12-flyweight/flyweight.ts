class Tea {
  name: string;
  id: number;

  constructor(name: string) {
      this.name = name;
      this.id = Math.random();
  }
}

class TeaMaker {
  private teaStore: Map<string, Tea>;

  constructor() {
      this.teaStore = new Map<string, Tea>();
  }

  serve(name: string): Tea {
      let tea = this.teaStore.get(name);
      if (!tea) {
          tea = new Tea(name);
          this.teaStore.set(name, tea);
      }
      return tea;
  }
}

const tm = new TeaMaker();
console.log(tm.serve('green'));
console.log(tm.serve('green'));

/*
Tea { name: 'green', id: 0.1532352216390136 }
Tea { name: 'green', id: 0.1532352216390136 }
*/
