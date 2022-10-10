// Load balancer proxy
interface Processor {
  process(): void;
}

class ConcreteProcessor implements Processor {
  private id: number;
  constructor(id: number) {
      this.id = id;
  }

  process() {
      console.log(`Processor ${this.id} is processing`);
  }
}

class ProcessorProxy implements Processor {
  private procs: Processor[];
  private cnt: number = 0;

  constructor(procs: Processor[]) {
      this.procs = procs;
  }

  process() {
      const idx = (this.cnt++) % this.procs.length;
      this.procs[idx].process();
  }
}

const proc = new ProcessorProxy([
  new ConcreteProcessor(0),
  new ConcreteProcessor(1),
  new ConcreteProcessor(2),
]);

for (let i = 0; i < 5; i++) {
  proc.process();
}

/*
Processor 0 is processing
Processor 1 is processing
Processor 2 is processing
Processor 0 is processing
Processor 1 is processing
*/