"use strict";

function calc() {
    let form = document.forms.calculator;
    let a0 = form.elements.price0;
    let b0 = form.elements.count0;
    let a1 = form.elements.price1;
    let b1 = form.elements.count1;
    let a2 = form.elements.price2;
    let b2 = form.elements.count2;
    let a3 = form.elements.price3;
    let b3 = form.elements.count3;
    let a4 = form.elements.price4;
    let b4 = form.elements.count4;
    let a5 = form.elements.price5;
    let b5 = form.elements.count5;
    let a6 = form.elements.price6;
    let b6 = form.elements.count6;
    let a7 = form.elements.price7;
    let b7 = form.elements.count7;
    let a8 = form.elements.price8;
    let b8 = form.elements.count8;
    let a10 = form.elements.price10;
    let b10 = form.elements.count10;
    let result = document.getElementById("result");
    let summ = a0.value * b0.value  + a1.value * b1.value + a2.value * b2.value + a3.value * b3.value + a4.value * b4.value + a5.value * b5.value + a6.value * b6.value + a7.value * b7.value + a8.value * b8.value + a9.value * b9.value + a10.value * b10.value;
    if(isNaN(summ)) {
        result.innerHTML = "Были введены некорректные значения!";
    }
    else {
        result.innerHTML =  "Ваш заказ стоит: " + summ + " рублей";
    }
}
window.addEventListener("DOMContentLoaded", function (event) 
{
  console.log("DOM fully loaded and parsed");
});
