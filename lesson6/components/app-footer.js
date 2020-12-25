import {LitElement, html, css}  from 'lit-element';

class Footer extends LitElement {

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