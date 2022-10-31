 creditCardData={}

 const credit=(name,accountno,aadharcard,salary,pancard,password)=>{

    if(accountno in creditCardData) {
        console.log("sorry! this account number already have an credit card")
        return {
            statusCode:422,
            status:false,
            message:"error"
          }
    }else{
        creditCardData[accountno]=
        {    
    name,
    accountno,
    aadharcard,
    salary,
    pancard,
    password
        }
        console.log(creditCardData);
        return{
            statusCode:200,
            status:true,
            message:"credit details added successfully"
          }
    }
 }
 module.exports={credit}


//  {
//     "name": "shaheer",
//     "accountno": 1007,
//     "aadharcard": 2323232323,
//     "salary": 230000,
//     "pancard": 121212,
//     "password": 1212
//   }