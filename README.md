# Welcome to Calcpad! 

Calcpad is an Ionic app which recognizes your handwritten expressions, and calculates them! It also contains a calculator interface that allows you to calculate long expressions for additional functionality. This app allows users to quickly compute equations on the go that are simply too complicated for the phone's built in calculator. 

## To Download Calcpad
- Download Git (latest  with command line tools)
- Download npm (latest  with command line tools)
- npm install -g ionic@latest
- Clone the git repository http://github.com/brettgraham13/calcpad
- Request access for the `config.json` file
    - Move `config.json` to the `\src\pages\my-script-canvas` folder
- In the terminal run `npm install`
- Download the Ionic DevApp for your mobile device
-Run `ionic serve -c` from your terminal, with your computer and mobile device on the same WiFi network
- Enjoy CalcPad! 

## How To Use
- The app initializes on the canvas page to minimize number of clicks to get started.
- See the tutorial page in-app for rules, accepted symbols, and instructional slides!
- The app requires an internet connection to use the canvas feature. The in-app calculator does not require an internet connection. 

## Common Questions
- Q) What are the limitations of the canvas calculator?
    - A) The canvas can compute arithmetic and basic functions such as trig, logarithmic, exponentiation etc. It can also solve relatively simple one variable equations where the variable of interest is replaced with a  *?*. Functions that are outside of the bounds of computation (i.e. differentiation and integration) can be sent to the Wolfram Alfa website with the export button.

- Q) Why should someone use Calcpad's calculator rather than the built-in iPhone calculator?
    - A) Calcpad's calculator allows the user to use parenthesis and computes the string with the correct order of operations, features that the built-in calculator does not have.

- Q) Are there any features that are not obvious on the calculator?
    - A) One can compute exponentiation by using the ** command, also parenthesis that are left open will be automatically closed at the end of the string.

## Warnings
- App has been optimized for iPhones 6-X. It will work on smaller iPhones/iPads but will not look great.
- App has been built for portrait mode. If you want it to be landscape, I am sorry.
- This app has only been tested/ deployed to ios devices, and likely will not work as advertised on Android/ windows devices.

## Future Aspirations
- We would like to integrate the wolfram alpha api into the canvas page so that computing more complex operations does not take you out of the app.
- Expand the calculator to be a scientific calculator with more functionality.
- Reformat the about page to not cutoff on other devices.
- Test and deploy on Android devices.
- Wolfram Alpha currently doesn't understand aligned equations or matrices. We would like to reformat these strings into something that Wolfram understands.
- Remove calculator answer output with one touch of the backspace button for better user experience.

## Limitations
- Javascript's number class is limited to always be represent numbers as doubles. This cannot deal with numbers as large as we would like.
- Restricted the string length on the calculator so that it doesn't overflow the display on the iPhone 5. Sad!


## Bugs
- Canvas becomes unresponsive when a line is drawn from the canvas to the buttons. We think that this is due to an incompatibility of the myscript editor with the native ionic buttons.
- Buttons on canvas are flushed to the banner upon start up but relocate after switching tabs. Weird!
- Wolfram Alpha url call doesn't respond with definite integrals/ summations but works with indefinite integrals. Really have no idea why this is happening.
- Exponentiation of a quantity in a set of parenthesis returns zero i.e. (2+3)^3. This will be fixed in the next version.

## Developer Documentation
- CalcPad has a relatively simple architecture. Each tab is contained within its own folder in ‘src/pages/’. Each page has three major files for development: a ‘.ts’, ‘.html’, and ‘.scss’. Very generally, the logic goes in the ‘.ts’ file, the layout goes in the ‘.html’ file, and the styling goes in the ‘.scss’ file. For example, the expression evaluator and all the associated helper functions are located in ‘src/pages/calc/calc.ts’. The calculator buttons are contained in ‘src/pages/calc/calc.html’. The styling for all the buttons is in ‘src/pages/calc/calc.scss’. 