(function() {

var doc = document,
    elem = doc.createElement("p"), //создать узел элемента
    content = doc.createTextNode("Это текстовый узел"), //создать текстовый узел
    wrappedP = doc.getElementById("wrapped");
//elem.innerHTML = '<strong>Это динамически созданный элемент</strong>';
//elem.appendChild(content);
 //elem.setAttribute("id", "mrCook");
//elem.id = "mrCook";
//wrappedP.parentNode.removeChild(elem);
//wrappedP.parentNode.removeChild(wrappedP);
elem.appendChild(content);

console.log( elem );

wrappedP.parentNode.appendChild(elem);
//wrappedP.parentNode.insertBefore(elem, wrappedP);
//wrappedP.parentNode.replaceChild(elem, wrappedP);
})();