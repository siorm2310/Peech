# Peech - Home assignment

This assignment is a simplified version of Peech's smart video editing platform
This REST API allows for the filtration of a JSON file, representing real video files according to different user inputs

## Technologies

- backend : Nodejs
    - express as an http server
        - es6 syntax
        - following the SOLID principals, routes and controllers are decoupled (dependency inversion)
        - a models directory is used for demonstrating the 'real life' use of an ORM

## How to run

To create a simple development instance of this service, simply use the 
`npm run dev` command

## Thought Process

- This is an API - we need to create it so other service may consume it upon request with ease
- we don't need to invent the wheel - we'll use expressJS as our http server 
- we need a convension in orginizing our file structure - we'll use a popular one

## routes
- API
    - filter
        - filter by strict equal
        - filter by partial match
        - filter by range match

## Problems we had in the way and solutions
- choose between GET and POST routes - Because filtering results is a "safe" operation - we opted for GET
- passing parameters through the url - Express handles the parsing
- passing a random string as a parameter will cause the app to throw an expected error - handled by validating the input
- filtering a field that is an array of itself - handled by the JS interpreter by default