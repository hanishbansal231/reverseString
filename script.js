btn = document.querySelector('.btn');
let showValue = document.querySelector('p');

btn.addEventListener('click', () =>{
    let input = document.querySelector('#name').value;

    let arr = new Array();
    let value = '';

    for (let i = 0; i < input.length; i++) {
        arr[i] = input[i];
    }
    let rev = arr.reverse();

    for (let i = 0; i < rev.length; i++) {
        value += rev[i];
    }
    setTimeout(valuePrint(value),2000);
});
const valuePrint = (value) =>{
    showValue.innerText = value;
};
