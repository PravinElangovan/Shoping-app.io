var user;
var currentUser = sessionStorage.getItem('username')
console.log(currentUser)

function getUserById(email) {
    const users = JSON.parse(localStorage.getItem('users'));
    user = users.find(user => user.email === email);
    console.log(user)
    return user;
  }

getUserById(currentUser);



const saveButton = document.getElementById('save');
var firstName = document.getElementById('fname').value=user.firstName;
var lastName = document.getElementById('lname').value=user.lastName;
var password = document.getElementById('old-pass').value=user.password;


 var newfirstName=document.getElementById('fname').value;
 var newLastName=document.getElementById('lname').value

saveButton.addEventListener('click',()=>{
    console.log("Button clicked")
})
document.getElementById('logout').addEventListener('click', () => {
    sessionStorage.clear();
    console.log("Logged Out Successfully")
    window.location.href = "../index.html";
})
