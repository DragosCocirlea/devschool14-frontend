import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

import Article from './article.js'

class Articles extends LitElement {

    constructor() {
        super();
        this.articles = []
    }

    connectedCallback() {
        super.connectedCallback()
        this.getArticles()
    }

    async getArticles() {
        fetch('https://devschool-2020.firebaseio.com/dragoscocirlea/articles.json')
        .then((response) => response.json())
        .then((data) => {

            for (var key in data) {
                // get json object
                var body = JSON.stringify(data[key])
                var jsonBody = JSON.parse(body)
                
                // create new article object from json
                var newArticle = {
                    id: key,
                    title: jsonBody.title,
                    subtitle: jsonBody.subtitle,
                    description: jsonBody.description,
                    imageURL: jsonBody.imageURL
                }

                // append new article
                this.articles = [...this.articles, newArticle]
            }
        });
    }

    render() {

        return html`
            <section>
            ${this.articles.map((article, id) => {
                return html`
                    <app-article
                        .inverted="${id % 2 == 1}"
                        .id="${article.id}"
                        .title="${article.title}"
                        .subtitle="${article.subtitle}"
                        .description="${article.description}"
                        .imageURL="${article.imageURL}"
                    >
                    </app-article>
                `
                }
            )}
            </section>
        `
    }

    static get properties() {
        return {
            articles: {type: Article}
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