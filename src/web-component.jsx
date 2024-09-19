import ReactDOM from "react-dom/client";
import { Widget } from "./components/Widget";
import tailwindStyles from "../src/index.css?inline";

export const normalizeAttributes = (attributes) => {
  return attributes.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

class WidgetWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const props = this.getPropsFromAttributes();
    const root = ReactDOM.createRoot(this.shadowRoot);

    root.render(<Widget {...props} />);
  }

  getPropsFromAttributes() {
    const props = {};
    for (const { name, value } of this.attributes) {
      props[normalizeAttributes(name)] = value;
    }
    return props;
  }
}

customElements.define('my-widget', WidgetWebComponent);  

export default WidgetWebComponent;
