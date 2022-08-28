
# Project 2: Electric Vehicle Range Calculator

A website for users of Electric Vehicles to check if their journey is within range, and show map of charging points. I saw a need for a site that takes into account what effects the number of passengers, air conditioning and heating will have on your range, and to display charging point maps. The site is designed to appeal to the users - drivers who either own an electric car or are considering purchasing one. 
A home page allows selection of their vehicle. A form page allows them to enter thier current charge and add in variables for their journey (number of passengers, air conditioning or heating on). They can select their destination. On submitting their form, a modal is displayed. This shows their current range, the journey distance, and if they will need to recharge or if they will make it to their destination on their current charge. The modal also displays a map of charging points, either at their destination or at the point they run low on charge (this API feature is a paid service, so I have not included it on this website, but it is a feature that could be added at a future point)

The live site can be found here: https://add 

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

![Responsice Mockup](https://github.com/RozWelch/kids-bookclub1/blob/main/assets/readme_images/homepage_mockup.jpg)
![Responsice Mockup](https://github.com/RozWelch/kids-bookclub1/blob/main/assets/readme_images/gallery_mockup.jpg)
![Responsice Mockup](https://github.com/RozWelch/kids-bookclub1/blob/main/assets/readme_images/signup_page_mockup.jpg)

## User Experience Design 

User stories
![UX design](https://github.com/RozWelch/kids-bookclub1/blob/main/assets/readme_images/ux_website.jpg)

## Design 

The design is clean, modern and easy to navigate. 
![Colour Pallet](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/evcolourpallet.jpg)

### Wireframes 

Initial design wireframes using Balsamiq:

![Wireframe Home](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/EV-Project2-1-homepage.jpg)
![Wireframe Form page](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/EV-Project2-2-formpage.jpg)
![Wireframe Modal](https://github.com/RozWelch/EVProject/blob/main/assets/readme-images/EV-Project2-3-modal.jpg)

### Initial design layout 

Initial design layouts using Adobe Illustrator:

![Wireframe Home](https://github.com/RozWelch/kids-bookclub1/blob/main/assets/readme_images/kidsbookclub_illustrator_design.jpg)

## Features 

I aimed to provide a clear, easy to understand and easy to navigate website that would appeal to drivers of Electric Vehicles.

- Navigation 

  - The home page allows you to select your vehicle.
  - It is positioned to be easy to view, and styled to be easy to read.
  - On the form page, once the calculate button is pressed, a modal opens with your range results. 
  - The main EV logo also links to the home page.

  UX:  A First Time user will want to be able to easily navigate throughout the site to find content.


![Nav Bar](https://github.com/RozWelch/kids-bookclub1/blob/main/assets/readme_images/navigation.jpg)

- __The landing page image__

  - The landing page includes a photograph with the main heading to allow the user to see exactly which who the website is for and locations of bookclubs. 

  UX: A First Time user will want to easily understand the main purpose of the site and learn more about the clubs.

![Landing Page](https://github.com/RozWelch/kids-bookclub1/blob/main/assets/readme_images/home_page.jpg)

- __Why join our Bookclub Section__

  - The Why join our Bookclub section allows the parents to see the benefits of their child joining the bookclub, as well as the benefits of reading in general. 
  - The parents will be encouraged to sign up their child, and children viewing the website will be encouraged to join.

  UX: A First Time user will want to easily understand the main purpose of the site and learn more about the clubs.

![Main Text](https://github.com/RozWelch/kids-bookclub1/blob/main/assets/readme_images/home-page_maintxt.jpg)

- __Location and times section__

  - This section will allow users to see the location and times of bookclub groups.  

  UX: A Returning user will want to check location addresses and times of classes.

![Meetup Times](https://github.com/RozWelch/kids-bookclub1/blob/main/assets/readme_images/home_page_locations.jpg)

- __The Footer__ 

  - The footer section includes links to the relevant social media sites for Kids' Bookclub. The links will open to a new tab to allow easy navigation for the user. 
  - The footer is valuable to the user as it encourages them to keep connected via social media

  UX: A First Time user will want to find ways to follow the bookclubs social media platforms.

![Footer](https://github.com/RozWelch/kids-bookclub1/blob/main/assets/readme_images/footer.jpg)

- __Gallery__

  - The gallery will provide the user with supporting images to see what the Bookclubs are like. 
  - This section is valuable to the parents/guardians as they will see if they would be suitable for thier child, and also of benefit to the child to see other children enjoying the groups. 

  UX: A Frequent user will want to see photos from the classes.

![Gallery](https://github.com/RozWelch/kids-bookclub1/blob/main/assets/readme_images/gallery_page.jpg)

- __The Sign Up Page__

 - This page will allow the parent/guardians to sign up their child to a bookclub near them. They will be able to specify the area nearest them. 
 - The user will be asked to submit their name, their child's name and an email address. 
 - A contact section under the sign up shows the bookclub address, a map, and a youtube video of the latest book.

 UX : A First Time or Returning user will want to sign their child up for a class.
 UX : A First Time user will want to find the bookclubs main contact information and location.


![Sign Up](https://github.com/RozWelch/kids-bookclub1/blob/main/assets/readme_images/signup_form.jpg)


![Sign Up](https://github.com/RozWelch/kids-bookclub1/blob/main/assets/readme_images/contact_map_youtube.jpg)


### Features Left to Implement

- A API Google Maps charging point to show a map at the point when your range runs low (this was a paid service so was not added for this version)

## Testing 

The website was tested on Chrome and Safari browers.
The website was tested on desktop, laptop, tablet and mobile size screens (Devices tested on: iPhone 11 and 12, Samsung Galaxy S22, iPad, iMac pro 15in screen, iMac 27in screen).
The links were tested on the deployed site, and the form was tested. 
All images were resized and saved for web using Adobe Photoshop, which ensured they were compressed for best file size.

Full testing steps: 
![Site testing steps](https://github.com/RozWelch/kids-bookclub1/blob/main/assets/readme_images/site_testing.gif)

The code was checked on Chrome Developer tools Lighthouse with results at or close to 100%:

  ![Lighthouse test Homepage](https://github.com/RozWelch/kids-bookclub1/blob/main/assets/readme_images/home_page_lighthousescore.jpg)
  ![Lighthouse test Gallery](https://github.com/RozWelch/kids-bookclub1/blob/main/assets/readme_images/gallery_lighthouse.jpg)
  ![Lighthouse test Sign up](https://github.com/RozWelch/kids-bookclub1/blob/main/assets/readme_images/signup_lighthouse.jpg)


### Validator Testing 

When first put through the W3C validator the following issues arose and were fixed:
- Removed extra footer div on the gallery and join pages.
- Removed extra body tag on the gallery page.
- Changed a Section to a Div on index page (this caused an error as there was no heading on the section).

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)

  ![Test Code Homepage](https://github.com/RozWelch/kids-bookclub1/blob/main/assets/readme_images/validate_home_page.jpg)
  ![Test Code Gallery](https://github.com/RozWelch/kids-bookclub1/blob/main/assets/readme_images/validate_gallery_page_code.jpg)
  ![Test Code Sign up](https://github.com/RozWelch/kids-bookclub1/blob/main/assets/readme_images/validate_join_code.jpg)
  ![Test Code CSS](https://github.com/RozWelch/kids-bookclub1/blob/main/assets/readme_images/validate_css_code.jpg)

### Unfixed Bugs

There were no unfixed bugs.

## Deployment

- The site was deployed to GitHub pages. The steps I used to deploy were as follows: 
  - In my GitHub account I located my repository
  - I navigate to the Settings tab 
  - From the source section drop-down menu, the Main branch was selected
  - Once the master branch has been selected, this deployed my project to the URL below. 

The live link can be found here - https://add

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


