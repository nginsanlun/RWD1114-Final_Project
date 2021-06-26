  let initialNumber = 0;
  let heartCount = document.querySelectorAll('.bg-img');
  for(let heart = 0; heart < heartCount.length; heart++){
  let numberOfHeart = heartCount[heart];
  numberOfHeart.ondblclick = function(){
  let countElement = document.querySelectorAll('.over > span');
  
  for(let span = 0; span < countElement.length; span++){
      initialNumber += 1;
    countElement[span].innerHTML= initialNumber;
    console.log(countElement[span].innerHTML);
}      
};   
}