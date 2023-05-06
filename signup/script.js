let users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('signup-btn').addEventListener('click', () => {
  let firstName = document.getElementById('fname').value;
  let lastName = document.getElementById('lname').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('pass').value;
  let confirmPassword = document.getElementById('confirmpass').value;

  if (password === confirmPassword) {
    let user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    console.log(users);
    window.location.href = '/login/login.html';
  } else {
    document.getElementById('error').innerText = "Passwords do not match";
    document.getElementById('error').style.color = "red";
  }
});
