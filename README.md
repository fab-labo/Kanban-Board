# Kanban Board

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#constributing)
- [Questions](#questions)

## Description

The Kanban Board Project is a task management application that features a secure authentication system using JSON Web Tokens (JWT). Users can log in to access their Kanban board, where they can manage tasks efficiently. This project provides a seamless and secure task management experience, ensuring only authorized users can interact with the board while maintaining session security. 

## User Story
```
I WANT a Kanban board with a secure login page
SO THAT I can securely access and manage my work tasks 
```

## Acceptance Criteria
```
GIVEN a Kanban board with a secure login page
WHEN I load the login page
THEN I am presented with form inputs for username and password
WHEN I enter my valid username and password
THEN I am authenticated using JSON Web Tokens (JWT) and redirected to the main Kanban board page
WHEN I enter an invalid username or password
THEN I am presented with an error message indicating that the credentials are incorrect
WHEN I successfully log in
THEN a JWT is stored securely in the client's local storage for subsequent authenticated requests
WHEN I log out
THEN the JWT is removed from the client's local storage and I am redirected to the login page
WHEN I try to access the Kanban board page without being authenticated
THEN I am redirected to the login page
WHEN I remain inactive for a defined period
THEN my session expires, the JWT is invalidated, and I am redirected to the login page upon my next action
```

## Installation

- npm install

## Usage

- npm run dev

## Contributing

[Fabricio Laboriel](https://github.com/fab-labo)

## Questions

Email: [click here](mailto:fabriciolaboriel@gmail.com)
Github Profile: https://github.com/fab-labo 
