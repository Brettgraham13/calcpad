webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calc_calc__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_script_canvas_my_script_canvas__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__calc_calc__["a" /* CalcPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        // tab4Root = CanvasPage;
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__my_script_canvas_my_script_canvas__["a" /* MyScriptCanvasPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\brett\Documents\Macalester\calcpad\src\pages\tabs\tabs.html"*/'<ion-tabs>\n    <!-- <ion-tab [root]="tab4Root" tabTitle="Canvas" tabIcon="brush"></ion-tab> -->\n    <ion-tab [root]="tab5Root" tabTitle="Script" tabIcon="brush"></ion-tab>\n    <ion-tab [root]="tab1Root" tabTitle="Calculator" tabIcon="calculator"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\brett\Documents\Macalester\calcpad\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\brett\Documents\Macalester\calcpad\src\pages\about\about.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            About\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    \n\n    <ion-slides pager>\n\n\n\n        <ion-slide>\n\n            <h2>CalcPad</h2>\n\n            <p>\n\n                Ready to get started using CalcPad? Follow this tutorial!\n\n            </p>\n\n            <p>\n\n                <img id="logo" src="assets/imgs/calcpad_logo.png">\n\n            </p>\n\n        </ion-slide>\n\n\n\n        <ion-slide>\n\n            <h2>Canvas Rules</h2>\n\n            <p>\n\n                Our canvas is an arithmetic solver where input equations can be solved under the following conditions:\n\n            </p>\n\n            <ul>\n\n                <li>The equation must contain numbers and/or fractions and at least one operator from the list below</li>\n\n                <p>\n\n                    <img src="assets/imgs/symbols.png">\n\n                </p>\n\n                <li>Equations with one unknown can be solved, but the variable has to be highlighted with a question mark</li>\n\n                <p>\n\n                    <img id="equations" src="assets/imgs/solver.png">\n\n                </p>\n\n                <li>Equations with more than one unknown can be recognized and typeset, but not solved</li>\n\n                <p>\n\n                    <img id="equations" src="assets/imgs/integral.png">\n\n                </p>\n\n            </ul>\n\n        </ion-slide> \n\n\n\n        <ion-slide>\n\n            <h2>Canvas Demo</h2>\n\n            <p>\n\n                On the CalcPad canvas, you can use your finger to draw mathematical expressions that you\'d like to calculate.\n\n            </p>\n\n            <video src = "assets/imgs/canvas1.mp4" autoplay loop> </video>\n\n            <p>\n\n                Once you\'re ready to evaluate your expression, draw an equals sign on the canvas.\n\n            </p>\n\n            <video src = "assets/imgs/canvas2.mp4" autoplay loop> </video>\n\n        </ion-slide> \n\n        \n\n        <ion-slide>\n\n            <h2>Calculator Demo</h2>\n\n        </ion-slide> \n\n\n\n    </ion-slides>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\brett\Documents\Macalester\calcpad\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\brett\Documents\Macalester\calcpad\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-content padding>\n    <h2>Project</h2>\n    <p>\n        To learn more about CalcPad, visit our github repo @Brettgraham13/calcpad.\n    </p>\n    <p>\n      <img id="logo" src="assets/imgs/calcpad_logo.png"/>\n    </p>\n    <h2>Developers</h2>\n    <p>\n      We\'re a team of four students at Macalester College in St. Paul, MN. \n      Read our short bios here!\n    </p>\n\n    <ion-card>\n      <img src="assets/imgs/nina.jpg"/>\n      <ion-card-content>\n        <ion-card-title>\n          Nina Brim\n          </ion-card-title>\n        <p>\n          Insert bio here\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <img src="assets/imgs/brett.jpg"/>\n      <ion-card-content>\n        <ion-card-title>\n          Brett Graham\n          </ion-card-title>\n        <p>\n          Insert bio here\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <img src="assets/imgs/ionatan.jpg"/>\n      <ion-card-content>\n        <ion-card-title>\n          Ionatan Kuperwajs\n          </ion-card-title>\n        <p>\n          Insert bio here\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <img src="assets/imgs/scott.jpg"/>\n      <ion-card-content>\n        <ion-card-title>\n          Scott Pedersen\n          </ion-card-title>\n        <p>\n          Insert bio here\n        </p>\n      </ion-card-content>\n    </ion-card>\n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\brett\Documents\Macalester\calcpad\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalcPage = (function () {
    function CalcPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        // NOTES: divide by zero is handled differently from all other errors. Maybe should be fixed up, but it might be difficult
        // Make decisions about how large of numbers we want to allow
        // I made it so that e is treated like an operation for error handling
        // Minus signs at the beginning of a string, right after another symbol indicate a negative number. 
        // Remember to highlight decision to allow the user to edit the result string and delete characters. More error handling to deal with, but makes sure the user doesn't
        //    feel like the calculator is broken
        // Add ionic object that lets you have a cursor on the text box. 
        this.screen = "";
        this.error = "Unknown Error";
        //Global flag to keep track of whether the string should be updated at the end
        this.globalFlag = true;
        this.__MAX_LENGTH__ = 19;
        this.edit = "";
        //Swipe the display to delete the last character from the string
        this.swipe = function ($e) {
            if (this.screen.length != 0) {
                if ($e.offsetDirection == 2) {
                    this.screen = this.screen.substring(0, this.screen.length - 1);
                }
                else if ($e.offsetDirection == 4) {
                    // Swiped right
                    this.screen = this.screen.substring(1);
                }
            }
        };
        this.compute = function () {
            //REMOVE THIS GET BETTER WAY TO TEST
            this.testingCalls();
            if (this.validString(this.screen)) {
                this.screen = this.stringToMath(this.screen).toString();
            }
        };
        this.checkInput = function (input, char1, char2) {
            if (this.screen.charAt(this.screen.length - 1) == char1 && input == char2) {
                return (true);
            }
            else {
                return (false);
            }
        };
        // previousWasOperation = function(){
        //   var operations = ["*", "/","+","-","^"];
        //   if(operations.indexOf(this.screen.charAt(this.screen.length - 1))>-1){
        //     return(true);
        //   } else {
        //     return(false);
        //   }
        // }
        // currentIsOperation  = function(input: any){
        //   var operations = ["*", "/","+","-","^"];
        //   if(operations.indexOf(input)>-1){
        //     return(true);
        //   } else {
        //     return(false);
        //   }
        // }
        this.replaceInput = function (newChar) {
            this.screen = this.screen.substring(0, this.screen.length - 1) + newChar;
        };
        this.correctConsecutiveOperations = function (input) {
            var operationsMinusMinus = ["*", "/", "+", "^"];
            if (this.checkInput(input, "*", "*")) {
                this.replaceInput("^(");
                // } else if (this.checkInput(input,"+","+")){
                //   this.replaceInput("+");
                // } else if (this.checkInput(input,"+","-")){
                //   this.replaceInput("-");
                // } else if (this.checkInput(input,"-","+")){
                //   this.replaceInput("-");
                // } else if (this.checkInput(input,"-","-")){
                //   this.replaceInput("+");
                // } else if (this.checkInput(input,"/","+")){
                //   this.replaceInput("/");
                // } else if (this.checkInput(input,"*","+")){
                //   this.replaceInput("*");
                // } else if (this.checkInput(input,"(","+")){
                //   this.replaceInput("(");
                // } else if (this.checkInput(input,"+","*")){
                //   this.replaceInput("*");
                // } else if (this.checkInput(input,"-","*")){
                //   this.replaceInput("*");
                // } else if (this.checkInput(input,"+","/")){
                //   this.replaceInput("/");
                // } else if (this.checkInput(input,"-","/")){
                //   this.replaceInput("/");
                // } else if (this.checkInput(input,"/","/")){
                //   this.replaceInput("/");
                // } else if (this.checkInput(input,"/","*")){
                //   this.replaceInput("*");
            }
            else {
                this.screen = this.screen += input;
            }
        };
        this.copyToDisplay = function (input) {
            if (!this.screenIsInfinity(this.screen)) {
                this.correctConsecutiveOperations(input);
            }
            else {
                this.error = "The value is Infinity. Please clear the screen before making any additional inputs.";
                this.presentAlert();
            }
        };
        this.deleteCharacter = function () {
            if (!this.screenIsInfinity(this.screen)) {
                this.screen = this.screen.substring(0, this.screen.length - 1);
                // this.correctConsecutiveOperations(input);
            }
            else {
                this.error = "The value is Infinity. Please clear the screen before making any additional inputs.";
                this.presentAlert();
            }
        };
        // copyToDisplay = function(input: any) {
        //   if(!this.screenIsInfinity(this.screen)){
        //     if(this.screen.charAt(this.screen.length - 1) == "*" && input == "*"){
        //         this.screen = this.screen.substring(0,this.screen.length - 1) + "^(";
        //     } 
        //     else {
        //       this.screen = this.screen += input;
        //     }
        //   }
        //   else{
        //     this.error = "The value is Infinity. Please clear the screen before making any additional inputs.";
        //     this.presentAlert();
        //   }
        // }
        this.clearDisplay = function () {
            this.screen = "";
        };
        this.validString = function (str) {
            // cases to consider: 
            //Empty string
            if (this.screen.length == 0) {
                return (false);
            }
            // two operations in a row
            if (this.twoSeqOperations(str)) {
                //Throw an error message!
                this.error = "Your expression contains two sequential operations.";
                this.presentAlert();
                return (false);
            }
            // Starts with an operation
            if (this.startsWithOperation(str)) {
                //Throw an error message!
                this.error = "Your expression begins with an operation.";
                this.presentAlert();
                return (false);
            }
            // ends with an operation
            if (this.endsWithOperation(str)) {
                //Throw an error message!
                this.error = "Your expression ends with an operation.";
                this.presentAlert();
                return (false);
            }
            // parentheses issues
            if (this.tooManyClosePar(str)) {
                //Throw an error message!
                this.error = "Your expression has an issue with the having more closed parentheses than open.";
                this.presentAlert();
                return (false);
            }
            // if(this.tooManyOpenPar(str)){
            //   //Throw an error message!
            //   this.error = "Your expression has an issue with the having more open parentheses than close.";
            //   this.presentAlert();
            //   return(false);
            // }
            // operation immediately after open or before close parentheses
            if (this.badOperationInParentheses(str)) {
                //Throw an error message
                this.error = "Your expression has an operation immediately after an open parenthesis or before a close parenthesis.";
                this.presentAlert();
                return (false);
            }
            //More than one period in a number
            if (this.tooManyDecimals(str)) {
                //Throw an error message!
                this.error = "One of your numbers contains more than one periods. ";
                this.presentAlert();
                return (false);
            }
            //empty parentheses
            if (this.emptyParentheses(str)) {
                //Throw an error message!
                this.error = "The input contains and empty set of parentheses. ";
                this.presentAlert();
                return (false);
            }
            //really big numbers and people editing the string around e
            if (this.badEInput(str)) {
                this.error = "Something went wrong around the character 'e'";
                this.presentAlert();
                return (false);
            }
            //Two sequential negatives
            if (this.twoSeqNegatives(str)) {
                this.error = "Two or more consecutive '-'";
                this.presentAlert();
                return (false);
            }
            if (this.operationsAfterMinus(str)) {
                this.error = "Operation after minus sign.";
                this.presentAlert();
                return (false);
            }
            if (this.anythingButParAfterCarrot(str)) {
                this.error = "Something other than an open parenthesis after ^.";
                this.presentAlert();
                return (false);
            }
            if (this.tooManyOpenPar(str)) {
                var numParen = this.numberPar(str);
                var numExtra = numParen[0] - numParen[1];
                var extraParen = "";
                for (var i = 0; i < numExtra; i++) {
                    extraParen += ")";
                }
                this.edit = this.screen;
                this.screen += extraParen;
                this.presentConfirm();
            }
            return (true);
        };
        this.anythingButParAfterCarrot = function (str) {
            for (var i = 0; i < str.length; i++) {
                if (str.charAt(i) == '^') {
                    if (str.charAt(i + 1) != '(') {
                        return (true);
                    }
                }
            }
            return (false);
        };
        this.operationsAfterMinus = function (str) {
            var ops = ['*', '+', '/', '^'];
            for (var i = 0; i < str.length - 1; i++) {
                if (str.charAt(i) == '-') {
                    if (ops.some(function (x) { return x === str.charAt(i + 1); })) {
                        return (true);
                    }
                }
            }
            return (false);
        };
        this.twoSeqNegatives = function (str) {
            for (var i = 0; i < str.length - 1; i++) {
                if (str.charAt(i) == '-' && str.charAt(i + 1) == '-') {
                    return true;
                }
            }
            return (false);
        };
        this.twoSeqOperations = function (str) {
            var indices = this.indicesOfOperations(str);
            for (var i = 0; i < indices.length; i++) {
                if (indices[i] + 1 == indices[i + 1]) {
                    return (true);
                }
            }
            return (false);
        };
        this.startsWithOperation = function (str) {
            var operations = ["+", "*", "/", 'e', '^'];
            if (operations.indexOf(str.charAt(0)) != -1) {
                return (true);
            }
            return (false);
        };
        this.endsWithOperation = function (str) {
            var operations = ["+", "-", "*", "/", 'e', '^'];
            if (operations.indexOf(str.charAt(str.length - 1)) != -1) {
                return (true);
            }
            return (false);
        };
        this.tooManyDecimals = function (str) {
            var numDec = 0;
            for (var i = 0; i < str.length; i++) {
                if (str.charAt(i) == ".") {
                    numDec++;
                }
                if (numDec > 1) {
                    return true;
                }
                if (str.charAt(i) == "+" || str.charAt(i) == "-" || str.charAt(i) == "*" || str.charAt(i) == "/") {
                    numDec = 0;
                }
            }
            return (false);
        };
        this.numberPar = function (str) {
            var numOpen = 0;
            var numClose = 0;
            for (var i = 0; i < str.length; i++) {
                if (str.charAt(i) == "(") {
                    numOpen++;
                }
                if (str.charAt(i) == ")") {
                    numClose++;
                }
            }
            return ([numOpen, numClose]);
        };
        this.tooManyOpenPar = function (str) {
            var numPar = this.numberPar(str);
            var openPar = numPar[0];
            var closePar = numPar[1];
            if (openPar > closePar) {
                return (true);
            }
            return (false);
        };
        this.tooManyClosePar = function (str) {
            var numPar = this.numberPar(str);
            var openPar = numPar[0];
            var closePar = numPar[1];
            if (closePar > openPar) {
                return (true);
            }
            return (false);
        };
        // tooManyClosePar = function(str){
        //   var numOpen = 0;
        //   var numClose = 0;
        //   for(var i = 0; i < str.length; i++){
        //       if(str.charAt(i) == "("){
        //         numOpen++;
        //       }
        //       if(str.charAt(i) == ")"){
        //         numClose++;
        //       }
        //       if(numClose > numOpen){
        //         return(true);
        //       }
        //   }
        //   if(numOpen > numClose){return(true)};
        //   return(false);
        // }
        this.badOperationInParentheses = function (str) {
            for (var i = 0; i < str.length; i++) {
                if (str.charAt(i) == "(" && str.charAt(i + 1) == "*") {
                    return (true);
                }
                if (str.charAt(i) == ")" && str.charAt(i - 1) == "*") {
                    return (true);
                }
            }
            return (false);
        };
        this.emptyParentheses = function (str) {
            for (var i = 0; i < str.length - 1; i++) {
                if (str.charAt(i) == '(' && str.charAt(i + 1) == ')') {
                    return (true);
                }
            }
            return (false);
        };
        this.badEInput = function (str) {
            var pm = ['+', '-'];
            var digs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
            for (var i = 0; i < str.length - 1; i++) {
                //If the char is e...
                if (str.charAt(i) == 'e') {
                    //And the next char isn't a plus or a minus and the previous character isn't a number
                    if (pm.some(function (x) { return x === str.charAt(i + 1); }) && digs.some(function (x) { return x === str.charAt(i - 1); }) && digs.some(function (x) { return x === str.charAt(i + 2); })) {
                        if (str.charAt(i - 1) == '.') {
                            //have to make sure there's a number before the period
                            if (digs.some(function (x) { return x === str.charAt(i - 2); })) {
                                //It's all good
                            }
                            else {
                                return (true);
                            }
                        }
                    }
                    else {
                        return (true);
                    }
                }
            }
            return (false);
        };
        this.screenIsInfinity = function (str) {
            if (this.screen == "Infinity") {
                return true;
            }
            return (false);
        };
        this.grabNumbers = function (str, indices) {
            var nums = new Array();
            var numOp = indices.length;
            var i = 0;
            //Put in the first number
            nums.push(Number(str.substring(0, indices[0])));
            //Put all the numbers from the string into an array
            if (numOp > 1) {
                for (i; i < indices.length - 1; i++) {
                    nums.push(Number(str.substring(indices[i] + 1, indices[i + 1])));
                }
            }
            //Put in the last number
            nums.push(Number(str.substring(indices[numOp - 1] + 1)));
            return nums;
        };
        this.impliedMultiplications = function (str) {
            var i = 1;
            var numChar = str.length;
            while (i < numChar - 1) {
                if (str.charAt(i) == "(" && (str.charAt(i - 1) != "*" && str.charAt(i - 1) != "/" && str.charAt(i - 1) != "+" && str.charAt(i - 1) != "-" && str.charAt(i - 1) != "(") && str.charAt(i - 1) != '^') {
                    // update string with a "*" at index i
                    str = str.substring(0, i) + "*" + str.substring(i);
                    i++;
                }
                if (str.charAt(i) == ")" && (str.charAt(i + 1) != "*" && str.charAt(i + 1) != "/" && str.charAt(i + 1) != "+" && str.charAt(i + 1) != "-" && str.charAt(i + 1) != ")" && str.charAt(i - 1) != '^')) {
                    // update string with a "*" at index i+1
                    str = str.substring(0, i + 1) + "*" + str.substring(i + 1);
                    i++;
                }
                i++;
                numChar = str.length;
            }
            return str;
        };
        this.stringToMath = function (str) {
            //get the number of operations in the string
            var indices = this.indicesOfOperations(str);
            // console.log(str)
            //Insert implied multiplications (parentheses next to numbers without an operator)
            str = this.impliedMultiplications(str);
            // console.log(str)
            //Handle parentheses
            if (str.indexOf("(") != -1) {
                var parInd = str.indexOf("(") + 1;
                var parEnd = this.getParClose(str);
                //console.log(str);
                var parVal = this.stringToMath(str.substring(parInd, parEnd));
                //Reupdate in case the string is very different from before
                parEnd = this.getParClose(str);
                var newStr = str.substring(0, parInd - 1) + String(parVal) + str.substring(parEnd + 1);
                //console.log(newStr);
                return this.stringToMath(newStr);
            }
            //If there are no operations to be done, just return the string as a number
            if (indices.length == 0) {
                return (Number(str));
            }
            var nums = this.grabNumbers(str, indices);
            //Very careful string handling for exponents
            while (str.indexOf('^') != -1) {
                var carInd = str.indexOf("^");
                //indices updated from scratch for multiple carrots in one string, could maybe do this more efficiently but idk seems hard.
                //Could also add a flag so this isn't done the first time through... Also the way the logic works only carrot indices really need to be updated I think
                indices = this.indicesOfOperations(str);
                var car_ind_num = indices.indexOf(carInd);
                var expVal = Math.pow(nums[car_ind_num], nums[car_ind_num + 1]);
                indices.pop(car_ind_num);
                var len_num1 = nums[car_ind_num].toString().length;
                var len_num2 = nums[car_ind_num + 1].toString().length;
                //Fix the string with the computed exponent
                if (car_ind_num == 0) {
                    str = expVal.toString() + str.substring(len_num1 + len_num2 + 1, str.length);
                }
                else {
                    str = str.substring(0, carInd - len_num1) + expVal.toString() + str.substring(carInd + len_num2 + 1, str.length);
                }
                //Fix the list of numbers with the new computation
                //Removes the two necessary numbers and inserts the correct value
                nums.splice(car_ind_num, 2, expVal);
            }
            //Speed up but doesn't seem very important
            //If the only operations are multiplication and division and we didn't divide by zero just return the val
            // var flag = true;
            // for(var i = 0; i < indices.length; i++){
            //   if(str.charAt(indices[i]) == "+" || str.charAt(indices[i]) == "-"){
            //     flag = false;
            //   }
            // } 
            // if(flag && this.globalFlag){
            //   var answ = this.doMultandDiv(nums, indices, str)[1];
            //   return (answ);
            // }
            //Do all the multiplications and divisions
            //For some reason this function return an array with the first element being empty if the first operation is "*" or "/"
            nums = this.doMultandDiv(nums, indices, str);
            if (str.charAt(indices[0]) == "*" || str.charAt(indices[0]) == "/") {
                nums = nums.slice(1);
            }
            //Remove all the multiplcation and division indices as they were computed above
            var newIndices = new Array();
            for (var i = 0; i < indices.length; i++) {
                var currOp = str.charAt(indices[i]);
                if (currOp == "+" || currOp == "-") {
                    newIndices.push(indices[i]);
                }
            }
            indices = newIndices;
            var ans = nums[0];
            //Do all the additions and subtractions
            for (var i = 0; i < indices.length; i++) {
                ans = this.simpleArithmetic(ans, nums[i + 1], str.charAt(indices[i]));
            }
            if (!this.globalFlag) {
                this.globalFlag = true;
                return this.screen;
            }
            return (ans);
        };
        // Unit tests!
        this.testingCalls = function () {
            //Test basic addition
            var testStr = "6+3";
            var ans = 9;
            this.testStringToMath(testStr, ans);
            // Test basic subtraction
            testStr = "9-3";
            ans = 6;
            this.testStringToMath(testStr, ans);
            //Test basic multiplication
            testStr = "6*3";
            ans = 18;
            this.testStringToMath(testStr, ans);
            //Test basic multiplication
            testStr = "6/3";
            ans = 2;
            this.testStringToMath(testStr, ans);
            //Test linked addition
            testStr = "6+3+3";
            ans = 12;
            this.testStringToMath(testStr, ans);
            //Test linked multiplication
            testStr = "6*3*4";
            ans = 72;
            this.testStringToMath(testStr, ans);
            //Test both addition and multiplication
            testStr = "6+3*3";
            ans = 15;
            this.testStringToMath(testStr, ans);
            //Test all four in one
            testStr = "6+3*5-6/3";
            ans = 19;
            this.testStringToMath(testStr, ans);
            //Test negative numbers with addition
            testStr = "6+-3";
            ans = 3;
            this.testStringToMath(testStr, ans);
            //Test negative numbers with addition
            testStr = "-6+3";
            ans = -3;
            this.testStringToMath(testStr, ans);
            //Test negative numbers with addition
            testStr = "-6*3";
            ans = -18;
            this.testStringToMath(testStr, ans);
            //Test negative numbers with addition
            testStr = "6*-3";
            ans = -18;
            this.testStringToMath(testStr, ans);
            //Test negative numbers with division
            testStr = "6/-3";
            ans = -2;
            this.testStringToMath(testStr, ans);
            //Test negative numbers with division
            testStr = "-6/3";
            ans = -2;
            this.testStringToMath(testStr, ans);
            //Test negative numbers with multiplication
            testStr = "-6/-3";
            ans = 2;
            this.testStringToMath(testStr, ans);
            // Test parentheses
            testStr = "(6)";
            ans = 6;
            this.testStringToMath(testStr, ans);
            // Test parentheses
            testStr = "(-6)";
            ans = -6;
            this.testStringToMath(testStr, ans);
            // Test parentheses
            testStr = "(6+2)";
            ans = 8;
            this.testStringToMath(testStr, ans);
            // Test parentheses
            testStr = "(6)+2";
            ans = 8;
            this.testStringToMath(testStr, ans);
            // Test parentheses
            testStr = "(6)*2";
            ans = 12;
            this.testStringToMath(testStr, ans);
            // Test parentheses
            testStr = "(6)/2";
            ans = 3;
            this.testStringToMath(testStr, ans);
            // Test parentheses
            testStr = "4+(-6)+2";
            ans = 0;
            this.testStringToMath(testStr, ans);
            // Test parentheses
            testStr = "(6+3)*(6+4)";
            ans = 90;
            this.testStringToMath(testStr, ans);
            // Test parentheses
            testStr = "(6+3)/(9-3+3)";
            ans = 1;
            this.testStringToMath(testStr, ans);
            // Test parentheses
            testStr = "(3+(2+3*2)+3)";
            ans = 14;
            this.testStringToMath(testStr, ans);
            // Test parentheses
            var testStr = "6+(3+(2+3*2)+3)";
            var ans = 20;
            this.testStringToMath(testStr, ans);
            // Test parentheses
            testStr = "(6+(3+(2+3*2)+3))";
            ans = 20;
            this.testStringToMath(testStr, ans);
            // Test parentheses
            testStr = "(6+(3+(2+3*2)+3))/(1+1)";
            ans = 10;
            this.testStringToMath(testStr, ans);
            // Test parentheses
            testStr = "((6+(3+(2+3*2)+3))/(1+1))";
            ans = 10;
            this.testStringToMath(testStr, ans);
            // Test parentheses
            testStr = "2((6+(3+(2+3*2)+3))/(1+1))";
            ans = 20;
            this.testStringToMath(testStr, ans);
            // Test parentheses
            testStr = "((8))";
            ans = 8;
            this.testStringToMath(testStr, ans);
            //Test exponents
            testStr = "2^(3)";
            ans = 8;
            this.testStringToMath(testStr, ans);
            //Test exponents
            testStr = "2^(3)+3";
            ans = 11;
            this.testStringToMath(testStr, ans);
            //Test exponents
            testStr = "3+2^(3)+3";
            ans = 14;
            this.testStringToMath(testStr, ans);
            //Test exponents
            testStr = "2^(2^2)";
            ans = 16;
            this.testStringToMath(testStr, ans);
            //Test exponents
            testStr = "2^(2^2-1)";
            ans = 8;
            this.testStringToMath(testStr, ans);
            //Test exponents
            testStr = "4^(.5)";
            ans = 2;
            this.testStringToMath(testStr, ans);
            //Test exponents
            testStr = "2^(-1)";
            ans = 0.5;
            this.testStringToMath(testStr, ans);
            //Test exponents
            testStr = "2^(2)*9";
            ans = 36;
            this.testStringToMath(testStr, ans);
            //Test exponents
            testStr = "2^(4)+2^(4)";
            ans = 32;
            this.testStringToMath(testStr, ans);
        };
        this.testStringToMath = function (str, ans) {
            var calculatedAnswer = this.stringToMath(str);
            if (calculatedAnswer != ans) {
                //Test failed!
                console.log("Test failed for string = " + str + ". Expected " + ans + " and got " + calculatedAnswer + ".");
            }
            else {
                console.log("Test passed!");
            }
        };
    }
    CalcPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Invalid input',
            subTitle: this.error,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    CalcPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Did you mean to input this?',
            message: this.screen,
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        _this.screen = _this.edit;
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    //*** Note 
    //
    //All this code should be put into a different file for readability
    //
    //***/
    CalcPage.prototype.indicesOfOperations = function (str) {
        var i = 0;
        var operations = ["/", "+", "-", "*", '^'];
        var indices = [];
        for (i; i < str.length; i++) {
            if (str.charAt(i) == "e") {
                i++;
            }
            else {
                if (operations.some(function (x) { return x === str.charAt(i); })) {
                    //Negatives have to be wrapped in parentheses, so don't add them if they're preceded by an operation.
                    if (str.charAt(i) == '-' && indices[indices.length - 1] == i - 1) {
                        //Do nothing
                    }
                    else {
                        indices.push(i);
                    }
                }
            }
        }
        return (indices);
    };
    CalcPage.prototype.simpleArithmetic = function (num1, num2, operation) {
        if (operation == "+") {
            return num1 + num2;
        }
        if (operation == "-") {
            return num1 - num2;
        }
        if (operation == "*") {
            return num1 * num2;
        }
        if (operation == "/") {
            if (num2 == 0) {
                this.error = "Divide by zero.";
                this.presentAlert();
                this.globalFlag = false;
            }
            return num1 / num2;
        }
    };
    CalcPage.prototype.doMultandDiv = function (nums, indices, str) {
        //Treat everything like a stack
        var newNums = new Array();
        //Initialize for proper behavior
        var lastOp = "+";
        //Copy the indices array
        var copyIndices = Object.assign([], indices);
        while (copyIndices.length !== 0) {
            var currOp = str.charAt(copyIndices.pop());
            if (currOp == "+" || currOp == "-") {
                if (lastOp == "+" || lastOp == "-") {
                    newNums.push(nums.pop());
                }
            }
            else {
                if (lastOp == "*" || lastOp == "/") {
                    var num1 = newNums.pop();
                    var num2 = nums.pop();
                    //Order has to be flipped for num1 and num2 because they are reversed from the stack
                    newNums.push(this.simpleArithmetic(num2, num1, currOp));
                }
                else if (lastOp == "+" || lastOp == "-") {
                    var num1 = nums.pop();
                    var num2 = nums.pop();
                    newNums.push(this.simpleArithmetic(num2, num1, currOp));
                }
            }
            lastOp = currOp;
        }
        newNums.push(nums.pop());
        return (newNums.reverse());
    };
    CalcPage.prototype.getParClose = function (str) {
        //Get the index of the first set of outermost closing parentheses
        var parInd = str.indexOf("(");
        var numOpen = 0;
        var numClose = 0;
        var i = parInd;
        while (numClose < numOpen || i == parInd) {
            if (str.charAt(i) == "(") {
                numOpen = numOpen + 1;
            }
            if (str.charAt(i) == ")") {
                numClose = numClose + 1;
            }
            i++;
        }
        return (i - 1);
    };
    CalcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calc',template:/*ion-inline-start:"C:\Users\brett\Documents\Macalester\calcpad\src\pages\calc\calc.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Calculator</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding no-bouce>\n\n    <div id = "container">\n\n        <div class="display" (swipe) = "swipe($event)" padding> {{screen}} </div>\n\n        <div class = "deleteButton" ion-button outline (click)="deleteCharacter()" padding> << </div>\n\n        <button ion-button (click)="clearDisplay()" large> c </button>\n\n        <button ion-button (click)="copyToDisplay(\'(\')" large> (</button>\n        \n        <button ion-button (click)="copyToDisplay(\')\')" large> ) </button>\n        \n        <button ion-button (click)="copyToDisplay(\'/\')" large> / </button>\n\n        <button ion-button (click)="copyToDisplay(\'7\')" large> 7 </button>\n\n        <button ion-button (click)="copyToDisplay(\'8\')" large> 8 </button>\n        \n        <button ion-button (click)="copyToDisplay(\'9\')" large> 9 </button>\n        \n        <button ion-button (click)="copyToDisplay(\'*\')" large> * </button>\n\n        <button ion-button (click)="copyToDisplay(\'4\')" large> 4 </button>\n\n        <button ion-button (click)="copyToDisplay(\'5\')" large> 5 </button>\n\n        <button ion-button (click)="copyToDisplay(\'6\')" large> 6 </button>\n\n        <button ion-button (click)="copyToDisplay(\'-\')" large> - </button>\n\n        <button ion-button (click)="copyToDisplay(\'1\')" large> 1 </button>\n\n        <button ion-button (click)="copyToDisplay(\'2\')" large> 2 </button>\n\n        <button ion-button (click)="copyToDisplay(\'3\')" large> 3 </button>\n\n        <button ion-button (click)="copyToDisplay(\'+\')" large> + </button>\n\n        <button ion-button (click)="copyToDisplay(\'0\')" large> 0 </button>\n\n        <button ion-button (click)="copyToDisplay(\'.\')" large> . </button>\n\n        <button ion-button outline class = "equals" (click)="compute()" large> = </button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\brett\Documents\Macalester\calcpad\src\pages\calc\calc.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CalcPage);
    return CalcPage;
}());

