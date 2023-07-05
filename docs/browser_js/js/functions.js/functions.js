// 표준 function
function calculateSumeFirst (first, second){     //완전 펑션 
    return first +second;
}
 // 수업중 위 펑션만 사용함

let third = calculateSumeFirst (4,6);

let calculateSumeMinusSecond  = (first, second) => {      // 할당 펑션
    return first-second;
 }; 

 //alculateSumSecond(2,1)
 //1

 //callback function 
 function alculateforth(funcName,param1, param2){
     let result = funcName(param1, param2);
     result = result + 10;
     return result ; 
     

 }
