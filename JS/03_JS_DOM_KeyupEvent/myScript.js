let uName = document.querySelector('#username');

uName.addEventListener('keyup', function () {
    let uNameText = uName.value;
   document.querySelector('#msg').innerText = uNameText;
});