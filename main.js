var ok1=false; 
function test(form) { 
if (form.text.value == "")   
{ok1=false;
alert("Введіть ім’я!") ; } 
else  if ((form.email.value.indexOf('@', 0)<1)||(form.email.value.indexOf('@', 0)==form.email.value.length-1))   
{ ok1=false;
alert("Невірно введена адреса   e-mail");  }  
else if (form.number.value == "")   
{ok1=false;
alert("Введіть вік!") ; } 
else if (form.radio.value == "")   
{ok1=false;
alert("Введіть ризики") ; } 
else {ok1=true}
if(ok1)  {  
alert("Форма  заповнена!")  } } 

// Предварительная загрузка изображений 
  numimg=0 
  imgslide=new Array() 
  imgslide[0]=new Image() 
  imgslide[1]=new Image() 
  imgslide[2]=new Image() 
  imgslide[0].src="image/sl1.jpg" 
  imgslide[1].src="image/sl2.jpg" 
  imgslide[2].src="image/sl3.jpg" 
//чередование изображений 
  function demoslides() 
  {document.images[0].src=imgslide[numimg].src ;
  numimg++ ;
  if(numimg==3) 
  numimg=0; 
  setTimeout("demoslides()", 3000) 
  //setInterval("demoslides()",2000)
  } 