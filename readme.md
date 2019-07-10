# Gift

## Initial setup

### Compile the backend

`cd server`

`gradle build`

### Install client dependencies

`cd client`

`npm install`

### Linting

`cd client`

`npm run lint`

### Configure the database

`cd database`

`gradle flywayClean`

`gradle flywayMigrate`

## Running the app

### Run the server

`cd server`

`gradle bootrun`

### Run the client

`cd client`

`npm run dev`

### How to manually check everything is fine

* Server: go to <http://localhost:8080/api/v1/projects/portfolio/1>
* Client: navigate to <http://localhost:4090/#/>

It should show an API response and the gift dahboard page.

## Running tests

* Validate database:      database / gradle flywayValidate
* Frontend unit tests:    client / npm run test
* Backend unit tests:     server / gradle test -i
* API integration tests:  server / gradle integrationtest -i
* UI tests:               client / npm run e2e

## Continuous Integraton build

`gradle cibuild -i`

This will:

1. Install client dependencies and run unit tests
2. Compile the server and run the unit tests
3. Validate the database migratons in a H2 database (in-memory)

## Deploy App to Heroku

### Configure CLI

Install Heroku CLI and login: <https://devcenter.heroku.com/articles/heroku-cli#download-and-install>

`heroku login`

### Deploy with gradle

First make sure to compile the client and the server (npm run build, gradle build).

Then, deploy to heroku. We use this plugin: <https://github.com/heroku/heroku-gradle>

`gradle :cloud:deployHeroku`

## Deploy database to the cloud service

`gradle :cloud:flywayMigrate`
