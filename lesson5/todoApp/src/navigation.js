
class Navigation extends HTMLElement {
    constructor() {
        super();

        const _style = document.createElement('style');
        const _nav = document.createElement('nav');
        _nav.innerHTML = `
        <div class="nav-container">
            <h1 id="logo">ING Tech Travel</h1>
            <nav>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">-->
                    <i class="fa fa-bars"></i>
                </a>
                <a href="index.html">Home</a>
                <a href="destinations.html">Destinations</a>
                <a href="#">Language</a>
            </nav>
        </div>
        <slot name="title"></slot>
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
       
            .nav-container {
              width: 80%;
              margin: auto;
              padding: 1.5rem 0;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .nav-container nav {
              display: flex;
              justify-content: space-evenly;
              flex: 2;
            }
            .nav-container nav .icon {
              display: none;
            }
            .nav-container #logo {
              flex: 3;
            }
            @media screen and (max-width: 1200px) {
              .nav-container nav {
                justify-content: flex-end;
              }
              .nav-container nav a {
                display: none;
              }
              .nav-container nav a.icon {
                display: flex;
              }
            }
            @media screen and (max-width: 1200px) {
              .nav-container nav.responsive {
                display: flex;
                flex-direction: column;
              }
              .nav-container nav.responsive a {
                display: block;
                text-align: right;
                padding-bottom: 1rem;
              }
            }
            @media screen and (max-width: 1200px) {
              .nav-container {
                display: flex;
                align-items: flex-start;
              }
            }
        `;

        this._shadowRoot = this.attachShadow({mode: 'open'});
        this._shadowRoot.appendChild(_nav);
        this._shadowRoot.appendChild(_style);
    }

    static get observedAttributes() {
        return ['color'];
    }

    connectedCallback() {
        console.log("Hello from callback");
    }

    disconnectedCallback() {
        console.log("Hello from disconnected");
    }

    adoptedCallback() {
        console.log("Hello from adopted");
    }

    attributeChangedCallback(name, oldVal, newVal) {
        console.log("Changed color: ", name, oldVal, newVal);

        this.updateStyle(this);
    }

    updateStyle(element) {
        const style = element.shadowRoot.querySelector("style");

        style.innerHTML = `
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
              color: ${element.getAttribute('color')};
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
       
            .nav-container {
              width: 80%;
              margin: auto;
              padding: 1.5rem 0;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .nav-container nav {
              display: flex;
              justify-content: space-evenly;
              flex: 2;
            }
            .nav-container nav .icon {
              display: none;
            }
            .nav-container #logo {
              flex: 3;
            }
            @media screen and (max-width: 1200px) {
              .nav-container nav {
                justify-content: flex-end;
              }
              .nav-container nav a {
                display: none;
              }
              .nav-container nav a.icon {
                display: flex;
              }
            }
            @media screen and (max-width: 1200px) {
              .nav-container nav.responsive {
                display: flex;
                flex-direction: column;
              }
              .nav-container nav.responsive a {
                display: block;
                text-align: right;
                padding-bottom: 1rem;
              }
            }
            @media screen and (max-width: 1200px) {
              .nav-container {
                display: flex;
                align-items: flex-start;
              }
            }
        `
    }
}

export default customElements.define('navigation-element', Navigation);
