import {LitElement, html, css} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class Destination extends LitElement {

    constructor(id) {
        super();
    }

    render() {
        return html`
            <div class="destination">
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
            .destination {
                flex-grow: 1;
                width: 40%;
                margin: 10px;
                padding: 10px 30px;
                background-color: antiquewhite;
                box-sizing: border-box;
            }
            
            @media screen and (max-width: 801px) {    
                .destination {
                    width: 95%;
                }
            }
            
            .destination a {
                text-decoration: none;
                color: #0d2e42;
            }

            .destination a:hover {
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