const users = JSON.parse(localStorage.getItem('users'));
console.log(users);

document.getElementById('login-btn').addEventListener('click',()=>{

    var enteredEmail = document.getElementById('email').value;
    var enteredPassword = document.getElementById('password').value;

    
    let user = users.find(u => u.email === enteredEmail && u.password === enteredPassword);
    if (user) {
        window.location.href="/shop/index.html";
        console.log('Login Successful')
        //this will for finding who is the current user
        sessionStorage.setItem('username',user.email);
        console.log(user.email);
        
      } else {
        document.getElementById("error").innerText = "Email Password do not match";
        document.getElementById("error").style.color = "red";

      }
    

})