document.getElementById('signup-btn').addEventListener('click',()=>{
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
    var confirmPassword = document.getElementById('confirmpass').value;
    
    console.log(firstName);
    console.log(lastName);

    console.log(email);

    console.log(password);

    console.log(confirmPassword);
    console.log(firstName);
    
    if(password === confirmPassword){
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
    }
    
    else
    {
        document.getElementById('error').innerText="Password do not match";
        document.getElementById('error').style.color="red";

    }


})