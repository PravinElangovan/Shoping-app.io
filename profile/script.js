var user;
var users;
var currentUser = sessionStorage.getItem('username')
console.log(currentUser)

function getUserById(email) {
    users = JSON.parse(localStorage.getItem('users'));
    user = users.find(user => user.email === email);
    console.log(user)
    return user;
  }

getUserById(currentUser);

function getUserDetails(user){
    document.getElementById('my-profile').innerHTML=`
    <h1>My Profile </h1>
    <div>First Name : ${user.firstName}</div>
    <div>Last Name : ${user.lastName}</div>
    <div>Email : ${user.email}</div>
    `
}
getUserDetails(user);

const editButton = document.getElementById('edit-info');





 document.getElementById('change-password').addEventListener('click', () => {
    var currentPassword = document.getElementById('old-pass').value;
    var newPassword = document.getElementById('new-pass').value;
    var confirmPassword = document.getElementById('confirm-pass').value;

    if (currentPassword !== user.password) {
        alert("Incorrect current password!");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("New password and confirm password do not match!");
        return;
    }

    // update the user's password in the local storage
    user.password = newPassword;
    localStorage.setItem('users', JSON.stringify(users));

    alert("Password updated successfully!");
});

document.getElementById('logout').addEventListener('click', () => {
    sessionStorage.clear();
    console.log("Logged Out Successfully")
    window.location.href = "../index.html";
})
