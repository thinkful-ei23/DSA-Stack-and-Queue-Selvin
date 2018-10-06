'use strict';
const stackClass = require('./buildStack');


function main() {
  let starTrek = new stackClass();

  starTrek.push ('Kirk');
  starTrek.push ('Spock');
  starTrek.push ('McCoy');
  starTrek.push ('Scotty');

  //console.log(JSON.stringify(starTrek)); 

  function peek(stk) {
    console.log(stk.top.data)
  }
  
  function display(stk) {
    //base case
    let tempNode = stk.top;
    while (tempNode !== null) {
      console.log(tempNode.data);
      tempNode = tempNode.next;
    }  
  }  
  
  function remove(stk, item) {
    //base case
    let tempNode = stk.top;
    let prevNode;
    if (stk.top === null) {
      return null;
    }
    while (tempNode.data !== item && tempNode.next !== null) {
      prevNode = tempNode;
      tempNode = tempNode.next;
    }
    if (tempNode.next === null) {
      return new Error('Item not found!');
    }
    prevNode.next = prevNode.next.next;
    console.log(JSON.stringify(starTrek));
  }  

  //peek(starTrek);
  //display(starTrek);
  console.log(remove(starTrek, 'McCoy'));
}
//main();

function is_palindrome(s) {
  let forwardStack = new stackClass;
  let reverseStack = new stackClass;
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  twoStack(s);
  function twoStack(str) {
   
    // base case 
    if (str.length < 1) {

      return;
    }
    //recursive case
    forwardStack.push(str[0]);

    //console.log('forwardStack: ', JSON.stringify(forwardStack));
    reverseStack.push(str[str.length-1])
    twoStack(str.slice(1, str.length-1));
  }
  if (forwardStack.data == reverseStack.data) {
    return true;
  } 
}



// true, true, true'
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));
