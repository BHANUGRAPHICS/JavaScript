//01_DOM_Manipulations
let printWishMessage = (message, color)=>{
    let h1tag = document.querySelector('#msg-1');
    h1tag.innerText = message;
    h1tag.style.backgroundColor =color;
    h1tag.style.padding ='15px';
    h1tag.style.boxShadow ='0 0 10px black';

}
//02_DOM_Manipulations
let gmBtn = document.querySelector('#gm-btn');
gmBtn.addEventListener('click', function () {
    printWishMessage('Good Morning', 'limegreen');
});

let gaBtn = document.querySelector('#ga-btn');
gaBtn.addEventListener('click', function () {
    printWishMessage('Good Afternoon', 'orangered');
});
let geBtn = document.querySelector('#ge-btn');
geBtn.addEventListener('click', function () {
    printWishMessage('Good Evening', 'purple');
});
let gnBtn = document.querySelector('#gn-btn');
gnBtn.addEventListener('click', function () {
    printWishMessage('Good Night', 'black')
});

//03_DOM_Manipulations Keyup Event

