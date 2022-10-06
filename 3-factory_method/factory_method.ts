abstract class Door {}

class WoodenDoor extends Door {}
class IronDoor extends Door {}

abstract class DoorFactory {
  abstract createDoor(): Door;
}

class WoodenDoorFactory extends DoorFactory {
  createDoor(): Door {
    return new WoodenDoor();
  }
}

class IronDoorFactory extends DoorFactory {
  createDoor(): Door {
    return new IronDoor();
  }
}

const wdFact = new WoodenDoorFactory();
const wd = wdFact.createDoor();
console.log(wd);

const idFact = new IronDoorFactory();
const id = idFact.createDoor();
console.log(id);

/*
WoodenDoor {}
IronDoor {}
*/