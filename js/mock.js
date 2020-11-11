/*** MOCK LOGIN ***/
function login(e) {
  e.preventDefault();
  const user = document.getElementById('user');
  const password = document.getElementById('password');
  const alert = document.getElementsByClassName('login-alert');
  const userMocked = 'email.usuario@compasso.com.br';
  const passwordMocked = 'useruol2020';
  if (user.value !== userMocked || password.value !== passwordMocked) {
    user.classList.add('login-input-alert');
    password.classList.add('login-input-alert');
    alert[0].style.visibility = 'visible';
    alert[1].style.visibility = 'visible';
  } else {
    user.classList.remove('login-input-alert');
    password.classList.remove('login-input-alert');
    alert[0].style.visibility = 'hidden';
    alert[1].style.visibility = 'hidden';
    window.location.href = './page/home.html';
  }
}