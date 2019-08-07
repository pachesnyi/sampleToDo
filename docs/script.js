"use strict";

(function(){
    const list = ['Задача 1', 'Задача 2', 'Задача 3'];
    const listElement = document.querySelector('#list');
    const inputElement = document.querySelector('#new-task');
    const buttonElemnt = document.querySelector('#addbutton');
    const myStorage = window.localStorage;

    function addItem () {
        let inputValue = inputElement.value;
        if(inputElement.value.length < 1) {
            return ;
        }
        list.push(inputElement.value);
        inputElement.value = '';
        renderList();
        saveToLocalStorage();

    }

    function addItemInDom (item, index) {
        let listItem = document.createElement('li');
        listItem.setAttribute('data-number', index);
        listItem.innerHTML = item;
        listElement.appendChild(listItem);
        let closeButton = document.createElement('button');
        closeButton.innerHTML = "Close"
        listItem.appendChild((closeButton));
        closeButton.addEventListener('click', () => removeItem(index))
    }

    function renderList () {
        while (listElement.firstChild) {
            listElement.removeChild(listElement.firstChild);
        }
        list.forEach((el, index) => addItemInDom(el, index));
    }

    function removeItem (index) {
        list.splice(index, 1);
        renderList();
        saveToLocalStorage();
    }

    function saveToLocalStorage () {
        myStorage.setItem(`houdini_items`, JSON.stringify(list));
    }






    buttonElemnt.addEventListener('click', addItem);


    renderList();



})();