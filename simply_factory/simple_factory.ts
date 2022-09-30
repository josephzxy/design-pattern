abstract class Door {}

class WoodenDoor extends Door {}
class IronDoor extends Door {}

class DoorFactory {
  createDoor(material: String): Door {
    switch (material) {
      case 'wood':
        return new WoodenDoor();
      case 'iron':
        return new IronDoor();
      default:
        throw new Error("Invalid material");
    }
  }
}

const fact = new DoorFactory();

const wod = fact.createDoor('wood');
console.log(wod);

const ird = fact.createDoor('iron');
console.log(ird);

/*
WoodenDoor {}
IronDoor {}
*/
