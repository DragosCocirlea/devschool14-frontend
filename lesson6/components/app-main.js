import {LitElement, html, css}  from 'lit-element';

import "./app-header.js"
import "./app-footer.js"
import "./about.js"
import "./articles.js"

class Main extends LitElement {

    render() {
        return html`
            <app-header>
                <h1 slot="title">Welcome to Cloud Travel!</h1>
            </app-header>

            <main>
                <app-about></app-about>
                <app-articles></app-articles>
            </main>

            <app-footer></app-footer>
        `
    }

    static get styles() {
        return css`
            main {
                margin: 30px 10px;
        }
        `
    }
}

export default customElements.define(`app-main`, Main);