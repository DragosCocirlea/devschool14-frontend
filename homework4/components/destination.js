import {LitElement, html, css} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class Destination extends LitElement {

    constructor(id) {
        super();
    }

    render() {
        return html`
            <div>
                <picture class="destination-picture" alt="London">
                    <img src="https://picsum.photos/900/600">
                </picture>
                
                <h2>Destination ${this.id}</h2>
    
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, laboriosam. Dolores error perspiciatis voluptatem quae accusantium labore ratione corrupti incidunt dicta distinctio? Aliquid blanditiis quos, iusto maiores deleniti quia doloremque magnam perspiciatis, vel officia illo doloribus labore consequatur accusantium architecto dolore iste cum eligendi adipisci tempore, atque in quasi repudiandae?</p>
    
                <a target="_black" href="https://www.google.com">More details</a>
            </div>
        `
    }

    static get properties() {
        return {
            id: {type: Number}
        }
    }

    static get styles() {
        return css`
            
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

customElements.define(`app-destination`, Destination);