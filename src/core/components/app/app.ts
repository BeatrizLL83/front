export class App {
  static #selector: 'app-root';
  static render() {
    const el = document.querySelector(App.#selector) as HTMLElement;

    console.log()
    console.dir('root', el)
    const newElement = new App()
    el.replaceWith(newElement.#element)
  }

  #template!: string;
  #element!: HTMLElement;

  private constructor() {
    this.#setTemplate();
    this.#setElement();
  }

  #setTemplate() {
    this.#template = `<div>Prueba</div>`
  }

  setElement() {
    this.#element = document.createElement('app-root');
    console.log(this.#element);
    this.#element.innerHTML = this.#template
  }


}
