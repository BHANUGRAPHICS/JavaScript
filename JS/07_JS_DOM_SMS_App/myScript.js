let textAreaEl=document.querySelector('#textarea');
let charCountEl = document.querySelector('#char-count');

textAreaEl.addEventListener('keyup', function () {
    let textLength = textAreaEl.value.length;
    charCountEl.innerText = textLength;
})