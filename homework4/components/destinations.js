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
                    <app-destination class="destination" .id="${id + 1}"></app-destination>
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

            .destination {
                flex-grow: 1;
                width: 40%;
                margin: 10px;
                padding: 10px 30px;
                background-color: antiquewhite;
                box-sizing: border-box;
            }
            
            @media screen and (max-width: 801px) {
                .destination-container {
                    flex-direction: column;
                    align-items: center;
                }

                .destination {
                    width: 95%;
                }
            }
        `
    }
}

customElements.define(`app-destinations`, Destinations);