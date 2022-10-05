interface Component {
  name: string;
  operate(): void;
  add(c: Component): void;
  rm(name: string): void;
  getChild(name: string): Component | undefined;
}

class Leaf implements Component {
  name: string;

  constructor(name: string) {
    this.name = name; 
  }

  operate(): void {
    console.log(`${this.name} is operating`);
  }

  add(c: Component): never {
    throw new Error('Not implemented');
  }

  rm(name: string): never {
    throw new Error('Not implemented');
  }

  getChild(name: string): never {
    throw new Error('Not implemented');
  }
}

class Composite implements Component {
  name: string;
  private children: Map<string, Component>;

  constructor(name: string) {
    this.name = name;
    this.children = new Map<string, Component>();
  }

  operate(): void {
    console.log(`${this.name} is operating`);
    for (const v of this.children.values()) {
      v.operate();
    }
  }

  add(c: Component): void {
    this.children.set(c.name, c);
  }

  rm(name: string): void {
    this.children.delete(name);
  }

  getChild(name: string): Component | undefined {
    return this.children.get(name);
  }
}

const root = new Composite('root');
const l1 = new Leaf('l1');
root.add(l1);

console.log(root.getChild('l1'));
root.operate();

root.rm('l1');
console.log(root.getChild('l1'));

/*
Leaf { name: 'l1' }
root is operating
l1 is operating
undefined
*/