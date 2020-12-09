import {LitElement, html, css} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class About extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="about">
                <h2>About us</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis justo sed tellus ornare faucibus. Nam ullamcorper imperdiet est id malesuada. Donec convallis mi id libero hendrerit ornare. Donec viverra scelerisque nulla, sit amet venenatis tellus. Pellentesque mattis quam sit amet tortor tempus, eget laoreet ipsum accumsan. Aliquam pharetra, nunc non bibendum suscipit, nunc sem blandit eros, in mollis lorem dui eget lorem. Vestibulum consectetur ultrices scelerisque. Nulla consectetur elit non metus imperdiet, sed porttitor orci dignissim. Pellentesque accumsan augue vel lectus ultricies scelerisque. Donec justo nisi, hendrerit id bibendum a, dapibus at odio. Sed dictum dui in tellus mollis finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus sapien elit, egestas eget suscipit ac, lobortis id justo. Etiam nunc nunc, ullamcorper sit amet tincidunt finibus, convallis volutpat nulla. Donec ut leo felis.
                
                In hac habitasse platea dictumst. Nunc euismod sapien et lorem tincidunt sagittis. Pellentesque in diam pretium sem vulputate consequat sed sed purus. In hac habitasse platea dictumst. Sed dignissim, ipsum vel vulputate vehicula, justo sapien hendrerit massa, vitae varius metus sapien eu lectus. Morbi vel justo at ex elementum vehicula eget quis ex. Nullam eros nulla, interdum non eleifend sed, ultrices. </p>
            </div>
        `
    }

    static get styles() {
        return css`
        .about {
            margin: 10px;
            padding: 10px 30px;
        }

        .about p {
            text-align: justify;
            text-justify: inter-word;
        }
        `
    }
}

customElements.define(`app-about`, About);