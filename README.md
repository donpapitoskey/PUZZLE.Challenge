This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### React Challenge - Of Rick & Morty 

This is a project developed to explore the design of an application to consume Back-end information of topic -Rick & Morty-. 

The application itself allows the user to search for names of characters, episodes or locations of the series and retrieve the informatión from this [API](https://rickandmortyapi.com/graphql).

In the left section of the page, the user can select the type of search the application will perform between "Characters", "Locations" and "Episodes". In the upper section, the user can write down the search criteria words in two search boxes; one for the "Name" field and another for "Type" field. A screenshot of the main view is shown below: 
![mainView](https://user-images.githubusercontent.com/59004502/92009119-a5308680-ed0d-11ea-9423-d987434f0b47.PNG)

For the search to work properly, the user must write down more than 3 letters in one of the fields and press `Enter`. The search will obtain cards with information related to the criteria searche fields. In example, for obtaining information cards about the characters with the letters `rick`, the application will display some the screen shown below:
![image](https://user-images.githubusercontent.com/59004502/92009022-803c1380-ed0d-11ea-88a9-7e2de6361c29.png)

Once obtained the cards, the user can click the cards and display further information about the selected character/location/episode as shown in the image below:
![image](https://user-images.githubusercontent.com/59004502/92009872-baf27b80-ed0e-11ea-8f79-f0fe7b95ba2a.png).

If the back end could not resolve the search, a screen will be displayed as shown below:

![image](https://user-images.githubusercontent.com/59004502/92010234-2f2d1f00-ed0f-11ea-8b1b-0f99c7328e7e.png)

##

## Main libraries

The necessary libraries for the development of this project were:

    - "@material-ui/core": "^4.11.0"
    - "@material-ui/icons": "^4.9.1"
    - "@material-ui/lab": "^4.0.0-alpha.56"
    - "@testing-library/jest-dom": "^5.11.3"
    - "@testing-library/react": "^10.4.8"
    - "@testing-library/user-event": "^12.1.1"
    - "apollo-boost": "^0.4.9"
    - "apollo-client": "^2.6.10"
    - "bulma": "^0.9.0"
    - "cra-template": "1.0.3"
    - "graphql": "^15.3.0"
    - "node-sass": "^4.14.1"
    - "prop-types": "^15.7.2"
    - "react": "^16.13.1"
    - "react-apollo": "^3.1.5"
    - "react-bootstrap": "^1.3.0"
    - "react-dom": "^16.13.1"
    - "react-fontawesome": "^1.7.1"
    - "react-modal": "^3.11.2"
    - "react-redux": "^7.2.1"
    - "react-scripts": "3.4.3"
    - "redux": "^4.0.5"
    - "redux-devtools": "^3.6.1"
    - "redux-thunk": "^2.3.0"

## Available Scripts

In the project directory, you can run:

### `yarn install`

Installs the necessary libraries listed above.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
