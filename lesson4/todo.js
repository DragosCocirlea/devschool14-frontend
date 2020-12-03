import {
    LitElement, html, css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

class Todo extends LitElement {
    constructor() {
        super()
    }

    static get properties() {
        return {
            name: {type: String},
            done: {type: Boolean}
        }
    }
    
    static get styles() {
        return css`
            .todo-checked {
                color: red
            }
        `;
    }

    render() {
        return html`
            <div class="${this.done ? "todo-checked" : ""}">
            ${this.name}
            <input type="checkbox" ?checked="${this.done}" @click="${(event) => this.handleCheck(event, index)}"/>
            </div>
        `
    }

    handleCheck(event, index) {
        const new_todos = [...this.todos]
        new_todos[index].done = event.currentTarget.checked

        this.todos = new_todos
    }
}

export default customElements.define("my-todo", Todo)
