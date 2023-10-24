
var number= document.querySelector("#numero");
var resul = document.querySelector("#resul");
var precio = 400000


console.log(precio)

function suma(){
   var  numberFormated = parseInt (number.innerText)
        number.innerText = numberFormated + 1  
        resul.innerText =(numberFormated  + 1 )* precio 
    


    }
    
console.log(number)

function resta () {
    var  numberFormated = parseInt (number.innerText) 
         number.innerText = numberFormated   - 1
         resul.innerText = (numberFormated - 1) * precio 
         
    
}

 console.log(number)



  





 





    

