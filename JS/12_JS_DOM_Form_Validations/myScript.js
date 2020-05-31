// form validation

let registrationForm = document.querySelector('#register-form');
registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();//stops auto form submission
    if (validateForm()){
        alert('Form is Submiteed Successfully')
    }
});
let validateForm = () => {

    return (checkUserName() & checkEmail() & checkPassword() & checkCpassword())


};


let checkUserName = () => {
  let inputEl = document.querySelector('#uName');
  let inputFeedbackEl = document.querySelector('#username-feedback');
  let regExp = /^[a-zA-Z0-9]{4,10}$/;
  if (regExp.test(inputEl.value)){
      makeValid(inputEl, inputFeedbackEl);
      return true;
  }
  else {
      makeInvalid(inputEl, inputFeedbackEl);
      return false;
  }
};

// make valid

let makeValid = (inputEl, inputFeedbackEl) => {
    inputEl.classList.add('is-form-valid');
    inputEl.classList.remove('is-form-invalid');
    inputFeedbackEl.classList.add('text-success');
    inputFeedbackEl.classList.remove('text-danger');

    inputFeedbackEl.innerText = 'Looks Good';
};

let makeInvalid = (inputEl, inputFeedbackEl) => {
    inputEl.classList.remove('is-form-valid');
    inputEl.classList.add('is-form-invalid');
    inputFeedbackEl.classList.remove('text-success');
    inputFeedbackEl.classList.add('text-danger');

    inputFeedbackEl.innerText = `Please Enter a ${inputEl.placeholder}`;
};


let checkEmail = () => {
    let inputEl = document.querySelector('#email');
    let inputFeedbackEl = document.querySelector('#email-feedback');
    let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regExp.test(inputEl.value)){
        makeValid(inputEl, inputFeedbackEl);
        return true;
    }
    else {
        makeInvalid(inputEl, inputFeedbackEl);
        return false;
    }
};

let checkPassword = () => {
    let inputEl = document.querySelector('#password');
    let inputFeedbackEl = document.querySelector('#password-feedback');
    let regExp = /^[A-Za-z]\w{7,14}$/;
    if (regExp.test(inputEl.value)){
        makeValid(inputEl, inputFeedbackEl);
        return true;
    }
    else {
        makeInvalid(inputEl, inputFeedbackEl);
        return false;
    }
};

let checkCpassword = () => {
    let inputEl = document.querySelector('#c-password');
    let passwordEl = document.querySelector('#password');
    let inputFeedbackEl = document.querySelector('#c-password-feedback');

    let regExp = /^[A-Za-z]\w{7,14}$/;
    if (regExp.test(inputEl.value) && inputEl.value === passwordEl.value){
        makeValid(inputEl, inputFeedbackEl);
        return true;
    }
    else {
        makeInvalid(inputEl, inputFeedbackEl);
        return false;
    }
};

// Username field with keyup event

let usernameEl = document.querySelector('#uName');
usernameEl.addEventListener('keyup', function () {
    checkUserName();
});

// Email field with keyup event

let emailEl = document.querySelector('#email');
emailEl.addEventListener('keyup', function () {
    checkEmail();
});

// Password field with keyup event

let passwordEl = document.querySelector('#password');
passwordEl.addEventListener('keyup', function () {
    checkPassword();
});

// Confirm Password field with keyup event

let cPasswordEl = document.querySelector('#c-password');
cPasswordEl.addEventListener('keyup', function () {
    checkCpassword();
});