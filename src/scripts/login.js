import { getUser } from './API';

export const goToLoginPage = () => {
  const url = '/login.html';
  if (window.location.pathname !== url) {
    window.location = url;
  }
};

const loginVisualStart = (form) => {
  form.classList.add('processed');
  for (const btn of form.querySelectorAll('button')) {
    btn.setAttribute('disabled', true);
  }
};

const loginVisualSuccess = (form) => {
  form.classList.remove('processed');
  for (const btn of form.querySelectorAll('button')) {
    btn.removeAttribute('disabled');
  }
};
const loginVisualFailure = (form) => {
  form.classList.remove('processed');
  form.classList.add('failed');
  for (const btn of form.querySelectorAll('button')) {
    btn.removeAttribute('disabled');
  }
};

const logOut = () => {
  window.localStorage.removeItem('user');
  goToLoginPage();
};

const logIn = (e) => {
  e.preventDefault();
  const form = e.target;
  loginVisualStart(form);
  const userFormData = new FormData(form);
  const userLoginData = Object.fromEntries(userFormData.entries());

  getUser()
    .then((res) => {
      loginVisualSuccess(form, res);
      window.localStorage.setItem('user', JSON.stringify({
        login: userLoginData.login,
        thumbnail: res.results[0].picture.thumbnail,
      }));
      window.location = '/';
    })
    .catch(() => loginVisualFailure(form));
};

const { loginForm } = document.forms;
if (loginForm) {
  loginForm.addEventListener('submit', logIn);
}

const btnLogout = document.getElementById('btnLogout');
if (btnLogout) {
  btnLogout.addEventListener('click', logOut);
}

export const blank = () => {};
