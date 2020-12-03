import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

import "./destination.js"

class Destinations extends LitElement {

    constructor() {
        super();

        this.destinations = [{}, {}, {}, {}, {}, {}]
    }

    render() {
        return html`
            <div class="destinations-container">
            ${this.destinations.map((destination, id) => {
                return html`
                    <app-destination .id="${id + 1}"></app-destination>
                `
            }
        )}
            </div>
        `
    }

    static get properties() {
        return {
            destinations: {type: Array}
        }
    }

    static get styles() {
        return css`
            .destinations-container {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
            }
            
            @media screen and (max-width: 801px) {
                .destination-container {
                    flex-direction: column;
                    align-items: center;
                }
            }
        `
    }
}

customElements.define(`app-destinations`, Destinations);