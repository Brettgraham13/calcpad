# Welcome to Calcpad! 

Calcpad is an Ionic app which recognizes your handwritten expressions, and calculates them! It also contains a calculator interface that allows you to calculate long expressions for additional functionality. This app allows users to quickly compute equations on the go that are simply too complicated for the phone's built in calculator. 

## To Download Calcpad
- Clone the git repository http://github.com/brettgraham13/calcpad
- Request access for the `config.json` file
    - Move `config.json` to the `\src\pages\my-script-canvas` folder
- In the terminal run `npm install`
- Download the Ionic DevApp for your mobile device
-Run `ionic serve -c` from your terminal, with your computer and mobile device on the same WiFi network
- Enjoy CalcPad! 

## How To Use
- The app initializes on the canvas page to minimize number of clicks to get started.
- See the tutorial page in-app for rules, accepted symbols, and instructional videos!

## Common Questions
Q) What are the limitations of the canvas calculator?
A) The canvas can compute arithmetic and basic functions such as trig, logarithmic, exponentiation etc. It can also solve relatively simple one variable equations where the variable of interest is replaced with a  *?*. Functions that are outside of the bounds of computation (i.e. differentiation and integration) will be converted to text but that is all.

Q) Why should someone use Calcpad's calculator rather than the built-in iPhone calculator?
A) Calcpad's calculator allows the user to use parenthesis and computes the string with the correct order of operations, features that the built-in calculator does not have.

Q) Are there any features that are not obvious on the calculator?
A) One can compute exponentiation by using the ** command, also parenthesis that are left open will be automatically closed at the end of the string.

## Warnings
- App has been optimized for iPhones 6-X. It will work on smaller iPhones/iPads but will not look great.
- This app has only been tested/ deployed to ios devices, and likely will not work as advertised on Android/ windows devices.

## Future Aspirations
- We would like to integrate the wolfram alpha api into the canvas page so that more complicated tasks could be solved such as multivariate equations and integration/ differentiation.
- Expand the calculator to be a scientific calculator with more functionality.
- Reformat the about page to not cutoff on other devices.
- Test and deploy on Android devices.