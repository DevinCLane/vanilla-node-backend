# Vanilla Node Backend

A project building out a simple backend with core Node modules (no express).

## What does it do?

We've built out a simple API and backend. Once the user submits a request to the input form, a `fetch` is sent to the server. This searches for bandmembers of Animal Collective, and if one of the members has been requested, the server responds with a JSON object containing their name, stage name, and the album on which they first appeared. This gets inserted into the DOM, viewable by the user.

## Reflections

-   One can build out a server using core Node modules, though we are responsible for every [MIME type](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Configuring_server_MIME_types), HTTP request, routing, etc. Express can help us out with this.
-   Using `<datalist>` and `<option>` semantic HTML elements can provide drop down suggestions on an input field.

## Install

Install dependencies:

`npm install`

Run local server:

`npm run start`
