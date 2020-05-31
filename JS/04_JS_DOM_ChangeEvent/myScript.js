let selectBox = document.querySelector('#lang-select');
selectBox.addEventListener('change', function () {
    let course = selectBox.value;
    document.querySelector('#lang-option').innerText = course;
})