//closure is a function 

message =" g.m"

function closure(){
    let message = "g.m1"
    // console.log("hello" +message)
    function nestedfun(){
       console.log(message,'g.m1') 
    }
return nestedfun
}
 const outerfun = closure() //all varial will be used and it will return a value ,variable will be destroyed(lacal variable ) and get return value 
 const innerfun = outerfun() 
 console.log(innerfun(),'outerfun ')


 //in that case return value is function inside function use  variable of outer fun(that variable has destroyed , we will not getting anything but we got due to closure)
 // . variable has destroyed after outer fun call 
 //but not happen like that due to closure .return closure : closure is a function along with its environment(funxtion + lexical environment)
 //closure return function with lexical enviorment(variable which variable has already destroyed because initially function has already executed )
 //This is because the innerFunction maintains a reference to its outer scope, creating a closure.