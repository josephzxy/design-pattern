interface Iter<Type> {
  next(): Type;
  hasNext(): boolean;
}

class ListIter<Type> {
  private list: Type[];
  private idx: number;

  constructor(list: Type[]) {
      this.list = list;
      this.idx = 0;
  }

  next(): Type {
      return this.list[this.idx++];
  }

  hasNext(): boolean {
      if (this.idx < this.list.length) {
          return true;
      }
      return false;
  }

}

class List<Type> {
  private list: Type[];

  constructor() {
      this.list = [];
  }

  push(v: Type) {
      this.list.push(v);
  }

  getIter(): Iter<Type> {
      return new ListIter<Type>(this.list);
  }
}

const list = new List<number>();
list.push(1);
list.push(2);
const iter = list.getIter();

while (iter.hasNext()) {
  console.log(iter.next());
}

/*
1
2
*/