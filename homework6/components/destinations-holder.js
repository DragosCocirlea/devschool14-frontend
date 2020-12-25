import {LitElement, html, css}  from 'lit-element';

import Destination from "./destination.js"

class DestinationsHolder extends LitElement {

    connectedCallback() {
        super.connectedCallback()
        this.getDestinations()
    }

    async getDestinations() {
        fetch('https://devschool-2020.firebaseio.com/dragoscocirlea/destinations.json')
        .then((response) => response.json())
        .then((data) => {

            var newDestinations = []

            for (var key in data) {
                // get json object
                var body = JSON.stringify(data[key])
                var jsonBody = JSON.parse(body)
                
                // create new destination object from json
                var newDestination = {
                    id: key,
                    title: jsonBody.title,
                    description: jsonBody.description,
                    imageURL: jsonBody.imageURL
                }

                // append new destination
                newDestinations = [...newDestinations, newDestination]
            }

            this.destinations = newDestinations
        });
    }

    render() {
        return html`
            <div class="destinations-container">
            ${this.destinations.map((destination) => {
                return html`
                    <app-destination class="destination"
                        .id="${destination.id}"
                        .title="${destination.title}"
                        .description="${destination.description}"
                        .imageURL="${destination.imageURL}"
                    >
                    </app-destination>
                `
                }
            )}
            </div>
        `
    }

    static get properties() {
        return {
            destinations: {type: Destination}
        }
    }

    static get styles() {
        return css`
            .destinations-container {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
            }

            .destination {
                flex-grow: 1;
                width: 40%;
                margin: 10px;
                padding: 20px 20px;
                background-color: antiquewhite;
                box-sizing: border-box;
            }
            
            @media screen and (max-width: 801px) {
                .destination-container {
                    flex-direction: column;
                    align-items: center;
                }

                .destination {
                    width: 95%;
                }
            }
        `
    }
}

export default customElements.define(`app-destinations`, DestinationsHolder);