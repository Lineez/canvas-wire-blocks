export interface ContextMenuOption {
  name: string;
  action: () => void;
}

interface Options {
  closeMenuAfterAction: boolean;
  cssClass: string;
}

const defaultOptions: Options = {
  closeMenuAfterAction: true,
  cssClass: "contextmenu",
};

export class ContextMenuContructor {
  list: HTMLElement | undefined;
  private _isMenuOpen: boolean;
  private options: Options;

  constructor(
    private items: ContextMenuOption[],
    private _options?: Partial<Options>
  ) {
    this._isMenuOpen = false;
    this.options = Object.assign(defaultOptions, this._options);
  }

  get isMenuOpen() {
    return this._isMenuOpen;
  }
  set isMenuOpen(value: boolean) {
    this._isMenuOpen = value;
    this.list?.classList.toggle("open", value);
  }

  public create(top: number, left: number) {
    const { cssClass } = this.options;

    this.list = this.generateElement({
      element: "ul",
      classes: [cssClass],
      styles: {
        top: top + "px",
        left: left + "px",
      },
    });

    this.list.addEventListener("click", this.onClick.bind(this));

    const items = this.items.map((option) => {
      return this.generateElement({
        element: "li",
        elementOptions: option,
        classes: [`${cssClass}__item`],
      });
    });

    this.list.append(...items);
    this.isMenuOpen = true;

    return this.list;
  }

  private onClick(e: MouseEvent) {
    const child = e.target as HTMLLIElement;

    // need test if children undefined
    const IdxChildNode = Array.prototype.indexOf.call(
      child.parentNode?.children,
      child
    );

    if (IdxChildNode < 0) return;

    this.items[IdxChildNode].action();

    if (this.options?.closeMenuAfterAction) {
      this.isMenuOpen = false;
    }
  }

  private generateElement(options: {
    element: keyof HTMLElementTagNameMap;
    elementOptions?: ContextMenuOption;
    classes?: string[];
    styles?: Record<string, string>;
  }) {
    const { element, elementOptions, classes, styles } = options;
    const tag = document.createElement(element);

    if (elementOptions) {
      tag.innerText = elementOptions.name;
    }

    if (classes) {
      tag.classList.add(...classes);
    }

    if (styles) {
      this.updateStyles(tag, styles);
    }

    return tag;
  }

  private updateStyles(element: HTMLElement, styles: Record<string, string>) {
    for (const [key, value] of Object.entries(styles)) {
      element.style.setProperty(key, value);
    }
  }

  public updatePosition(top: number, left: number) {
    if (!this.list) throw new Error("List must be defined");

    this.updateStyles(this.list, {
      top: top + "px",
      left: left + "px",
    });
  }

  public remove() {
    if (!this.list) throw new Error("List must be defined");

    this.list.removeEventListener("click", this.onClick);
    this.list.remove();
  }
}
