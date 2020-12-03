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

    connectedCallback() {
        super.connectedCallback();
        // const iAmYoda = new Promise((resolve, reject) => {
        //     const person = 'Yoda';
        //     if (person === 'Yoda') {
        //         resolve('I am Yoda')
        //     } else {
        //         reject('I am ' + person)
        //     }
        // });

        // const promise2 = new Promise((resolve, reject) =>
        //     setTimeout(reject, 500, "not ok"
        // ))
        
        // const promise3 = new Promise((resolve, reject) =>
        //     setTimeout(reject, 1000, "super not ok"
        // ))

        // iAmYoda
        //     .then((response) => console.log(response))
        //     .catch((error) => console.log(error))
        //     .finally(() => console.log('in finally'))

        // Promise.all([iAmYoda, promise2, promise3])
        //     .then((response) => console.log(response))
        //     .catch((error) => console.log(error))

        // Promise.any([iAmYoda, promise2, promise3])
        //     .then((response) => console.log(response))
        //     .catch((error) => console.log(error))

        // Promise.race([iAmYoda, promise2, promise3])
        //     .then((response) => console.log(response))
        //     .catch((error) => console.log(error))

        this.getPosts();
        this.getPosts2();
    }


    getPosts() {
        const axios = window.axios;
        // axios
        //     .get('https://jsonplaceholder.typicode.com/posts')
        //     .then((response) => console.log(response))
        //     .catch((error) => console.log(error))

        // axios.post('https://jsonplaceholder.typicode.com/posts', {
        //         title: 'foo',
        //         body: 'bar',
        //         userId: 1
        //     }, {
        //         headers: {
        //             'content-type': 'multipart/form-data',
        //             'Authorization': 'Bearer ceva-tokenx'
        //         }
        //     })
        //     .then((response) => console.log(response))

        // axios.request({
        //     url: 'https://jsonplaceholder.typicode.com/posts',
        //     method: 'POST',
        //     data: {
        //         title: 'foo',
        //         body: 'bar',
        //         userId: 1
        //     }
        // })
        // .then((response) => console.log(response))

        // const request = axios.create({
        //     baseURL: 'https://jsonplaceholder.typicode.com/',
        //     timeout: 100,
        //     header: {
        //         'content-type': 'multipart/form-data',
        //         'Authorization': 'Bearer ceva-tokenx'
        //     }
        // });

        // request.get('posts')
        // .then((response) => console.log(response))
        // .catch((error) => console.log(error))

        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then((response) => response.json())
        // .then((data) => console.log(data))
        
        // const body = {
        //     title: 'foo',
        //     body: 'bar',
        //     userId: 1
        // }
        
        // fetch('https://jsonplaceholder.typicode.com/posts', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(body)
        // })
        // .then((response) => response.json())
        // .then((data) => console.log(data))
    }

    
    async getPosts2() {
        const axios = window.axios;
        
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/jaja')
            console.log(response)
        } catch (error) {
            console.log(error)
        }
            


        console.log('La sf metodei')
    }
}

customElements.define(`app-header`, Header);