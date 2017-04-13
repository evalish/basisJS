(function() {
 var div = document.getElementById('test'),
     style = div.style;

     //style.color = "red";
    //style.backgroundColor = "black";
     //style.border = "5px solid blue";
     //style.padding = "3px";
     div.className = " css-class  css-class-new ";
     //div.className = "";
     div.className = div.className.replace(" css-class ", "");
     div.classList.add('css-class');

     div.classList.remove('css-class');

     div.classList.toggle('css-class');



 //console.log( div );
})();