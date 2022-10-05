abstract class Theme {
  abstract render(): void;
}

class NullTheme extends Theme {
  render() {}
}

abstract class Page {
  private theme: Theme = new NullTheme();

  setTheme(th: Theme): void {
      this.theme = th;
  }
  render(): void {
      this.theme.render();
  }
}

class DarkTheme extends Theme {
  render() {
      console.log('render to dark');
  }
}

class LightTheme extends Theme {
  render() {
      console.log('render to light');
  }
}

class About extends Page {}

const about = new About();
about.setTheme(new DarkTheme());
about.render();
about.setTheme(new LightTheme());
about.render();

/**
render to dark
render to light
*/