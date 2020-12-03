import {LitElement, html, css} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class About extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="about">
                <h2>About us</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam obcaecati praesentium numquam id a labore iusto modi alias recusandae. Reprehenderit sint quos voluptate saepe eum accusantium molestiae sit sapiente fuga recusandae! Nesciunt ex asperiores voluptate similique dolores, eos ipsum expedita illum magni quis obcaecati labore et. Esse, ducimus. Nulla, labore.</p>
            </div>
        `
    }

    static get styles() {
        return css`
        .about {
            margin: 10px;
            padding: 10px 30px;
        }
        `
    }
}

customElements.define(`app-about`, About);