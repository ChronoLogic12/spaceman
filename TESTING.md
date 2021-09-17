# __SPACEMAN__ - WEB BASED GAME

 ### Code Institute Milestone Project 2 HTML/CSS/JAVASCRIPT - Interactive Front-End Development

<p align="center">
    <img src="assets/images/readme-images/spaceman-logo.png" width="200px"/>
</p>

[README.md](README.md)

[Live Site](https://chronologic12.github.io/spaceman/)

## __Table of contents__

* [User Stories Testing](#user-stories-testing)
* [User Testing](#user-testing)
* [Performance](#performance)
* [Code Validation](#code-validation)
* [Cross Browser](#cross-browser)
* [Responsive Design](#responsive-design)

## __Testing__

### __User Stories Testing__

#### __As a young player of this game__ - 
  1. *I want the game to be easy to understand and fun to play.*
      1. By default the game instructions open on game start to clarify how to play and the purpose of each section.
      2. Clear visual hierarchy makes identifying interactive elements easy.
      3. Based on the classic pen a paper game Hangman, Spaceman is all the fun of the classic version but removes set up between rounds and can be played single player or multiplayer.
  2. *I want the game to look good and be visually responsive to my input.*
      1. The game centers around the rocket launch progress section which uses simple shapes and contrasting colours to be visualy appealing.
      2. The animated star background adds an appealing sence of depth and motion to the section.
      3. Images update as the player makes guesses to show how close the rocket is to lift off.
      4. All letter elements have hover animations and grey out when the player has selected them so they can keep track of previous guesses.
      5. The target word section is filled in with each correct guess and will complete itself to reveal the word to the player in the case of a game loss.   
  3. *I want the experience to be smooth and satisfying at all times.*
      1. All interactive elements give visual feedback so as to be responsive and satisfying to players.
      2. Players can choose to use either the on screen keyboard or their own keyboard to select letetrs dependant upon their preference.
      3. Right clicking and highlighting are disabled within the gamespace to avoid acidental clicks detracting from gameplay.

### __As a responsible adult showing my dependant(s) this game__ - 
  1. *I want the game to be engaging and entertaining and have good replay potential.*
      1. The engaging visuals, responsive feedback of game elements and simple gameplay loop make this entertaining and encorage replay.
  2. *I want all aspects to be age appropriate for a younger player.*
      1. All words and images are releated to the games space theme and are appropriate for the target audience. 
      2. The games space theme removes the somewhat morbid visuals of the games insperation, Hangman, making it more suitable for young players. 
  3. *I want the game to have some educational value.*
      1. The list of words from which the game select the players target word is over 100 words long, all related in some way to space. Playing this game will therefore expose players to a wide range of words relating to the games theme and expand their lexicon.  
  4. *I want the game to be challenging enough for my dependant but achievable.*
      1. The game features target words at a wide range of dificulties as therfore presents a range of chalenge dificulty to the player. The number of simpler words means players should encounter easier chalenges every few rounds. 

### __User Testing__
  During a short series of over the shoulder user tests I discovered several areas which could be improved. These were - 
  * Young testers were sometimes having trouble with accidental highlighting of elements or opening the right click menu. To remove this potential annoyance for the player I have disabled both highlighting and rick click actions.
  * During a short play test users were experiencing the same word on multiple rounds. The original count of words that could be randomly selected was approximately 40 which proved to be too few to provide enough variation. To counter this I have increased the count to over 100.

### __Performance__

  Site performance was tested using Google Chrome's Lighthouse tools in which it scored above 90 in all categories for both desktop and mobile.

  #### __Desktop__
  <p align="center">
    <img src="assets/images/readme-images/lighthouse-desktop.PNG" width="400px"/>
  </p>

  #### __Mobile__
  <p align="center">
    <img src="assets/images/readme-images/lighthouse-mobile.PNG" width="400px"/>
  </p>

  ### __Code Validation__
  All CSS was tested using [W3C Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) and returned no errors.

  <p align="center">
    <img src="assets/images/readme-images/css-test.PNG" width="900px"/>
  </p>

  All HTML was tested using [Nu HTML Checker](https://validator.w3.org/nu/) and returned no errors.

  <p align="center">
    <img src="assets/images/readme-images/html-test.PNG" width="600px"/>
  </p>

  Javascript linting was handled by [ESLint](https://eslint.org/).

  ### __Cross Browser__

  Cross browser testing was carried out through the [crossbrowsertesting](https://app.crossbrowsertesting.com/test-center) web application. Through this app I was able to run a series of tests for each of the following browsers - 
   * Google Chrome
   * Mozilla Firefox 
   * Microsoft Edge
   * Opera 

  For each browser I conducted the following tests - 
   * Load page with empty local storage and ensure the instruction modal opens by default.
   * Toggle off 'showInstructionsOnStart' and reload page. Ensure with toggle off that the modal does not open.
   * Check manual open and close of instruction modal.
   * Check github repository link in modal opens to new page and to the correct location.
   * Test manual restart button clears current progress, resets all styling and selects new target word.
   * Select letters via on screen keyboard, ensure styling change of selected letter and filling of target word where appropreate.
   * Select letters via peripheral keyboard, ensure styling change of selected letter and filling of target word where appropreate.
   * Gameplay loop - Loss
      * Play game through to loss and ensure correct rocket images and countdown number is shown at each stage.
      * Upon running out of guesses, ensure that the correct image and game state message is shown.
      * Test 'Try Again?' button from loss screen clears current progress, resets all styling, reconstructs the on screen keyboard and selects new target word.
  * Gameplay loop - Win
      * Play game through to win and ensure correct rocket images and countdown number is shown at each stage.
      * Upon completion of the target word, ensure the that correct image and game state message is shown.
      * Test 'Play Again?' button from win screen clears current progress, resets all styling, reconstructs the on screen keyboard and selects new target word.
  * For test of gameplay loops run multiple times and test restart buttons via button clicks and via selection of the space and enter keys.
  * Direct to invalid page address and ensure that you are directed to the Error 404 page.
  * Check button on Error 404 page returns you to the game. 

  No errors were found on any of the browsers tested.

  #### __Google Chrome__

  <p align="center">
    <img src="assets/images/readme-images/browser-chrome.png" width="400px"/>
  </p>

  #### __Microsoft Edge__

  <p align="center">
    <img src="assets/images/readme-images/browser-edge.png" width="400px"/>
  </p>

  #### __Mozilla Firefox__

  <p align="center">
    <img src="assets/images/readme-images/browser-firefox.png" width="400px"/>
  </p>

  #### __Opera__

  <p align="center">
    <img src="assets/images/readme-images/browser-opera.png" width="400px"/>
  </p>


  ### __Responsive Design__

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