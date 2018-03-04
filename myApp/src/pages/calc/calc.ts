import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-calc',
  templateUrl: 'calc.html'
})
export class CalcPage {

  constructor(public navCtrl: NavController) {

  }

  screen = "";

  compute = function(){
    this.screen = this.stringToMath(this.screen).toString();
  }

  copyToDisplay = function(input: any) {
    this.screen = this.screen += input;
  }

  clearDisplay = function() {
    this.screen = "";
  }

  //*** Note 
  //
  //All this code should be put into a different file for readability
  //
  //***/
  
  indicesOfOperations(str){
    var i = 0;
    var operations: string[] = ["/", "+", "-", "*"];
    var indices = [];
    for(i ; i < str.length; i++){
      if(operations.some(x => x === str.charAt(i))){
        indices.push(i);
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

  stringToMath(str){
    //get the number of operations in the string
    var indices = this.indicesOfOperations(str);
    var numOp = indices.length;
    var nums: Number[] = new Array();
    var i = 0;

    //Handle parentheses, still can't do nested parentheses
    if(str.indexOf("(") != -1){
      var parInd = str.indexOf("(") + 1;
      var parEnd = this.getParClose(str);
      var parVal = this.stringToMath(str.substring(parInd, parEnd));
      var newStr = str.substring(0, parInd - 1) + String(parVal) + str.substring(parEnd+1);
      return this.stringToMath(newStr);
    }

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

    //If the only operations are multiplication and division just return the val
    var flag = true;
    for(i = 0; i < indices.length; i++){
      if(str.charAt(indices[i]) == "+" || str.charAt(indices[i]) == "-"){
        flag = false;
      }
    } 
    if(flag){
      var answ = this.doMultandDiv(nums, indices, str)[1];
      return (answ);
    }


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

    return(ans)
    
  }
}