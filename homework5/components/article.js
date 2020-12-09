import {LitElement, html, css} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class Article extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="${this.inverted ? "article-normal" : "article-reverse"}">
                <picture class="article-picture" alt="${this.title}">
                    <img src="https://picsum.photos/seed/${this.id}/1000/600">
                </picture>
                
                <div class="article-text">
                    <h2>${this.title}</h2>
                    <h4>${this.subtitle}</h4>
                    <p>${this.description}</p>
                </div>
            </div>
        `
    }

    static get properties() {
        return {
            inverted: {type: Boolean},
            id: {type: String},
            title: {type: String},
            subtitle: {type: String},
            description: {type: String},
            imageURL: {type: String}
        }
    }

    static get styles() {
        return css`
            .article-normal {
                background-color: antiquewhite;
                display: flex;
                flex-direction: row;
            }
            
            .article-reverse {
                background-color: antiquewhite;
                display: flex;
                flex-direction: row-reverse;
            }
            
            .article-picture {
                flex: 3;
            }
            
            .article-picture img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
            .article-text {
                flex: 2;
                margin: 10px;
                padding: 10px 30px;
            }
        `
    }
}

export default customElements.define(`app-article`, Article);