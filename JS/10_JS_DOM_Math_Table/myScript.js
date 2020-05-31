let numberElement =document.querySelector('#req-number');
numberElement.addEventListener('keyup', function () {
    let theNumber = Number(numberElement.value);
    document.querySelector('#number').innerText = theNumber;
    calculate()
});

let rangeElement = document.querySelector('#multiplier');
rangeElement.addEventListener('input', function () {
   let selectedMultiplier = Number(rangeElement.value);
   document.querySelector('#multi').innerText = selectedMultiplier;
   calculate();
});

//calculate

let calculate = ()=>{
    let theNumber = Number(document.querySelector('#number').innerText);
    let multiplier = Number(document.querySelector("#multi").innerText);
    let mathResult = theNumber*multiplier;
    document.querySelector('#result').innerText = mathResult;
}