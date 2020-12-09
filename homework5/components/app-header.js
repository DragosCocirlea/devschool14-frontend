import {LitElement, html, css} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class Header extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="top-bar">
                <img class="logo" src="logo.png">
                <nav class="nav-site">
                    <ul class="nav-list">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <a href="destinations.html">Destinations</a>
                        </li>
                        <li>
                            <a href="">Language</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <slot name="title"></slot>
        `
    }

    static get styles() {
        return css`
            * {
                font-family: sans-serif;
            }
            
            .top-bar {
                background-color: darkcyan;
                position: sticky;
                top: 0;
                display: flex;
                align-items: center;
            }
            
            .logo {
                width: 150px;
                height: 50px;
            }
            
            .nav-site {
                flex-grow: 1;
                display: flex;
                justify-content: center;
                text-align: center;
                font-weight: bold;
            }
            
            ::slotted(*) {
                margin: 30px 0px 0px 10px;
                padding: 0px 40px;
                text-align: center;
            }
            
            .nav-list {
                list-style: none;
                display: flex;
                margin: 0 0;
                }
            
            .nav-list li a {
                display: block;
                margin: 0px 20px;
                text-decoration: none;
                color: #0d2e42;
                }
            
            .nav-list li a:hover {
                color: lightcyan;
            }
        `
    }
}

customElements.define(`app-header`, Header);