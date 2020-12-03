import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

import "./article.js"

class Articles extends LitElement {

    constructor() {
        super();

        this.articles = [{}, {}, {}]
    }

    render() {
        return html`
            <section>
            ${this.articles.map((article, id) => {
                return html`
                    <app-article .id="${id + 1}"></app-article>
                `
                }
            )}
            </section>
        `
    }

    static get properties() {
        return {
            articles: {type: Array}
        }
    }

    static get styles() {
        return css`
            section {
                display: block;
                margin: auto
            }
        `
    }
}

customElements.define(`app-articles`, Articles);