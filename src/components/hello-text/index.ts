import { CSSResult, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import style from "./styles.module.scss";

@customElement("hello-text")
export default class HelloText extends LitElement {
    @property({ type: String }) name!: string;

    render(): TemplateResult {
        return html`
            <h4>Hello, <slot></slot></h4>
            <p>${this.name}</p>
        `;
    }

    static styles = [style as CSSResult];
}
