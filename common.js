(function() {
 var elems = document.getElementsByTagName("p"),
     classElems = document.getElementsByClassName("paragraph"),
     idElem = document.getElementById("four");
     elemSelector = document.querySelector("p");
     elemsSelector = document.querySelectorAll("p");
     elemsInDiv = document.querySelectorAll("div p");
  // console.log( elemsInDiv );
  //console.log( elemsSelector ) ;  
 //console.log( elemsSelector );
 //console.log( idElem );
 //console.log( classElems );
 
 //console.log( elems );

 for (var i = 0, len = elems.length; i < len; i++ ) {
 //console.log( elems[i].tagName );
 //console.log( elems[i].parentNode );
 //console.log( elems[i].previousSibling );
 //console.log( elems[i].previousSibling.previousSibling);
 //console.log( elems[i].previousSibling.nodeName);
//console.log( elems[i].nodeType );

 }

})();
console.log( document.querySelector("div").children );