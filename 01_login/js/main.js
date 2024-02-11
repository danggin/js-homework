const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@',
};

// @ 기호 포함, .이후 2글자 이상
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

// 최소 6글자 이상, 0~9숫자 1개이상 포함, 특수기호 1개 이상 포함
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const emailInput = document.querySelector('#userEmail');
const pwInput = document.querySelector('#userPassword');
const loginButton = document.querySelector('.btn-login');

function handleEmailCheck() {
  const value = this.value;

  if (emailReg(value)) {
    this.classList.remove('is--invalid');
  } else {
    this.classList.add('is--invalid');
  }
}

function handlePwCheck() {
  const value = this.value;

  if (pwReg(value)) {
    this.classList.remove('is--invalid');
  } else {
    this.classList.add('is--invalid');
  }
}

function handleLogin(e) {
  e.preventDefault();
  if (emailInput.value === user.id && pwInput.value === user.pw) {
    location.href = 'welcome.html';
  }
}

emailInput.addEventListener('input', handleEmailCheck);
pwInput.addEventListener('input', handlePwCheck);
loginButton.addEventListener('click', handleLogin);
