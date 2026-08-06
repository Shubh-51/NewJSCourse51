"use strict";
//console.log(3>2); //true
//console.log(3<2); //false
//console.log(3>=2); //true
//console.log(3<=2); //false
//console.log(3==2); //false
//console.log(3!=2); //true
//console.log(3==="3"); //false
//console.log(3!=="3"); //true

//console.log("3" > 2); //true string is converted to number and then compared
//console.log("03" > 2); //true string is converted to number and then compared

//console.log(null > 0); //false null is converted to 0 and then compared
//console.log(null >= 0); //true null is converted to 0 and then compared 
//console.log(null == 0); //false null is not converted to 0 when compared with == operator 
//however, null is converted to 0 when compared with >, >=, <, <= operators. 
// This is because the == operator does not perform type coercion, 
// while the other comparison operators do.
//explain == operator: The == operator compares two values for equality,
//  but it does not check for type.
//console.log("2"==2)//true because string is converted to number and then compared why then Nulll is not 
//converted to 0 when compared with == operator? because null is only equal to undefined and not equal to any other value.
//console.log("2"===2)//false because string is not converted to number and then compared
console.log(null==undefined) //true because null is only equal to undefined and not equal to any other value.;
console.log(undefined>0) //false undefined is converted to NaN and then compared
console.log(undefined<0) //false undefined is converted to NaN and then compared
console.log(undefined==0) //false undefined is not converted to 
//0 when compared with == operator


