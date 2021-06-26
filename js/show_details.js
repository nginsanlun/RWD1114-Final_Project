let btnAdd = document.getElementById('add-item');
let listID = document.getElementById('to-do-itemID');
let list = document.getElementById('to-do-name');
let price = document.getElementById('to-do-price');

btnAdd.addEventListener('click', function(){
    let newListID = document.createElement('li');
    let textID = document.createTextNode('Item ID : ' + (listID.childElementCount + 1));
    newListID.appendChild(textID);
    newListID.id = 'item' + (listID.childElementCount + 1);
    listID.appendChild(newListID);
    console.log(listID.childElementCount);

    let newListElement = document.createElement('li');
    let textNode = document.createTextNode('Item Name : Cappuciino ');
    newListElement.appendChild(textNode);
    newListElement.id = 'item' + (list.childElementCount + 1);
    list.appendChild(newListElement);
    console.log(list.childElementCount);

    let newPriceElement = document.createElement('li');
    let priceNode = document.createTextNode('Item Price : $2.45');
    newPriceElement.appendChild(priceNode);
    newPriceElement.id = 'item' + (price.childElementCount + 1);
    price.appendChild(newPriceElement);   
    console.log(price.childElementCount);
});

