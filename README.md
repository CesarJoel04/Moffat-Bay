# Moffat-Bay
## Project 1: Moffat Bay Lodge
### Contributors
- Cesar Estevez Peralta
- Daniel Shively
- Praveen Theerthagiri
- Sam Bachman


Setting up on local env:

Prerequisites
Before starting, ensure that each team member has the following installed on their local system:

Git - For version control and cloning the repository.
Node.js - To run the backend server.
npm (Node Package Manager) - To install dependencies.
MySQL - As the database for the application.
MySQL Workbench (optional, but helpful) - For database management.
Setting Up the Project
1. Clone the Repository

To clone the repository and start working on the project, follow these steps:

# Open your terminal and run:
git clone git@github.com:CesarJoel04/Moffat-Bay.git
cd Moffat-Bay
This command clones the repository to your local machine and changes the directory to the project folder.

2. Install Backend Dependencies

Navigate to the backend directory and install necessary Node.js dependencies:

cd backend
npm install
This step installs all the packages required for the backend to run.

3. Set Up the Database

Use MySQL Workbench or the MySQL command-line client to create and set up the database:

Create the Database: If a SQL script is provided, run it within MySQL Workbench or from the MySQL command-line to set up your database structure and initial data.
Configure the Connection: Ensure that db.js or any configuration files in the backend use the correct settings (host, user, password, database name) to connect to MySQL.
4. Start the Backend Server

From the backend directory, run the server:

npm start
Check the console to ensure there are no errors and that the server is running properly.

5. Install Frontend Dependencies

Navigate to the frontend directory and install dependencies:

cd ../frontend
npm install
This command installs all necessary libraries and frameworks used by the frontend.

6. Start the Frontend Development Server

Run the frontend development server:

npm start
This should open the frontend application in your default web browser, typically accessible at http://localhost:3000.

7. Verify Installation

Ensure that both the frontend and backend are running correctly without errors. Test functionalities like logging in or any other key features to make sure the setup is complete.

7b. You can check package.json for dependencies needed for install. 

8. Regular Updates

Encourage your team members to regularly pull the latest changes from the repository to keep their local copies up to date:

Database Migrations: If your project evolves and you make changes to the database structure, ensure migrations or updated SQL scripts are available for your team to apply.
Communication: Keep an open line of communication for any issues that might arise during the setup process or development.
These instructions should guide your teammates through setting up the project on their local machines effectively. If specific configurations or additional setup steps are needed for your project, be sure to include those details as well.
