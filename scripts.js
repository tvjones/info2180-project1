window.onload = () =>{
    
      document.querySelector('button[type="submit"]').addEventListener("click",(e)=>{
       
        //prevent form submission
        e.preventDefault()

        //get email from field
        const emailInputField = document.getElementById("email");
        const email = emailInputField.value;

        //get element to display message
        const message = document.getElementsByClassName("message")[0]
    

        if(email.length===0){
            message.innerHTML = "Please enter a valid email address."
        }
        else{
            message.innerHTML = "Thank you! Your email address "+email+ " has been added to our mailing list!"
        }

      })
      
}


