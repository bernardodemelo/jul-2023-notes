function isDivisible(firstParam, ...otherParams){
    // firstParam is going to label the first argument
    // ...otherParams is an array that is going to address 
    // all other arguments
    let trueFlag = true; 
    otherParams.forEach((number)=>{
      // if the firstParam is not divisible by number...
      if(firstParam % number !== 0) {
      // ... then, trueFlag is going to be false.
          trueFlag = false;
      }
    })
    
    // return trueFlag variable in the end. 
    return trueFlag
}