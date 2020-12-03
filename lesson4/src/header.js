import './navigation.js'

class Header extends HTMLElement {
    constructor() {
        super()

        const _header = document.createElement('header')
        _header.innerHTML = `<navigation-element color="white"></navigation-element>`

        this._shadowRoot = this.attachShadow( {mode: "open"})
        this._shadowRoot.appendChild(_header);
    }
}

customElements.define(`header-element`, Header);