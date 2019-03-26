This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
Please fork this repo or send it across as a zip file without the node_modules

## Table of Contents

- [Intro](#intro)
- [Running your app](#running-your-app)
  - [npm run server](#npm-run-server)
  - [npm run client](#npm-run-client)
  - [npm run test](#npm-run-test)
- [Background](#background)
- [Task](#task)

## Running your app

### `npm run server`

Runs your express server.<br>
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The server will just be returning you a json file based on the query parameters you are passing through. This will be your main route:`/measures`. Make sure you always pass the following query parameter: `?shoppingChannel=online` or `?shoppingChannel=instore`. If no query parameter is set, the route will throw a 400 error code.

### `npm run client`

Launches the client of the application in interactive watch mode.<br> Open [http://localhost:3000](http://localhost:3000). This is where you will be working adding your components.

### `npm run test`

Runs your client tests.