//# sourceMappingURL=calc.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyScriptCanvasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_myscript_dist_myscript_min_js__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_myscript_dist_myscript_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_myscript_dist_myscript_min_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyScriptCanvasPage = (function () {
    function MyScriptCanvasPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.clear = function () {
            this.editorElement.clear();
        };
        this.undo = function () {
            this.editorElement.undo();
        };
        this.redo = function () {
            this.editorElement.redo();
        };
        this.convert = function () {
            this.editorElement.convert();
        };
    }
    MyScriptCanvasPage.prototype.ngAfterViewInit = function () {
        this.editorElement = __WEBPACK_IMPORTED_MODULE_2_myscript_dist_myscript_min_js__["register"](this.editor.nativeElement, {
            recognitionParams: {
                type: 'MATH',
                protocol: 'WEBSOCKET',
                apiVersion: 'V4',
                server: {
                    scheme: 'https',
                    host: 'webdemoapi.myscript.com',
                    applicationKey: '7498d8dc-55db-4f40-8a80-625de7e17bed',
                    hmacKey: '2ef4521b-5697-4653-8f8f-defede0bac55',
                },
            },
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('editor'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MyScriptCanvasPage.prototype, "editor", void 0);
    MyScriptCanvasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-script-canvas',template:/*ion-inline-start:"C:\Users\brett\Documents\Macalester\calcpad\src\pages\my-script-canvas\my-script-canvas.html"*/'<ion-header>  \n\n  <ion-navbar>\n\n    <ion-title>\n\n        MyScript Canvas\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- <div id="result"></div>\n\n    \n\n -->\n\n\n\n<ion-content padding>\n\n    <div id = "container">\n\n\n\n    <button ion-button (click)="clear()" medium outline> <ion-icon name="trash"></ion-icon> </button>\n\n    <button ion-button (click)="undo()" medium outline> <ion-icon name="undo"></ion-icon> </button>\n\n    <button ion-button (click)="redo()" medium outline> <ion-icon name="redo"></ion-icon></button>\n\n    <button ion-button (click)="convert()" medium  outline id = "calc-button"> <ion-icon name="calculator"></ion-icon> </button>\n\n\n\n    </div>\n\n\n\n  <div touch-action=\'none\' class="editor" #editor></div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\brett\Documents\Macalester\calcpad\src\pages\my-script-canvas\my-script-canvas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MyScriptCanvasPage);
    return MyScriptCanvasPage;
}());

//# sourceMappingURL=my-script-canvas.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_calc_calc__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_my_script_canvas_my_script_canvas__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import { CanvasPage } from '../pages/canvas/canvas';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_calc_calc__["a" /* CalcPage */],
                // CanvasPage,
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_my_script_canvas_my_script_canvas__["a" /* MyScriptCanvasPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                // CanvasPage,
                __WEBPACK_IMPORTED_MODULE_6__pages_calc_calc__["a" /* CalcPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_my_script_canvas_my_script_canvas__["a" /* MyScriptCanvasPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { ScreenOrientation } from 'ionic-native';

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // ScreenOrientation.lockOrientation('portrait');
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\brett\Documents\Macalester\calcpad\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\brett\Documents\Macalester\calcpad\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map