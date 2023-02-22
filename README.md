# WalLot
## WalLot - Personal Finance Management Application
WalLot is a full-stack web application that allows users to store personal financial data, set personal budgets, set spending goals, and provides monthly budget recommendations. The application uses Node.js, Express.js, Handlebars.js, MySQL, Sequelize, and other technologies to create a RESTful API that communicates with a MySQL database. The application also connects to the Zillow API to provide local data for calulating monthly budget recommendations. The application is deployed on Heroku and uses JawsDB for the database.

## Features
Store personal financial data
Set personal budgets and spending goals
Get monthly budget recommendations based on financial data and spending goals
Use Node.js and Express.js to create a RESTful API
Use Handlebars.js as the template engine
Use MySQL and the Sequelize ORM for the database
Uses both GET and POST routes for retrieving and adding new data
Includes authentication (express-session and cookies)

## Installation

### To install the application, follow these steps:

Clone the repository to your local machine.
Run npm install in the root directory of the project to install all the required NPMs.
Create a .env file in the root directory of the project and add your environment variables (e.g., database credentials, API keys).
Run the SQL schema and seeds files to set up the database and add initial data.
Run npm start to start the server. The application should now be running on http://localhost:3001.

## Usage
### To use the application, follow these steps:

Open your web browser and go to http://localhost:3001.
Sign up for a new account or log in to an existing account.
Add your financial data (e.g., income, expenses, debts, assets).
Set your spending goals (e.g., mortgage, student loans, car loans).
Get monthly budget recommendations based on your financial data and spending goals.
Update your financial data, spending goals, and personal budgets as needed.

## Contributing
### If you would like to contribute to the development of the application, please follow these steps:

Fork the repository to your own GitHub account.
Clone the forked repository to your local machine.
Create a new branch for your changes.
Make your changes and commit them with clear commit messages.
Push your changes to your forked repository.
Submit a pull request to the original repository.

# Credits
## This application was developed by Group 3 of the Columbia Engineering Bootcamp by: Hassimiou Diallo, Matt Kaye, Matt Provost, Savita Manchanda and Seiya Miyazaki. The application uses the following technologies:

Node.js
Express.js
Handlebars.js
MySQL
Sequelize
Zillow API

# License
## This application is licensed under the MIT License.




