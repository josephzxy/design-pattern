class Singleton {
    private static inst: Singleton | null = null;
    private static cnt: number = 0;

    private constructor() {
        this.id = this.cnt;
        this.cnt++;
    }
    
    static new() {
        if (!this.inst) {
            this.inst = new Singleton();
        }
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

