let student = {
    name:'bhanu',
    address:{
        street:'Khairthabad',
        city:'Hyderabad',
        state:'TS'
    }
}

let {street, city, state}=student.address;
//document.querySelector('#demo').innerHTML = `${street}, ${city}, ${state}.`;

let array1 =['Yellow', 'Green', 'Pink'];
let array2 = ['bhanu', 'sowji', 'varu' ];

let result = [...array1, ...array2];

// document.querySelector('#demo').innerHTML =` ${result}  `;
console.log(result);