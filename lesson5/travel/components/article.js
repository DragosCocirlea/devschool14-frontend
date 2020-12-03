import {LitElement, html, css} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class Article extends LitElement {

    constructor(id) {
        super();
    }

    render() {
        return html`
            <div class="article-normal">
                <picture class="article-picture" alt="Best holiday locations in Romania">
                    <img src="https://picsum.photos/1001/600">
                </picture>
                
                <div class="article-text">
                    <h2>Article ${this.id}</h2>
                    <h4>Subtitle for article ${this.id}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quo vero. Dolores voluptatibus omnis iste ea beatae. Qui unde error, aliquid tempore provident atque pariatur perspiciatis eligendi! Distinctio enim, autem eos voluptas quibusdam laudantium consectetur quae fugit voluptatum ipsa, libero illum assumenda veritatis illo suscipit! Ab qui maxime rerum quaerat dolores tempora fuga, amet impedit facere, sed soluta omnis, est eos a deleniti ducimus numquam tempore temporibus ea accusantium iste molestias? Optio, aliquid obcaecati nobis modi eaque consequuntur voluptates rem, eius nam harum dolore. Dolores, dolore, fuga, distinctio rem alias incidunt voluptates quaerat veritatis velit mollitia commodi? Quos dolor, quae corrupti esse sint possimus, beatae architecto aliquid amet debitis asperiores magni blanditiis pariatur labore natus similique suscipit accusantium perferendis nesciunt saepe! Consequatur nihil nisi qui provident vitae cumque dolorem, ut quibusdam rem, obcaecati voluptatum quo saepe temporibus sequi porro exercitationem eveniet beatae.</p>
                </div>
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
            }
            
            .article-text {
                flex: 2;
                margin: 10px;
                padding: 10px 30px;
            }
        `
    }
}

customElements.define(`app-article`, Article);