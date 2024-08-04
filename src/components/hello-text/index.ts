import { css, html, LitElement, TemplateResult } from "lit";
import { property } from "lit/decorators.js";
import { defineComponent } from "~utils/components";
import scopedStyles from "./styles.module.scss";

export default (): void => defineComponent("hello-text", HelloText);
export class HelloText extends LitElement {
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
