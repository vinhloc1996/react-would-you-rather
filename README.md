# Would You Rather ...

React application to manage the votes and ask other people. 
- This application was built on the latest `React` version `18.1.0` and used latest version of other packages/dependencies as well (`react-router-dom` `6.3.0`, `@reduxjs/toolkit` `1.8.2`, .etc...). The entire application was bootstrapped by the `create-react-app 5.0.1`
- `react-bootstrap / bootstrap` was used to design the website interface (I'm not a designer. Don't need to judge my design!)

## Install packages for the project

In the project directory, run:

### `npm install`

## Run project

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm start` OR `yarn start`

## Project structure
```bash
├── README.md - # Brief introduce about the project and instructions to install/run the project
├── package.json # npm package manager file
├── public # Stores icon/images for project startup
│   └── avatars # Default Avatars for users
│       └── index.html # Default template. DO NOT MODIFY!
└── src
    ├── components # React components folder
    │   ├── AddQuestionPage.js # Page for adding new Question
    │   ├── AnsweredQuestion.js # Component displays all the answered questions for a user
    │   ├── UnansweredQuestion.js # Component displays all the unanswered questions for a user
    │   ├── App.js # Root component for the react application
    │   ├── Dashboard.js # Component displays both tabs for answered and unanswered questions for a user
    │   ├── HomePage.js # Page for rendering the first page when user entering the application
    │   ├── LastSeen.js # Component handles the time when the questions've been posted
    │   ├── LeaderboardPage.js # Page for showing the leaderboard of all users
    │   ├── Nav.js # Navigate component displays a navigation bar, allow user to navigate to different pages
    │   ├── NotFoundPage.js # Page to handle the unwanted request
    │   ├── Question.js # Question component to handle questions logic and display the correct type of question
    │   ├── QuestionPage.js # Page to display a specific question when user clicked on
    │   └── SignIn.js # Component displays and handles Sign In/Sign Up logics
    ├── actions # Redux actions folder
    │   └── authedUser.js # Stores action types for authedUser (SignIn)
    │   └── questions.js # Stores action types for questions
    │   └── share.js # Stores action types for general uses (init api call)
    │   └── users.js # Stores action types for users 
    ├── middlewares # Redux middlewares folder
    │   └── logger.js # Define middleware to log everything whenever a store is being dispatched
    │   └── index.js # Export middleware for the index.js uses
    ├── reducers # Redux reducers folder
    │   └── authedUser.js # Stores reducer for authedUser
    │   └── questions.js # Stores reducer for questions
    │   └── index.js # Export all reducers need to be consumed by Redux
    │   └── users.js # Stores reducer for users 
    ├── utils # Utilities folder
    │   └── _Data.js # Fake DB to store user/question data for application. Contains functions to fetch/save data.
    │   └── api.js # Encapsulate and export the API for application to connect to fake DB
    │   └── helpers.js # Contains all helpers method for entire application
    ├── index.css # Global styles for the application
    └── index.js # Global config for the react application. Setup store for Redux
```