"use strict";

(function(){
    const listElement = document.querySelector('#list');
    const inputElement = document.querySelector('#new-task');
    const buttonElement = document.querySelector('#addbutton');
    const warmingElement = document.querySelector('.warming');
    const myStorage = window.localStorage;
    let myStorageArray = JSON.parse(myStorage.getItem("houdini_items"));
    let list = myStorageArray;


    function addItem () {
        let inputValue = inputElement.value;
        if(inputElement.value.length < 1) {
            return ;
        }
        list.push(inputElement.value);
        inputElement.value = '';
        saveToLocalStorage();
        renderList();

    }

    function addItemInDom (item, index) {
        let listItem = document.createElement('li');
        listItem.setAttribute('data-number', index);
        listItem.innerHTML = item;
        listElement.appendChild(listItem);
        let closeButton = document.createElement('button');
        closeButton.innerHTML = "Close";
        listItem.appendChild((closeButton));
        closeButton.addEventListener('click', () => removeItem(index))
    }



    function renderList () {
        while (listElement.firstChild) {
            listElement.removeChild(listElement.firstChild);
        }
        if(list == null || list.length==0) {
            warmingElement.classList.add('active');
            list = [];

        }
        else  {
            warmingElement.classList.remove('active');
            list.forEach((el, index) => addItemInDom(el, index));

        }

    }

    function removeItem (index) {
        list.splice(index, 1);
        renderList();
        saveToLocalStorage();
    }

    function saveToLocalStorage () {
        myStorage.setItem(`houdini_items`, JSON.stringify(list));
    }

    // function storageIsEmpty () {
    //     if(list!==null) {
    //         return true
    //     }
    // }



    buttonElement.addEventListener('click', addItem);


    renderList();



})();