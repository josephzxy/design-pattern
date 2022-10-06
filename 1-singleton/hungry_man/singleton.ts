class Singleton {
    private static inst: Singleton = new Singleton();
    private static cnt: Number = 0;

    private constructor() {
        this.id = Singleton.cnt;
        Singleton.cnt++;
    }

    static new() {
        return this.inst;
    }
}

const s = Singleton.new();
console.log(s);

const s2 = Singleton.new();
console.log(s2);

/*
Singleton { id: 0 }
Singleton { id: 0 }
*/

