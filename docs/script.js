"use strict";

(function(){
    const list = [];
    const listElement = document.querySelector('#list');
    const inputElement = document.querySelector('#new-task');
    const buttonElemnt = document.querySelector('#addbutton');
    buttonElemnt.addEventListener('click', ()=> {
        let inputValue = inputElement.value;
        if(inputElement.value.length < 1) {
            return ;
        }
        list.push(inputElement.value);
        inputElement.value = '';
        console.log(list)
    });



})();