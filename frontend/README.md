
Milestone 1
This project will be built using MERN Stack.
REST API Creation: Through the mentor-guided project, you will learn to build scalable APIs.
Authentication: You will get to learn to implement secure login and registration functionalities. -Database Schema Design: You will get to explore how to create structured data models using MongoDB.
Backend Development: As a part of the project, you will learn to set up robust server-side logic with Node.js and Express.

Milestone 2
Project Folder Structure: Learn to organize your project files into separate frontend and backend directories.
React Frontend Setup: Initialize a React application for building the user interface.
Node.js Backend Setup: Set up a simple Node.js server to prepare for API integration in future milestones.
Tailwind CSS Configuration: Integrate and configure Tailwind CSS to enable modern, responsive, and utility-based styling.
Login Page Development: Create the first user interface of your e-commerce application, focusing on both functionality and styling.

Milestone 3
Setting up backend folders and files.
Configuring and connecting the server to MongoDB.
Writing basic error-handling code.

Milestone 4
1. What’s a Model?
A model is like a detailed map or plan.
When you create a User Model, you’re designing how a user’s data (like name, email, and password) will look in the database. Imagine drawing a blueprint of a house.
The model is the map of what information you need to store for each user.
In MongoDB, we use something called Schemas to create a model.
A schema is a definition of what data should look like for that model.
2. What’s a Controller?
A controller is a special part of the server that decides what happens when someone interacts with your app.
For example, if someone wants to sign up for your website, the controller will handle what happens when the data is sent to the server.
Think of the controller as a "manager" of requests and responses. It’s like the teacher in a classroom—telling the students (your app) what to do and ensuring everything goes smoothly.
3. File Uploads with Multer
Sometimes, your users might want to upload files like profile pictures.
To help with this, we use Multer, which is a tool that makes it easy to upload files to your server.
Multer will help us store user images in the backend and keep track of them. It's like a virtual file cabinet for storing pictures!

Milestone 5
1. What’s a Sign-Up page?
The Sign-Up page is where users can enter their details to create an account. This page will typically include fields like:
Name
Email
Password
This page allows users to provide their information, which will be sent to the server for processing.
We’ll create a simple yet effective sign-up form that looks clean and is user-friendly.
2. What is Form validation?
Form Validation ensures that the information users provide is correct and in the right format.
For instance, we’ll check if the email is in the correct format and if the password meets certain security criteria (e.g., minimum length).
Form validation helps prevent errors and ensures that the backend receives clean and valid data.

Milestone 6
Why encrypting passwords?
Protect User Data: Keeps passwords safe if hackers access the database.
Privacy: Ensures user passwords aren’t visible to anyone.
Compliance: Follows security laws like GDPR and PCI-DSS.
Stops Password Theft: Encrypted passwords can’t be easily stolen or guessed.

Milestone 7
User Enters Credentials:
The user provides their email/username and password on the login page.
Fetch User Data from Database:
The backend retrieves the user record based on the provided email/username.
If the user is not found, return an error: "User does not exist."
Compare Encrypted Passwords:
Process the user's input password using the same hashing algorithm (e.g., bcrypt).
Compare the resulting hash to the stored hashed password.
If they match, the user is authenticated; if not, send an error.

Milestone 8
Showcase Products Effectively: Presents product details in a clear and visually appealing way.
Reusable Design: Can be used across multiple pages or sections of the app.
Improved User Experience: Makes it easy for users to browse and interact with products.
Organized Layout: Keeps the homepage clean and structured.
Create a Dynamic Component: Design a single card component that accepts product details as props.
Use Mapping: Use array mapping to iterate over the product list and render a card for each product.
Pass Data Dynamically: Pass unique product information (e.g., name, price, image) to each card.
Maintain Consistency: Ensure the layout remains uniform for all products.

Milestone 9: Creating the Product Form
Data Management:
Configured state management to handle form inputs efficiently.
Validated user inputs before submission to ensure accurate product data.

# Milestone 10: Creating the Product Schema and API Endpoint

In this milestone, we focused on defining the structure of product data and creating an API endpoint to store product details in MongoDB.

1. Product Schema Definition:
Defined a structured product schema using Mongoose to store product data in MongoDB.
Ensured each field has proper validation to maintain data integrity:

Name: Required, string
Description: Required, string
Price: Required, number, with validation for non-negative values
Image URL(s): Required, array of strings for multiple image storage
Category: Required, string
CreatedAt: Automatically generated timestamp
2. Endpoint Creation:
Developed a POST endpoint (/api/products) to accept product details from the frontend.

Implemented validation to ensure only correctly formatted data is stored in the database.
Saved product information to MongoDB using Mongoose models.
3. Data Validation & Integrity:
Enforced strict validation to prevent invalid or incomplete product entries.
Returned appropriate error messages for missing or incorrect data inputs