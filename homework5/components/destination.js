import {LitElement, html, css} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class Destination extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="destination">
                <picture class="destination-picture" alt="${this.title}">
                    <img src="https://picsum.photos/seed/${this.id}/900/600">
                </picture>
                
                <h2>${this.title}</h2>
    
                <p>${this.description}</p>
    
                <a target="_black" href="https://www.google.com/search?q=${this.title}">More details</a>
            </div>
        `
    }

    static get properties() {
        return {
            id: {type: String},
            title: {type: String},
            description: {type: String},
            imageURL: {type: String}
        }
    }

    static get styles() {
        return css`

            p {
                text-align: justify;
                text-justify: inter-word;
            }
            
            a {
                text-decoration: none;
                color: #0d2e42;
            }

            a:hover {
                color: cornflowerblue;
            }

            .destination-picture {
                display: block;
                text-align: center;
            }

            .destination-picture img {
                width: 100%;
                height: auto;
            }
        `
    }
}

export default customElements.define(`app-destination`, Destination);