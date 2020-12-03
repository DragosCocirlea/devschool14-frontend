import "./navigation.js";

class Header extends HTMLElement {
    constructor() {
        super();

        const _header = document.createElement('header');
        const _style = document.createElement('style');

        _header.innerHTML = `
            <navigation-element color="white"></navigation-element>
        `;

        _style.innerHTML = `
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          font-size: 62.5%;
          font-family: "Roboto", sans-serif;
        }
        
        @media screen and (max-width: 320px) {
          html {
            font-size: 50%;
          }
        }
        body {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }
        
        h1 {
          font-size: 2.5rem;
          color: white;
        }
        
        h2 {
          font-size: 4.5rem;
          padding: 2rem 0;
        }
        
        h3 {
          font-size: 4rem;
        }
        
        h4 {
          font-size: 3rem;
        }
        
        a {
          color: white;
          min-height: 2.5rem;
          font-size: 2.5rem;
          font-weight: lighter;
          text-decoration: none;
        }
        
        .icon {
          min-height: 3.1rem;
          font-size: 3.1rem;
        }
        
        p {
          font-family: "Open Sans", sans-serif;
          font-size: 2.2rem;
        }
        
        header {
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1;
        }
        
        header {
          background-color: #070707;
          margin-bottom: 2rem;
        }
        `;

        this._shadowRoot = this.attachShadow({mode: "open"});
        this._shadowRoot.appendChild(_header);
        this._shadowRoot.appendChild(_style);
    }
}

customElements.define('header-element', Header);