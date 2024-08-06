import { LitElement } from "lit";
import { customElement, property } from "lit/decorators";

@customElement("lit-switch")
export default class Switch extends LitElement {
    @property({ type: Boolean }) checked = false;

}
