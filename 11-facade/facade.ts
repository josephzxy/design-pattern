class TeaMaker {
  boilWater() {
      console.log('Boiling water...');
  }

  putTea() {
      console.log('Putting tea...');
  }
}

class TeaBrewer {
  private teaMaker: TeaMaker;
  constructor(teaMaker: TeaMaker) {
      this.teaMaker = teaMaker;
  }

  brew() {
      this.teaMaker.boilWater();
      this.teaMaker.putTea();
  }
}

const teaBrewer = new TeaBrewer(new TeaMaker());
teaBrewer.brew();

/*
Boiling water...
Putting tea...
*/