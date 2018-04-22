import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-calc',
  templateUrl: 'calc.html'
})

export class CalcPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  // NOTES: divide by zero is handled differently from all other errors. Maybe should be fixed up, but it might be difficult
  // Make decisions about how large of numbers we want to allow
  // I made it so that e is treated like an operation for error handling
  // Minus signs at the beginning of a string, right after another symbol indicate a negative number. 
  // Remember to highlight decision to allow the user to edit the result string and delete characters. More error handling to deal with, but makes sure the user doesn't
  //    feel like the calculator is broken
  // Add ionic object that lets you have a cursor on the text box. 

  screen = "";
  error = "Unknown Error"
  //Global flag to keep track of whether the string should be updated at the end
  globalFlag = true;
<<<<<<< HEAD
  __MAX_LENGTH__ = 19;
  edit = "";
=======
>>>>>>> 055696bbf2b3413f59a15efdb944abc6dd686a10

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Invalid input',
      subTitle: this.error,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Did you mean to input this?',
      message: this.screen,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.screen = this.edit;
          }
        },
        {
          text: 'Yes',
          handler: () => {
          }
        }
      ]
    });
    alert.present();
  }

  //Swipe the display to delete the last character from the string
  swipe = function($e){
    if(this.screen.length != 0){
      if($e.offsetDirection == 2){
        if(this.screenIsInfinity(this.screen)){
          this.screen = this.screen.substring(0, this.screen.length-1);
        }
      }
      else if($e.offsetDirection == 4){
        // Swiped right
        if(this.screenIsInfinity(this.screen)){        
          this.screen = this.screen.substring(1);
        }
      }
    }
  }


  compute = function(){
    //REMOVE THIS GET BETTER WAY TO TEST
    // this.testingCalls();
    if(this.validString(this.screen)){
      this.screen = this.stringToMath(this.screen).toString();
    }
  }

  checkInput = function(input: any, char1 : string, char2: string){
    if(this.screen.charAt(this.screen.length - 1) == char1 && input == char2){
      return(true);
    } else {
      return(false);
    }
  }

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

  replaceInput = function(newChar: string){
    this.screen = this.screen.substring(0,this.screen.length - 1) + newChar;
  }

  correctConsecutiveOperations = function(input: any){
    var operationsMinusMinus = ["*","/","+","^"]
    
    if(this.checkInput(input,"*","*")){
      this.replaceInput("^(");
<<<<<<< HEAD
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
=======

    } else if (this.checkInput(input,"+","+")){
      this.replaceInput("+");
    } else if (this.checkInput(input,"+","-")){
      this.replaceInput("-");
    } else if (this.checkInput(input,"-","+")){
      this.replaceInput("-");
    } else if (this.checkInput(input,"-","-")){
      this.replaceInput("+");
    } else if (this.checkInput(input,"/","+")){
      this.replaceInput("/");
    } else if (this.checkInput(input,"*","+")){
      this.replaceInput("*");
    } else if (this.checkInput(input,"(","+")){
      this.replaceInput("(");
    } else if (this.checkInput(input,"+","*")){
      this.replaceInput("*");
    } else if (this.checkInput(input,"-","*")){
      this.replaceInput("*");
    } else if (this.checkInput(input,"+","/")){
      this.replaceInput("/");
    } else if (this.checkInput(input,"-","/")){
      this.replaceInput("/");
    } else if (this.checkInput(input,"/","/")){
      this.replaceInput("/");
    } else if (this.checkInput(input,"/","*")){
      this.replaceInput("*");
>>>>>>> 055696bbf2b3413f59a15efdb944abc6dd686a10
    } else {
      this.screen = this.screen += input;
    }
  }

  copyToDisplay = function(input: any) {
    if(!this.screenIsInfinity(this.screen)){
<<<<<<< HEAD
      if(this.screen.length <= this.__MAX_LENGTH__){
        this.correctConsecutiveOperations(input);

      }
      else{
        this.error = "Maximum length exceeded."
        this.presentAlert();
      }
=======
      this.correctConsecutiveOperations(input);
>>>>>>> 055696bbf2b3413f59a15efdb944abc6dd686a10
    }
    else{
      this.error = "The value is Infinity. Please clear the screen before making any additional inputs.";
      this.presentAlert();
    }
  }

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

  clearDisplay = function() {
    this.screen = "";
  }

  validString = function(str){
    // cases to consider: 

    //Empty string
    if(this.screen.length == 0){
      return(false);
    }

    // two operations in a row
    if(this.twoSeqOperations(str)){
      //Throw an error message!
      this.error = "Your expression contains two sequential operations.";
      this.presentAlert();
      return(false);
    }

    // Starts with an operation
    if(this.startsWithOperation(str)){
      //Throw an error message!
      this.error = "Your expression begins with an operation.";
      this.presentAlert();
      return(false);
    }

    // ends with an operation
    if(this.endsWithOperation(str)){
      //Throw an error message!
      this.error = "Your expression ends with an operation.";
      this.presentAlert();
      return(false);
    }

    // parentheses issues
    if(this.tooManyClosePar(str)){
      //Throw an error message!
      this.error = "Your expression has more closed parentheses than open.";
      this.presentAlert();
      return(false);
    }

    if(this.tooManyOpenPar(str)){
      var numParen = this.numberPar(str);
      var numExtra = numParen[0]-numParen[1];
      var extraParen = ""
      for(var i =0; i<numExtra; i++){
        extraParen += ")";
      }
<<<<<<< HEAD
      this.edit = this.screen;
      this.screen += extraParen;
    
      this.presentConfirm();
      
      // Have to return false here because the running thread won't stop and wait for this input :(
      // return(false);

      // while(this.tooManyOpenPar(str)){
      //   this.screen = this.screen + ")";
      // }
=======
      this.screen += extraParen;
>>>>>>> 055696bbf2b3413f59a15efdb944abc6dd686a10
    }

    // if(this.tooManyOpenPar(str)){
    //   //Throw an error message!
    //   this.error = "Your expression has an issue with the having more open parentheses than close.";
    //   this.presentAlert();
    //   return(false);
    // }

    // operation immediately after open or before close parentheses
    if(this.badOperationInParentheses(str)){
      //Throw an error message
      this.error = "Your expression has an operation immediately after an open parenthesis or before a close parenthesis.";
      this.presentAlert();
      return(false);
    }

    //More than one period in a number
    if(this.tooManyDecimals(str)){
      //Throw an error message!
      this.error = "One of your numbers contains more than one periods. ";
      this.presentAlert();
      return(false);
    }

    //empty parentheses
    if(this.emptyParentheses(str)){
      //Throw an error message!
      this.error = "The input contains and empty set of parentheses. ";
      this.presentAlert();
      return(false);
    }

    //really big numbers and people editing the string around e
    if(this.badEInput(str)){
      this.error = "Something went wrong around the character 'e'";
      this.presentAlert();
      return(false);
    }

    //Two sequential negatives
    if(this.twoSeqNegatives(str)){
      this.error = "Two or more consecutive '-'";
      this.presentAlert();
      return(false);
    }

    if(this.operationsAfterMinus(str)){
      this.error = "Operation after minus sign.";
      this.presentAlert();
      return(false);
    }

    if(this.anythingButParAfterCarrot(str)){
      this.error = "Something other than an open parenthesis after ^.";
      this.presentAlert();
      return(false);
    }


    return(true);

  }

  anythingButParAfterCarrot = function(str){
    for(var i = 0; i < str.length; i++){
      if(str.charAt(i) == '^'){
        if(str.charAt(i+1) != '('){
          return(true);
        }
      }
    }
    return(false);
  }

  operationsAfterMinus = function(str){
    var ops = ['*', '+', '/', '^']
    for(var i = 0; i < str.length-1; i++){
      if(str.charAt(i) == '-'){
        if(ops.some(x=>x===str.charAt(i+1))){
          return(true);
        }
      }
    }
    return(false);
  }

  twoSeqNegatives = function(str){
    for(var i = 0; i < str.length-1; i++){
      if(str.charAt(i) == '-' && str.charAt(i+1) == '-'){
        return true;
      }
    }
    return(false);
  }

  twoSeqOperations = function(str){
    var indices = this.indicesOfOperations(str);
    for(var i = 0; i < indices.length; i++){
      if(indices[i] + 1 == indices[i+1]){
        return(true);
      }
    }
    return(false);
  }

  startsWithOperation = function(str){
    var operations = ["+", "*", "/", 'e', '^'];
    if(operations.indexOf(str.charAt(0)) != -1){
      return(true);
    }
    return(false);
  }

  endsWithOperation = function(str){
    var operations = ["+", "-", "*", "/", 'e', '^'];
    if(operations.indexOf(str.charAt(str.length-1)) != -1){
      return(true);
    }
    return(false);
  }

  tooManyDecimals = function(str){
    var numDec = 0;
    for(var i = 0; i < str.length; i++){
        if(str.charAt(i) == "."){
          numDec++;
        }
        if(numDec > 1){
          return true;
        }
        if(str.charAt(i) == "+" || str.charAt(i) == "-" || str.charAt(i) == "*" || str.charAt(i) == "/"){
          numDec = 0;
        }
    }
    return(false);
  }


  numberPar = function(str){
    var numOpen = 0;
    var numClose = 0;
    for(var i = 0; i < str.length; i++){
      if(str.charAt(i) == "("){
        numOpen++;
      }
      if(str.charAt(i) == ")"){
        numClose++;
      }
    }
    return([numOpen,numClose]);
  }

  tooManyOpenPar = function(str){
    var numPar = this.numberPar(str);
    var openPar = numPar[0];
    var closePar = numPar[1];

    if (openPar > closePar){
      return(true);
    }
    return(false);
  }

  tooManyClosePar = function(str){
    var numPar = this.numberPar(str);
    var openPar = numPar[0];
    var closePar = numPar[1];

    if (closePar > openPar){
      return(true);
    }
    return(false);
  }


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

  badOperationInParentheses = function(str){
    for(var i = 0; i < str.length; i++){
      if(str.charAt(i) == "(" && str.charAt(i+1) == "*"){
        return(true);
      }
      if(str.charAt(i) == ")" && str.charAt(i-1) == "*"){
        return(true);
      }
    }
    return(false);
  }

  emptyParentheses = function(str){
    for(var i = 0; i < str.length-1; i++){
      if(str.charAt(i) == '(' && str.charAt(i+1) == ')'){
        return(true);
      }
    }
    return(false);
  }

  badEInput = function(str){
    var pm = ['+', '-'];
    var digs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
    for(var i = 0; i < str.length-1; i++){
      //If the char is e...
      if(str.charAt(i) == 'e'){
        //And the next char isn't a plus or a minus and the previous character isn't a number
        if(pm.some(x => x === str.charAt(i + 1)) &&  digs.some(x => x === str.charAt(i - 1)) && digs.some(x => x === str.charAt(i+2))){
          if(str.charAt(i - 1) == '.'){
            //have to make sure there's a number before the period
            if(digs.some(x => x === str.charAt(i - 2))){
              //It's all good
            }
            else{return(true);}
          }
        }
        else{return(true);}
      }
    }
    return(false);
  }

  screenIsInfinity = function(str){
    if(this.screen == "Infinity"){
      return true;
    }
    return(false);
  }

  //*** Note 
  //
  //All this code should be put into a different file for readability
  //
  //***/
  
  indicesOfOperations(str){
    var i = 0;
    var operations: string[] = ["/", "+", "-", "*", '^'];
    var indices = [];
    for(i ; i < str.length; i++){
      if(str.charAt(i) == "e"){
        i++;
      }
      else{
        if(operations.some(x => x === str.charAt(i))){
          //Negatives have to be wrapped in parentheses, so don't add them if they're preceded by an operation.
          if(str.charAt(i) == '-' && indices[indices.length - 1] == i - 1){
            //Do nothing
          }
          else{
            indices.push(i);
          }
        }
      }
    }
    return(indices);
  }

  simpleArithmetic(num1, num2, operation){
    if(operation == "+"){
      return  num1 + num2;
    }

    if(operation == "-"){
      return num1 - num2;
    }

    if(operation == "*"){
      return num1 * num2;
    }

    if(operation == "/"){
      if(num2 == 0){
        this.error = "Divide by zero.";
        this.presentAlert();
        this.globalFlag = false;
      }
      return num1 / num2;
    }
  }

  doMultandDiv(nums, indices, str){
    //Treat everything like a stack
    var newNums = new Array();
    //Initialize for proper behavior
    var lastOp = "+";
    //Copy the indices array
    var copyIndices = Object.assign([], indices);

    while(copyIndices.length !== 0){

      var currOp = str.charAt(copyIndices.pop());

      if(currOp == "+" || currOp == "-"){
        if(lastOp == "+" || lastOp == "-"){
          newNums.push(nums.pop());
        }

      } else{
        if(lastOp == "*" || lastOp == "/"){
          var num1 = newNums.pop();
          var num2 = nums.pop();
          //Order has to be flipped for num1 and num2 because they are reversed from the stack
          newNums.push(this.simpleArithmetic(num2, num1, currOp));
        }
        else if(lastOp == "+" || lastOp == "-"){
          var num1 = nums.pop();
          var num2 = nums.pop();
          newNums.push(this.simpleArithmetic(num2, num1, currOp));
        }
      }
      lastOp = currOp;
    }

    newNums.push(nums.pop())

    return(newNums.reverse());
  }

  getParClose(str){
    //Get the index of the first set of outermost closing parentheses
    var parInd = str.indexOf("(");
    var numOpen = 0;
    var numClose = 0;
    var i = parInd;
    while(numClose < numOpen || i == parInd){
      if(str.charAt(i) == "("){
        numOpen = numOpen + 1;
      }
      if(str.charAt(i) == ")"){
        numClose = numClose + 1;
      }
      i++;
    }
    return(i-1);
  }

  grabNumbers = function(str, indices){
    var nums: Number[] = new Array();
    var numOp = indices.length;
    var i = 0;

    //Put in the first number
    nums.push(Number(str.substring(0,indices[0])));

    //Put all the numbers from the string into an array
    if(numOp > 1){
      for(i; i < indices.length - 1; i++){
        nums.push(Number(str.substring(indices[i] + 1, indices[i+1])));
      }
    }
    //Put in the last number
    nums.push(Number(str.substring(indices[numOp - 1] + 1)));

    return nums;
  }

  impliedMultiplications = function(str){
    var i = 1;
    var numChar = str.length;

    while(i < numChar - 1){
      if(str.charAt(i) == "(" && (str.charAt(i-1) != "*" && str.charAt(i-1) != "/" && str.charAt(i-1) != "+" && str.charAt(i-1) != "-" && str.charAt(i-1) != "(") && str.charAt(i-1) != '^'){
        // update string with a "*" at index i
        str = str.substring(0, i) + "*" + str.substring(i);
        i++;
      }
      if(str.charAt(i) == ")" && (str.charAt(i+1) != "*" && str.charAt(i+1) != "/" && str.charAt(i+1) != "+" && str.charAt(i+1) != "-" && str.charAt(i+1) != ")"&& str.charAt(i-1) != '^')){
        // update string with a "*" at index i+1
        str = str.substring(0, i+1) + "*" + str.substring(i+1);
        i++;
    }

      i++;
      numChar = str.length;
    }
    
    return str;
  }


  stringToMath = function(str){
    //get the number of operations in the string
    var indices = this.indicesOfOperations(str);

    // console.log(str)
    //Insert implied multiplications (parentheses next to numbers without an operator)
    str = this.impliedMultiplications(str);
    // console.log(str)

    //Handle parentheses
    if(str.indexOf("(") != -1){
      var parInd = str.indexOf("(") + 1;
      var parEnd = this.getParClose(str);
      //console.log(str);
      var parVal = this.stringToMath(str.substring(parInd, parEnd));
      //Reupdate in case the string is very different from before
      parEnd = this.getParClose(str);
      var newStr = str.substring(0, parInd - 1) + String(parVal) + str.substring(parEnd+1);
      //console.log(newStr);
      return this.stringToMath(newStr);
    }

    //If there are no operations to be done, just return the string as a number
    if(indices.length == 0){
      return(Number(str));
    }

    var nums = this.grabNumbers(str, indices);

    //Very careful string handling for exponents
    while(str.indexOf('^') != -1){
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
      if(car_ind_num == 0){
        str = expVal.toString() + str.substring(len_num1+len_num2 + 1, str.length)
      }
      else{
        str = str.substring(0, carInd - len_num1) + expVal.toString() + str.substring(carInd + len_num2 + 1, str.length)
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
    if(str.charAt(indices[0]) == "*" || str.charAt(indices[0]) == "/"){
      nums = nums.slice(1);
    }

    //Remove all the multiplcation and division indices as they were computed above
    var newIndices = new Array();
    for(var i = 0; i < indices.length; i++) {
        var currOp = str.charAt(indices[i]);
        if(currOp == "+" || currOp == "-"){
          newIndices.push(indices[i]);
        }
    }
    indices = newIndices;
    var ans = nums[0];
    
    //Do all the additions and subtractions
    for(var i = 0; i < indices.length; i++){
        ans = this.simpleArithmetic(ans, nums[i+1], str.charAt(indices[i]));
    }

    if(!this.globalFlag){
      this.globalFlag = true;
      return this.screen;
    }

    return(ans)
    
  }

  // Unit tests!
  testingCalls = function(){
    //Test basic addition
    var testStr = "6+3";
    var ans = 9;
    this.testStringToMath(testStr, ans)
    
    // Test basic subtraction
    testStr = "9-3";
    ans = 6;
    this.testStringToMath(testStr, ans)

    //Test basic multiplication
    testStr = "6*3";
    ans = 18;
    this.testStringToMath(testStr, ans)

    //Test basic multiplication
    testStr = "6/3";
    ans = 2;
    this.testStringToMath(testStr, ans)

    //Test linked addition
    testStr = "6+3+3";
    ans = 12;
    this.testStringToMath(testStr, ans)

    //Test linked multiplication
    testStr = "6*3*4";
    ans = 72;
    this.testStringToMath(testStr, ans)

    //Test both addition and multiplication
    testStr = "6+3*3";
    ans = 15;
    this.testStringToMath(testStr, ans)

    //Test all four in one
    testStr = "6+3*5-6/3";
    ans = 19;
    this.testStringToMath(testStr, ans)

    //Test negative numbers with addition
    testStr = "6+-3";
    ans = 3;
    this.testStringToMath(testStr, ans)

    //Test negative numbers with addition
    testStr = "-6+3";
    ans = -3;
    this.testStringToMath(testStr, ans)

    //Test negative numbers with addition
    testStr = "-6*3";
    ans = -18;
    this.testStringToMath(testStr, ans)

    //Test negative numbers with addition
    testStr = "6*-3";
    ans = -18;
    this.testStringToMath(testStr, ans)

    //Test negative numbers with division
    testStr = "6/-3";
    ans = -2;
    this.testStringToMath(testStr, ans)

    //Test negative numbers with division
    testStr = "-6/3";
    ans = -2;
    this.testStringToMath(testStr, ans)

    //Test negative numbers with multiplication
    testStr = "-6/-3";
    ans = 2;
    this.testStringToMath(testStr, ans)

    // Test parentheses
    testStr = "(6)";
    ans = 6;
    this.testStringToMath(testStr, ans)

    // Test parentheses
    testStr = "(-6)";
    ans = -6;
    this.testStringToMath(testStr, ans)

    // Test parentheses
    testStr = "(6+2)";
    ans = 8;
    this.testStringToMath(testStr, ans)

    // Test parentheses
    testStr = "(6)+2";
    ans = 8;
    this.testStringToMath(testStr, ans)

    // Test parentheses
    testStr = "(6)*2";
    ans = 12;
    this.testStringToMath(testStr, ans)

    // Test parentheses
    testStr = "(6)/2";
    ans = 3;
    this.testStringToMath(testStr, ans)

    // Test parentheses
    testStr = "4+(-6)+2";
    ans = 0;
    this.testStringToMath(testStr, ans)

    // Test parentheses
    testStr = "(6+3)*(6+4)";
    ans = 90;
    this.testStringToMath(testStr, ans)

    // Test parentheses
    testStr = "(6+3)/(9-3+3)";
    ans = 1;
    this.testStringToMath(testStr, ans)

    // Test parentheses
    testStr = "(3+(2+3*2)+3)";
    ans = 14;
    this.testStringToMath(testStr, ans)

    // Test parentheses
    var testStr = "6+(3+(2+3*2)+3)";
    var ans = 20;
    this.testStringToMath(testStr, ans)

    // Test parentheses
    testStr = "(6+(3+(2+3*2)+3))";
    ans = 20;
    this.testStringToMath(testStr, ans)

    // Test parentheses
    testStr = "(6+(3+(2+3*2)+3))/(1+1)";
    ans = 10;
    this.testStringToMath(testStr, ans)

    // Test parentheses
    testStr = "((6+(3+(2+3*2)+3))/(1+1))";
    ans = 10;
    this.testStringToMath(testStr, ans)

    // Test parentheses
    testStr = "2((6+(3+(2+3*2)+3))/(1+1))";
    ans = 20;
    this.testStringToMath(testStr, ans)

    // Test parentheses
    testStr = "((8))";
    ans = 8;
    this.testStringToMath(testStr, ans)

    //Test exponents
    testStr = "2^(3)"
    ans = 8;
    this.testStringToMath(testStr, ans)
    
    //Test exponents
    testStr = "2^(3)+3"
    ans = 11;
    this.testStringToMath(testStr, ans)

    //Test exponents
    testStr = "3+2^(3)+3"
    ans = 14;
    this.testStringToMath(testStr, ans)

    //Test exponents
    testStr = "2^(2^2)"
    ans = 16;
    this.testStringToMath(testStr, ans)

    //Test exponents
    testStr = "2^(2^2-1)"
    ans = 8;
    this.testStringToMath(testStr, ans)

    //Test exponents
    testStr = "4^(.5)"
    ans = 2;
    this.testStringToMath(testStr, ans)

    //Test exponents
    testStr = "2^(-1)"
    ans = 0.5;
    this.testStringToMath(testStr, ans)

    //Test exponents
    testStr = "2^(2)*9"
    ans = 36;
    this.testStringToMath(testStr, ans)

    //Test exponents
    testStr = "2^(4)+2^(4)"
    ans = 32;
    this.testStringToMath(testStr, ans)

  }

  testStringToMath = function(str, ans){
    var calculatedAnswer = this.stringToMath(str);
    if(calculatedAnswer != ans){
      //Test failed!
      console.log("Test failed for string = " + str + ". Expected " + ans + " and got " + calculatedAnswer + ".")
    }
    else{
      console.log("Test passed!")
    }
  }

}