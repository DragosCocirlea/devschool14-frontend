import {LitElement, html, css}  from 'lit-element';

import "./app-header.js"
import "./destinations.js"
import "./app-footer.js"

class MainDestinations extends LitElement {

    render() {
        return html`
            <header>
                <app-header>
                    <h1 slot="title">Destinations</h1>
                </app-header>
            </header>

            <main>
                <app-destinations></app-destinations>
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

export default customElements.define(`main-destinations`, MainDestinations);