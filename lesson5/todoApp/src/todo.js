import {
    LitElement, html, css
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class Todo extends LitElement {
    static get styles() {
        return css`
                .todo-checked {
                    color: red;
                    text-decoration: line-through;
                }
            `;
    }

    static get properties() {
        return {
            id : {type: Number},
            title: {type: String},
            done: {type: Boolean},
            state: {type: String}
        }
    }

    constructor() {
        super();
    }

    render() {
        return html`
                <div class="${this.done ? "todo-checked" : ""}">
                    
                    ${this.state == "editing" ?
                        html`
                            <input id="new-title" value=${this.title}>
                            <button @click="${this.handleSaveEditClick}">Save</button>
                            <button @click="${this.handleCancelEditClick}">Cancel</button>
                        `
                        :
                        html`
                            ${this.title}
                            <input type="checkbox" ?checked="${this.done}" @click="${this.handleCheckboxClick}"/>
                            <button @click="${this.handleEditClick}">Edit</button>
                        `}
                    
                </div>
            `;
    }

    handleCheckboxClick(event) {
        this.dispatchEvent(new CustomEvent("checkboxClickEvent", {
            detail: {
                id: this.id,
                done: event.target.checked,
            }
        }));
    }

    handleEditClick(event) {
        this.state = "editing";
    }

    handleCancelEditClick(event) {
        this.state = "";
    }

    handleSaveEditClick(event) {
        this.state = "";

        this.dispatchEvent(new CustomEvent("todoUpdateTitle", {
            detail: {
                title: this.shadowRoot.querySelector("#new-title").value,
                id: this.id
            }
        }));
    }
}

export default customElements.define("my-todo", Todo);