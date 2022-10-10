class Req {
  msg: string;

  constructor(msg: string) {
      this.msg = msg;
  }
}

interface Handler {
  handle(req: Req): void;
  getSuccessor(): Handler | undefined;
}

abstract class AnimalHandler implements Handler {
  private successor: Handler | undefined;

  constructor(successor: Handler | undefined) {
      this.successor = successor;
  }

  abstract handle(req: Req): void;

  getSuccessor(): Handler | undefined{
      return this.successor;
  }
}

class DogHandler extends AnimalHandler {
  handle(req: Req) {
      if (req.msg === 'dog') {
          console.log('handle dog');
      } else {
          console.log('skip');
      }
      let suc = this.getSuccessor();
      if (suc) {
          suc.handle(req);
      }
  }
}

class CatHandler extends AnimalHandler {
  handle(req: Req) {
      if (req.msg === 'cat') {
          console.log('handle cat');
      } else {
          console.log('skip');
      }
      let suc = this.getSuccessor();
      if (suc) {
          suc.handle(req);
      }
  }
}

const dogHandler = new DogHandler(new CatHandler(undefined));
dogHandler.handle(new Req('dog'));
dogHandler.handle(new Req('cat'));
/*
handle dog
skip
skip
handle cat
*/