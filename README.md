
# Project 2: Electric Vehicle Range Calculator

A website for users of Electric Vehicles to check if their journey is within range, and show map of charging points. I saw a need for a site that takes into account what effects the number of passengers, air conditioning and heating will have on your range, and to display charging point maps. The site is designed to appeal to the users - drivers who either own an electric car or are considering purchasing one. 
A home page allows selection of their vehicle. A form page allows them to enter their current charge and add in variables for their journey (number of passengers, air conditioning or heating on). They can select their destination. On submitting their form, a modal is displayed. This shows their current range, the journey distance, and if they will need to recharge or if they will make it to their destination on their current charge. The modal also displays a map of charging points, either at their destination or at the point they run low on charge (this API feature is a paid service, so I have not included it on this website, but it is a feature that could be added at a future point)

The live site can be found here: https://rozwelch.github.io/EVProject/index.html

## Table of Contents
* [Responsive Views](#Responsive-views)
* [User Experience Design (UX)](#User-Experience-Design)
* [Design](#Design)
* [Features](#Features)
* [Testing](#Testing)
* [Deployment](#Deployment)
* [Credits](#Credits)

## Responsive views

Am I Responsive view of the website on different devices:

![Responsice Mockup](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/homepage_amiresponsive.jpg)
![Responsice Mockup](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/form_page_amiresponsive.jpg)
![Responsice Mockup](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/modal_page_amiresponsive.jpg)


## User Experience Design 

User stories
![UX design](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/ux-userstories.jpg)

## Design 

The design is clean, modern and easy to navigate. 
![Colour Pallet](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/evcolourpallet.jpg)

### Wireframes 

Initial design wireframes using Balsamiq:

![Wireframe Home](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/wireframe-homepage.jpg)
![Wireframe Form page](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/wireframe-formpage.jpg)
![Wireframe Modal](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/wireframe-modal.jpg)

### Initial design layout 

Initial design layouts, flowchart and logic behind calculations (I used Adobe Illustrator for this):

![Initial Design](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/initial-design.jpg)
![Flowchart and logic](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/initial-design-flowchart.jpg)

## Features 

I aimed to provide a clear, easy to understand and easy to navigate website that would appeal to drivers of Electric Vehicles.

- Navigation 

  - The home page allows you to select your vehicle.
  - It is positioned to be easy to view and select your vehicle.
  - On the form page, once the calculate button is pressed, a modal opens with your range results. 
  - The main EV logo also links to the home page.

  UX:
  - As a First Time User, I want to easily navigate the site so that I can select my vehicle type.
  - As a First Time User, I want to easily easily enter my journey details so that I can calculate my range.
  - As a First Time User, I want to easily easily return to the form page so that I can calculate range again.
  - As a First Time User, I want to easily return to the main page so that I can select a different vehicle type.
  - As a Returning User, I want to easily easily enter my journey details so that I can calculate my range.


![car selection](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/main_car_selection.jpg)

- __The Range Calculation form__

  - The form allows the user to easily enter their journey details. 
  - The use of drop down menues and radio buttons ensures data out of range cannot be entered.
  - A reset button allows the form to be cleared.

  UX:
  - As a First Time or Returning User, I want to easily easily enter my journey details so that I can calculate my range.

![range form](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/form_section.jpg)

- __Back to Car Selection link__

  - A link is added under the form to link back to the car selection page. 

  UX:
  - As a First Time or Returning User, I want to easily return to the main page so that I can select a different vehicle type.

![range form](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/backtocarselection.jpg)

- __The Modal with Results__

  - This section will display the car's range after the effects of number of passengers/air conditioning/heating are taken into account.  
  - This range and the journey distance are compared, and the user is informed if the journey is within range or not. 
  - A map of charging points is shown. I would have liked to use an API Google map to show charging points where they needed to recharge, but this was not implemented on this version as it was a pain service.

  UX:
  - As a First Time or Returning User, I want to easily see and understand my calculated results so that I can see when a recharge is needed.
  - As a First Time or Returning User, I want to see a map of recharging points at my destination.

![range form](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/modal_results_map.jpg)

### Features Left to Implement

- An API Google Maps charging point to show a map at the point when your range runs low (this was a paid service so was not added for this version)
- More options would be added for more starting points and destinations
- An fade-in and fade-out animation would be added to the modal opening page

## Testing 

The website was tested on Chrome and Safari browers.
The website was tested on desktop, laptop, tablet and mobile size screens (Devices tested on: iPhone 11 and 12, Samsung Galaxy S22, iPad, iMac pro 15in screen, iMac 27in screen).
The links were tested on the deployed site, and the form was tested. 
All images were resized and saved for web using Adobe Photoshop, which ensured they were compressed for best file size.

Full testing steps: 
![Site testing steps](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/site_testing_ev.gif)

The code was checked on Chrome Developer tools Lighthouse with results at or close to 100%:

  ![Lighthouse test Homepage](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/lighthouse_scores_homepage.jpg)
  ![Lighthouse test Minipage](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/lighthouse_scores_mini.jpg)
  ![Lighthouse test Sportspage](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/lighthouse_scores_sports.jpg)
  ![Lighthouse test Sportspage](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/lighthouse_scores_family.jpg)


### Validator Testing 

When first put through the W3C validator the following issues arose and were fixed:
- Changed a Section to a Div on form page (this caused an error as there was no heading on the section).
- HTML
  - No errors were returned when passing through the official [W3C validator](https://rozwelch.github.io/EVProject/index.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator)
- Javascript
When first put through JS Hint, the following issues arose and were fixed:
- Semicolons were missing at the end of 3 statements, this was fixed.
- No errors were found when passing through JS Hint [JSHint validator](https://jshint.com/)

  ![Test Code Homepage](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/homepage_htmlvalidated.jpg)
  ![Test Code Mini](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/mini_html_valid.jpg)
  ![Test Code Sports](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/sports_html_valid.jpg)
  ![Test Code Family](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/family_html_valid.jpg)
  ![Test Code CSS](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/CSS_jigsaw_valid.jpg)
  ![Test Code JSHint1](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/javascript_validated.jpg)
  ![Test Code JSHint2](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/javascript_homepage_jshint.jpg)

### Issues and Bugs

- There were no unfixed bugs.

- Fixed Bug: When first designing the form, I had an input field that allowed a number input. I had set the min max and required attributes in html, however a user was still able to input a number outside of the range 0-100. I wrote some javascript to check if the number was within range, and then show an alert modal if it was outside range. However the user was still able to enter a number outside of range when they closed the modal. In furture I may be able to use Bootstrap validation to validate a number. For the best user experience, without warning modals, the best solution decided upon was a drop down menu for range input. 

- Known Issue: An error shows on the console: "Error with Permissions-Policy header: Origin trial controlled feature not enabled: 'interest-cohort'." This comes from the Google maps I found this information on the issue: "google.maps.event.addDomListener() is deprecated, use the standard addEventListener() method instead: https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener
The feature will continue to work and there is no plan to decommission it."

I found more information on that issue here: - https://stackoverflow.com/questions/69626677/error-with-permissions-policy-header-unrecognized-feature-interest-cohort-e

In a future version this issue may be fixed, I found further information here: - https://blog.sucuri.net/2021/10/how-to-set-up-a-content-security-policy-csp-in-3-steps.html

## Deployment

- The site was deployed to GitHub pages. The steps I used to deploy were as follows: 
  - In my GitHub account I located my repository
  - I navigate to the Settings tab 
  - From the source section drop-down menu, the Main branch was selected
  - Once the master branch has been selected, this deployed my project to the URL below. 

The live link can be found here - https://rozwelch.github.io/EVProject/index.html

### Project Creation
The project was created in Git Hub using the Code Institute template.

The following commands were used throughout the project:

* git add . - This command was used to add files to the staging area before commiting.
* git commit -m "I add commit message here" - This command was used to to commit changes to the local repository.
* git push - This command is used to push all commited changes to the GitHub repository. 


### Run Locally
1. Navigate to the GitHub [Repository:](https://github.com/RozWelch/EVProject)
1. Click the Code drop down menu.
1. Either Download the ZIP file, unpackage locally and open with IDE (This route ends here) OR Copy Git URL from the HTTPS dialogue box.
1. Open your developement editor of choice and open a terminal window in a directory of your choice.
1. Use the 'git clone' command in terminal followed by the copied git URL.
1. A clone of the project will be created locally on your machine.

## Credits 

Resources: WW3 school

I followed this W3 Schools tutorial to make the modal:
https://www.w3schools.com/howto/howto_css_modals.asp

Acknowledgements: Thanks to my mentor, my fellow students on Slack, Tutoring support and to my friends for helping test the site.

### Content 

- The content for the website was created by me.
- The calculations for effects of heating and air conditioning was taken from this website: https://www.wired.co.uk/article/
ev-battery-drain-tips

### Media

- All photos were taken from Freepix website: Car Images: http://www.freepik.com">Designed by rawpixel.com / Freepik


