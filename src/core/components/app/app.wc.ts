export class App extends HTMLElement {
  static #selector: 'app-root';
  static render() {
    const el = document.querySelector(App.#selector) as HTMLElement;

    console.log();
    console.dir('root', el);
    const newElement = new App();
    el.replaceWith(newElement.#element);
  }

  #template!: string;

  constructor() {
    super();
    this.#setTemplate();
    this.#setElement();
  }

  #setTemplate() {
    this.#template = `<div>Prueba</div>`;
  }

  setElement() {
    this.#element.innerHTML = this.#template;
  }
}
