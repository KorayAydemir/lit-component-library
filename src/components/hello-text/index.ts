import { css, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import scopedStyles from "./styles.module.scss";

@customElement("hello-text")
export default class HelloText extends LitElement {
    @property({ type: String }) name!: string;

    render(): TemplateResult {
        return html`
            <h4>Hello, <slot></slot></h4>
            <p>${this.name}</p>
        `;
    }

    static styles = [scopedStyles as never, css`
        :host h4 {
            color: red;
        }
    `];
}
