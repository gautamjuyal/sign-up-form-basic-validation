# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## Overview
Intro component + sign up form with basic in browser input validation using javascript.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*


## My process

-Creating the page
  
  Creating the page was pretty straightforward. Flexbox was used throughout the styles.
  
  To implement the validation, I created an error template for different type of errors, which then creates a new element (error text) which is appended as a sibling to the respective input field whenever the sign up button is clicked.

  Now the problem arises, that for every click registered on the sign up button, new siblings (a new line of error text was added). In order to rectify that, I applied an if check to check whether the error text was already present as the sibling of the input field.

  Once valid input were recieved, the error text would disappear and the error styles were removed.

### Built with

- Semantic HTML5 markup
- SASS
- Flexbox
- JavaScript

### What I learned

- Mobile responsive design
- SCSS nesting
- Regular Expression
- Styles specificity for elements created using JavaScript. 
