# Vanilla Node Backend

A project building out a simple backend with core Node modules (no express).

## What does it do?

We've built out a simple API and backend. Once the user submits a request to the input form, a `fetch` is sent to the server. This searches for bandmembers of Animal Collective, and if one of the members has been requested, the server responds with a JSON object containing their name, stage name, and the album on which they first appeared. This gets inserted into the DOM viewable by the user.