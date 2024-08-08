const accountId ="1234"
let accountEmail="isha123@gmail.com"
var accountPassword="123"
// prefer not to use  var because of issue of scope and functional scope 
accountCity ="india " // yea tarika shi nhi hai 
// acountId =2  not allowed
// console.log(accountId);
let accountState;// value output by undefined  

accountEmail ="abc@gmail.com"
accountPassword="98765"
accountCity="ballia"

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
