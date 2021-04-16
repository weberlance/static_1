import _ from 'lodash';
import '../styles/index.scss';
import { isAuth, getUser } from './utils';
import { goToLoginPage } from './login';
import greetings from './templates/greetings';

if (!isAuth()) {
  goToLoginPage();
}

const user = getUser();
const greetingsEl = document.getElementById('greetings');
if (greetingsEl) {
  const greetingsTemplate = _.template(greetings);
  greetingsEl.innerHTML = greetingsTemplate(user);
}
