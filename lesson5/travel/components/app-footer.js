import {LitElement, html, css} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class Footer extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html`
            <footer>
                <p>&copy; - Dragos C, DevSchool 2020</p>
            </footer>
        `
    }

    static get styles() {
        return css`
        footer {
            background-color: darkcyan;
            display: flex;
            justify-content: center;
        }
        `
    }
}

customElements.define(`app-footer`, Footer);