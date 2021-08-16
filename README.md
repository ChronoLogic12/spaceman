 # SPACEMAN - WEB BASED GAME

 ### Code Institute Milestone Project 2 HTML/CSS/JAVASCRIPT - Interactive Front-End Development

<p align="center">
    <img src="../spaceman/assets/images/readme-images/spaceman-logo.png" width="200px"/>
</p>

 ## About the game

 Spaceman is a space themed variant of the popular pen a paper game "Hangman". Crack the code and guess the space themed word to gain access to the rocket before it leaves on its adventure without you. The word you need to guess is represented by a series of dashes, each representing a letter. Attempt to guess the word by selecting one letter at a time from the on screen keyboard. Correct guesses will reveal the letter or letters within the word while incorrect guesses will bring the countdown to lift off closer to 0, whether you are ready or not.

 [Spaceman - Live site](https://chronologic12.github.io/spaceman/)

<p align="center">
    <img src="../spaceman/assets/images/readme-images/spaceman-responsive.PNG" width="1200px"/>
</p>

## Table of contents

 * [UX design](#ux-design)
    * [Project Goals](#project-goals)
    * [User Stories](#user-stories)
    * [Wireframes](#wireframes)
    * [Layout and Responsive Design](#layout-and-responsive-design)
    * [Colours and Fonts](#colours-and-fonts)
 * [Features](#features)
 * [Testing](#testing)
    * [User Testing](#user-testing)
    * []
    * [Code Validation](#code-validation)
 * [Deployment](#deployment-github-pages)
 * [Credits](#credits)
 ## UX design 

 ### Project Goals

 This game is targeted at a younger audience is designed to be visually appealing and engaging to a younger player base. 
 The aim of this project is to produce an interactive, fun and interesting space themed game for ages 7+. 
 The game should  - 
  * Have clear visuals 
  * Be clear and easy to interact with
  * Have good replay value
  * Help children to learn both basic keyboard and mouse skills as well as new words

 ### User Stories

 #### As a young player of this game - 
  * I want the game to be easy to understand and fun to play.
  * I want the game to look good and be visually responsive to my input.
  * I want the experience to be smooth and satisfying at all times. 

  #### As a responsible adult showing my dependant(s) this game - 
  * I want the game to be engaging and entertaining and have good replay potential. 
  * I want the all aspects to be age appropriate for a younger player.
  * I want the game to have some educational value.
  * I want the game to be challenging enough for my dependant but achievable.

 ### Wireframes

The wireframes include page layouts for desktop, tablet and mobile screens with instances of the victory screen and error 404 page shown in tablet scaling.

 * [Desktop](../spaceman/assets/images/readme-images/spaceman-desktop.png)
 * [Tablet](../spaceman/assets/images/readme-images/spaceman-tablet.png)
 * [Tablet Victory screen](../spaceman/assets/images/readme-images/spaceman-tablet-win.png)
 * [Error 404 page](../spaceman/assets/images/readme-images/spaceman-tablet-404.png)
 * [Mobile](../spaceman/assets/images/readme-images/spaceman-mobile.png)

  ### Layout and Responsive design

  The page consists of the Header/nav section at the top of the page, along with the three main sections that make up the game space. These sections are - 
  * Rocket launch progress - This section contains 
    * The rocket image which will change to represent the current state of the game. 
    * The launch countdown which acts as a counter for the players remaining guesses.
    * Animated stars background. 
  * Target word - This section represents the word which the player needs to guess. Each character is displayed as a tile filled with an underscore for letter characters or the character itself in the case of any non letter characters.
  * Letter selection keyboard - This section contains a representation of a qwerty keyboard from which the player can select the letters they wish to guess. 

  For screens bellow 1080p the game elements are stacked atop one another in a column design ideal for tablet and mobile screens while on above 1080p screens the target word and keyboard elements are to the right of the rocket image to make better use of the horizontal space.

  ### Colours and Fonts

  The colours used were chosen to help differentiate the background and foreground elements. The brighter reds and yellows of the rocket and the off white of the tiles contrast with the dark blues of the background drawing attention to these elements. The tiles and game sections also have a subtle box shadow giving them a slight 3d effect upon the page further differentiating them from the background. All 'active' tiles light up when hovered, changing to a brighter white with a different box shadow, giving tactile feedback to the player. 
  The font used throughout is 'Roboto Mono'. This font is clear and easy to read and has a style that I feel fits swell with the space aesthetic. 

  ## Features
  



  ## Testing

  ### User Testing
  During a short series of over the shoulder user testing of the game I discovered several areas which could be improved. These were - 
   * Young testers were sometimes having trouble with accidental highlighting of elements or right clicking. To remove this potential annoyance for the player I have disabled both highlighting and rick click actions.
   * During a short play test users were experiencing the same word on multiple rounds. The original count of words that could be randomly selected was approximately 40 which proved to be too few to provide enough variation. To counter this I have increased the count to over 100.  

   Site performance was tested using Google Chrome's Lighthouse tools in which it scored above 90 in all categories for both desktop and mobile. 

  Desktop
  <p>
    <img src="../spaceman/assets/images/readme-images/lighthouse-desktop.PNG" width="400px"/>
  </p>
  Mobile
  <p>
    <img src="../spaceman/assets/images/readme-images/lighthouse-mobile.PNG" width="400px"/>
  </p>

  ### Code Validation
  All CSS was tested using [W3C Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) and returned no errors.

  <p align="center">
    <img src="../spaceman/assets/images/readme-images/css-test.PNG" width="900px"/>
  </p>

  All HTML was tested using [Nu HTML Checker](https://validator.w3.org/nu/) and returned no errors.

  <p align="center">
    <img src="../spaceman/assets/images/readme-images/html-test.PNG" width="600px"/>
  </p>

   ## Deployment GitHub Pages
 
  The site was deployed through GitHub Pages using the following steps.
  * Navigate to the GitHub repository and select the Settings tab
  * Select the Pages section
  * Use the dropdown menu in the source section to select the Master Branch. Click save.
  * Once the branch has been selected the page will update displaying: "Your site is published at (/Your live site URL/)"

  ## Credits 

  * Collapsible modal was designed with help for [this article](https://www.w3schools.com/howto/howto_css_modals.asp) on W3schools.
  * To disable the right click event I followed [this guid](https://www.w3docs.com/snippets/javascript/how-to-disable-text-selection-copy-cut-paste-and-right-click-on-a-web-page.html) on W3docs.
  * Box shadow soft UI tiles were created with help from [Neumorphism.io](https://neumorphism.io/#dedfe8).