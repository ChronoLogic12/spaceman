# SPACEMAN - WEB BASED GAME

 ### Code Institute Milestone Project 2 HTML/CSS/JAVASCRIPT - Interactive Front-End Development

<p align="center">
    <img src="assets/images/readme-images/spaceman-logo.png" width="200px"/>
</p>

[README.md](README.md)
[Live Site](https://chronologic12.github.io/spaceman/)
## Table of contents

* [User Testing](#user-testing)
* [Performance](#performance)
* [Code Validation](#code-validation)
* [Cross Browser](#cross-browser)
* [Responsive Design](#responsive-design)

## Testing

  ### User Testing
  During a short series of over the shoulder user tests I discovered several areas which could be improved. These were - 
   * Young testers were sometimes having trouble with accidental highlighting of elements or opening the right click menu. To remove this potential annoyance for the player I have disabled both highlighting and rick click actions.
   * During a short play test users were experiencing the same word on multiple rounds. The original count of words that could be randomly selected was approximately 40 which proved to be too few to provide enough variation. To counter this I have increased the count to over 100.

  Site performance was tested using Google Chrome's Lighthouse tools in which it scored above 90 in all categories for both desktop and mobile. 

  ### Performance 
  #### Desktop
  <p align="center">
    <img src="assets/images/readme-images/lighthouse-desktop.PNG" width="400px"/>
  </p>

  #### Mobile
  <p align="center">
    <img src="assets/images/readme-images/lighthouse-mobile.PNG" width="400px"/>
  </p>

  ### Code Validation
  All CSS was tested using [W3C Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) and returned no errors.

  <p align="center">
    <img src="assets/images/readme-images/css-test.PNG" width="900px"/>
  </p>

  All HTML was tested using [Nu HTML Checker](https://validator.w3.org/nu/) and returned no errors.

  <p align="center">
    <img src="assets/images/readme-images/html-test.PNG" width="600px"/>
  </p>

  Javascript linting was handled by [ESLint](https://eslint.org/).

  ### Cross Browser

  Cross browser testing was carried out through the [crossbrowsertesting](https://app.crossbrowsertesting.com/test-center) web application. Through this app I tested the gameplay and navigation elements of the game as well as the visuals and responsive sizing on the following browsers and found no problems - 
   * Google Chrome
   * Mozilla Firefox 
   * Microsoft Edge
   * Opera 

  ### Responsive Design

  Comprehensive testing of the responsive design of the site was done through Chrome Dev Tools and [responsivetesttool.com](http://responsivetesttool.com/). Using these tools I was able to test the design on a huge range of screen sizes and have included an example each for mobile, tablet, laptop and desktop devices.

  Mobile - 360 x 640px
  <p align="center">
    <img src="assets/images/readme-images/responsive-mobile.PNG" width="200px"/>
  </p>

  Tablet - 768 x 1024px
  <p align="center">
    <img src="assets/images/readme-images/responsive-tablet.PNG" width="200px"/>
  </p>

  Laptop - 1024 x 600px
  <p align="center">
    <img src="assets/images/readme-images/responsive-laptop.PNG" width="400px"/>
  </p>

  Desktop - 1920 x 1080px
  <p align="center">
    <img src="assets/images/readme-images/responsive-desktop.PNG" width="400px"/>
  </p>