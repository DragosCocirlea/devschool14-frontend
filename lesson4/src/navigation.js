class Navigation extends HTMLElement {
    constructor() {
        super()
        
        const _nav = document.createElement("nav");
        _nav.innerHTML = `
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
        <slot name="example"></slot>
        `
        const _style = document.createElement("style");
        _style.innerHTML = `
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

          :host {
            flex-grow: 1;
            display: flex;
            justify-content: center;
            text-align: center;
            font-weight: bold;
          }
        `

        this._shadowRoot = this.attachShadow({mode : "open"});
        this.shadowRoot.appendChild(_nav);
        this.shadowRoot.appendChild(_style);
    }

    static get observedAttributes() {
        return ['color'];
    }

    connectedCallback() {
        console.log("I am conntected");
    }
    
    disconnectedCallback() {
        console.log("I am disconntected");
    }
    
    adoptedCallback() {
        console.log("I am adopted");
    }

    attributeChangedCallback(name, oldVal, newVal) {
        console.log('changed color', name, oldVal, newVal);
    }

    updateStyle(element) {
        const style = element.shadowRoot.querySelector('style');
        style.innerHTML = `
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

          :host {
            flex-grow: 1;
            display: flex;
            justify-content: center;
            text-align: center;
            font-weight: bold;
          }
        `
    }

}

export default customElements.define(`navigation-element`, Navigation)