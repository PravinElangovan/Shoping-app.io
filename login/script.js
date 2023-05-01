document.getElementById('login-btn').addEventListener('click',()=>{

    var enteredEmail = document.getElementById('email').value;
    var enteredPassword = document.getElementById('password').value;

    console.log(enteredEmail);
    console.log(enteredPassword);
    const storedEmail= localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    console.log(storedEmail);
    console.log(storedPassword);

    if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
        window.location.href="/shop/index.html";
      } else {
        document.getElementById("error").innerText = "Email Password do not match";
        document.getElementById("error").style.color = "red";

      }
      
            


})