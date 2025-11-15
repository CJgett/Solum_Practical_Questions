# Web Developer Technical Test - Solutions
This repository contains my solutions to Solum Clinic's Web Developer Technical Test for their Web Specialist position.

## Problems A and B
### Language: Java 

To run my solutions to Problems A and B, simply clone this repository, then do one of the following
- navigate to the folder A or B in a terminal, then run `java MysticWaves` or `java CargoCraftFleet` or
- open the .java file in your Java IDE of choice and run it. 

## Problem C: Login Form Frontend
### utilizes React and Vite

The login form can be viewed at https://cjgett.github.io/frontend_login_example/

If you'd like to run it locally, simply download and navigate to the "C" folder, then run the following commands in your termainal:
```
npm install
npm run build
npm run preview
```
A localhost address will be listed in the terminal, and you can open this in your preferred browser.

### Valid Credentials
To view what happens when valid credentials are input into the login form, please use one of the following combinations:
- Option 1
  - email: test@example.com
  - password: a1234567

- Option 2
  - email: test2@example.com
  - password: password1

### Accessibility
This page passes the Axe Dev Tools WCAG 2.1 AA full page scan.

I specifically paid attention to:
- ensure enough color contrast between text and the background
- adding alt-text to images
- including labels for form inputs
- making the show/hide password accessible to both screen readers and keyboard navigation.
