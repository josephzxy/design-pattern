interface Command {
  do(): void;
  undo(): void;
}

class LightOnCommand implements Command {
  do() { console.log('do: light on'); }

  undo() { console.log('undo: light off'); }
}

class RobotOnCommand implements Command {
  do() { console.log('do: robot on'); }

  undo() { console.log('undo: robot off'); }
}

class Master {
  private onCommands: Command[];

  constructor() {
      this.onCommands = [];
  }

  addOnCommand(cmd: Command): void {
      this.onCommands.push(cmd);
  }

  turnOn(): void {
      for (const c of this.onCommands) {
          c.do();
      }
  }

  turnOff(): void {
      for (const c of this.onCommands) {
          c.undo();
      }
  }
}

const master = new Master();
master.addOnCommand(new LightOnCommand());
master.addOnCommand(new RobotOnCommand());

master.turnOn();
master.turnOff();

/*
do: light on
do: robot on
undo: light off
undo: robot off
*/