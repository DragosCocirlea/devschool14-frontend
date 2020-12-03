import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

import "./todo.js"

class Todos extends LitElement {
    constructor() {
        super()
        this.title = "Todo Title"
        this.todos = [
            {
                name: "Spala vase",
                done: true
            },
            {
                name: "Du gunoiul",
                done: false
            }
        ]
    }

    static get styles() {
        return css`
        `;
    }

    static get properties() {
        return {
            todos: {type: Array},
            title: {type: String}
        }
    }

    render() {
        return html`
        <h2>${this.title}</h2>
        <ul>
            ${this.todos.map((item, index) => {
                return html`
                    <my-todo .name=${item.name} .done=${item.done}></my-todo>
                `;
            })}
        </ul>
        `;
    }

}

customElements.define("my-todos", Todos)