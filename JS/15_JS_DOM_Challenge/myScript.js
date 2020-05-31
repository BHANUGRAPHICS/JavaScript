let  randomNumber1 = Math.floor(Math.random()*6)+1; // 1-6
let randomImageSource = `images/dice${randomNumber1}.png`; // images/dice1.png - dice6.png
let image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomImageSource);

let randomNumber2 = Math.floor(Math.random()*6)+1;
let randomImageSource2 = `images/dice`+randomNumber2+".png";
let image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src', randomImageSource2);

if (randomNumber1>randomNumber2){
    document.querySelector('#result').innerHTML = '<i class="fa fa-flag"></i> Player 1 Wins !';
}else if (randomNumber2>randomNumber1){
    document.querySelector('#result').innerHTML = 'Player 2 Wins ! <i class="fa fa-flag"></i>';
}else {
    document.querySelector('#result').innerHTML = 'Draw !';
}