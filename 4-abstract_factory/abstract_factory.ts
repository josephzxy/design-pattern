abstract class Door {}

class WoodenDoor extends Door {}
class IronDoor extends Door {}

abstract class DoorExpert {}

class WoodenDoorExpert extends DoorExpert {}
class IronDoorExpert extends DoorExpert {}

abstract class DoorFactory {
  abstract createDoor(): Door;
  abstract createDoorExpert(): DoorExpert;
}

class WoodenDoorFactory extends DoorFactory {
  createDoor(): Door {
    return new WoodenDoor();
  }

  createDoorExpert(): DoorExpert {
    return new WoodenDoorExpert();
  }
}

class IronDoorFactory extends DoorFactory {
  createDoor(): Door {
    return new IronDoor();
  }

  createDoorExpert(): DoorExpert {
    return new IronDoorExpert();
  }
}

const wd = new WoodenDoorFactory().createDoor();
const wdEx = new WoodenDoorFactory().createDoorExpert();
console.log(wd);
console.log(wdEx);

const id = new IronDoorFactory().createDoor();
const idEx = new IronDoorFactory().createDoorExpert();
console.log(id);
console.log(idEx);

/*
WoodenDoor {}
WoodenDoorExpert {}
IronDoor {}
IronDoorExpert {}
*/