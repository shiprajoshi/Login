 //Type Error:

 const generateTypeError = () =>{
     let x = {};
     try{
        let mapX = x.map((val)=>{
            console.log(val);
        })
     }
     catch(e){
         console.error('Type Error!!', e)
     }
     
 } 

// generateTypeError();

 // Reference Error :

 const generateReferenceError =()=>{
     try{
         let fullName = x + "Joshi" 
         console.log('Full Name', fullName) 
     }
     catch(e){
        console.error('Reference Error !!!',e)
    }
 }

// generateReferenceError();

 // Range Error:

const generateRangeError =()=>{
    
        function fin(){
            var u = 2+8;
            //console.log(x)
            try{
                let x = new Array(-1);
                console.log(x)
            // if(x==10){
            //     fin();
            // }
        }
    catch(e){
        console.error('Range Error!!!!!!!!', e)
    }
}

fin();
   
}

//generateRangeError();

const generateSyntaxError=()=>{
    let fName="Shipra";
    let lName ="Joshi";
    try{
        eval('console.log(fName;lName)');
    }
    catch(e){
        console.log('Syntax Error')
    }
   
}
//generateSyntaxError();


//Internal Error not defined
//Eval Error

//URI Error:

const generateURIError=()=>{
    try {
        decodeURIComponent('%');
      } catch (e) {
          console.log('URI Error!!', e)
      }
}
//generateURIError();

const generateEvalError =()=>{
    try {
        throw new EvalError('Hello', 10);
      } catch (e) {
         console.log(e instanceof EvalError); // true
         }
}
generateEvalError();