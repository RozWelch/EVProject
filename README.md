
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
![UX design](https://tobeadded)

## Design 

The design is clean, modern and easy to navigate. 
![Colour Pallet](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/evcolourpallet.jpg)

### Wireframes 

Initial design wireframes using Balsamiq:

![Wireframe Home](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/EV-Project2-1-homepage.jpg)
![Wireframe Form page](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/EV-Project2-2-formpage.jpg)
![Wireframe Modal](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/EV-Project2-3-modal.jpg)

### Initial design layout 

Initial design layouts, flowchart and logic behind calculations (I used Adobe Illustrator for this):

![Initial Design](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/EV_Range_Calculator-V3-design.jpg)
![Flowchart and logic](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/EV_Range_Calculator-V3-flowchart.jpg)

## Features 

I aimed to provide a clear, easy to understand and easy to navigate website that would appeal to drivers of Electric Vehicles.

- Navigation 

  - The home page allows you to select your vehicle.
  - It is positioned to be easy to view, and styled to be easy to read.
  - On the form page, once the calculate button is pressed, a modal opens with your range results. 
  - The main EV logo also links to the home page.

  UX:  A First Time user will want to be able to easily navigate throughout the site to find content.


![Nav Bar](https://tobeadded)

- __The landing page image__

  - The landing page text to be added 

  UX: A First Time user will want to easily....

![Landing Page](https://tobeadded)

- __tobeadded__

  - tobeadded

  UX: A First Time user will tobeadded

![Main Text](https://tobeadded

- __tobeadded__

  - This section will tobeadded.  

  UX: A Returning user will tobeadded.

![Meetup Times](https://tobeadded)

- __tobeadded__ 

  - The footer section tobeadded

  UX: A First Time user will want to tobeadded.

![Footer](https://tobeadded)

- __tobeadded__

  - The gallery will provide the user with supporting images to see what the Bookclubs are like. 
  - This section is valuable to the parents/guardians as they will see if they would be suitable for thier child, and also of benefit to the child to see other children enjoying the groups. 

  UX: A Frequent user will want to see photos from the classes.

![Gallery](https://github.com/RozWelch/kids-bookclub1/blob/main/assets/readme_images/gallery_page.jpg)




### Features Left to Implement

- An API Google Maps charging point to show a map at the point when your range runs low (this was a paid service so was not added for this version)
- More options would be added for more starting points and destinations
- An animation would be added to the modal opening page

## Testing 

The website was tested on Chrome and Safari browers.
The website was tested on desktop, laptop, tablet and mobile size screens (Devices tested on: iPhone 11 and 12, Samsung Galaxy S22, iPad, iMac pro 15in screen, iMac 27in screen).
The links were tested on the deployed site, and the form was tested. 
All images were resized and saved for web using Adobe Photoshop, which ensured they were compressed for best file size.

Full testing steps: 
![Site testing steps](https://tobeadded)

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
- There were warnings about using ES6 (eg : 'template literal syntax' is only available in ES6 (use 'esversion: 6').)
- No errors were found when passing through JS Hint [JSHint validator](https://jshint.com/)

  ![Test Code Homepage](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/homepage_htmlvalidated.jpg)
  ![Test Code Mini](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/mini_html_valid.jpg)
  ![Test Code Sports](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/sports_html_valid.jpg)
  ![Test Code Family](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/family_html_valid.jpg)
  ![Test Code CSS](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/CSS_jigsaw_valid.jpg)
  ![Test Code JSHint1](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/javascript_validated.jpg)
  ![Test Code JSHint2](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/javascript_homepage_jshint.jpg)

### Unfixed Bugs

There were no unfixed bugs.

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


