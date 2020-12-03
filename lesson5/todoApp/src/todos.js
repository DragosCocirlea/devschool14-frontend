import {html, LitElement} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

import Todo from "./todo.js";

class Todos extends LitElement {
    static get styles() {
    }

    static get properties() {
        return {
            todos: {type: Todo},
        }
    }

    constructor() {
        super();

        this.title = "Titlu";
        this.todos = [
            {
                title: "Wash Dishes",
                done: true
            },
            {
                title: "Do Laundry",
                done: false
            }
        ];
    }

    render() {
        return html`
            <h2> ${this.title} </h2>
            
            <form @submit="${this.handleTodoSubmit}">
                <input type="text" placeholder="New Todo" name="todoTitle" id="todoTitle">
                <input type="submit" value="Add">
            </form>
            
            <ul>
                ${this.todos.map((todo, index) => {
                    return html`
                        <my-todo 
                                .id="${index}" 
                                .title="${todo.title}" 
                                .done="${todo.done}"
                                @checkboxClickEvent="${this.handleCheckboxClickEvent}"
                                @todoUpdateTitle="${this.handleTodoUpdateTitle}">
                        </my-todo>
                    `
                })}
            </ul>
        `;
    }

    handleCheckboxClickEvent(event) {
        const id = event.detail.id
        const done = event.detail.done

        let newTodos = [...this.todos]
        newTodos[id].done = done
        this.todos = newTodos
    }

    handleTodoUpdateTitle(event) {
        const id = event.detail.id
        const title = event.detail.title

        console.log(title)

        let newTodos = [...this.todos]
        newTodos[id].title = title
        this.todos = newTodos
    }

    handleTodoSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.target)

        this.todos = [...this.todos, {title: formData.get("todoTitle"), done: false}]
    }

    

}

customElements.define("my-todos", Todos);
