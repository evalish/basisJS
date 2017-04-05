function func(a, b) {
	return a + b;

}
//console.log( func(3,4) );
var funcExp = function( a, b){
	return a + b;
};
//console.log( funcExp(2 ,3));


function func1() {
	function funcExample() {
		return 'one';
	}
	
	return funcExample();

	function funcExample() {
		return 'two';
	}
};

//console.log( func1() );
function func2() {
	var funcExample = function () {
		return 'one' ;

	}
	var variable = funcExample();
	var funcExample = function () {
		return 'two';
	}
	return variable;
};
//console.log( func2() );

// Функция обратного вызова
var func = function(callback){
	var name = "Nick";
	return callback(name);

};
//console.log( func(function(n) {
//	return "Hello " + n;
//}));
//возвращение функции
var func1 = function() {
	return function(){
		//console.log('Hello!!!');
	}
};
func1()();

;(function() {
	//console.log( 'Hello  от анонимной самовызывающейся функции!!!');
})();

var funcArgs = function() {
	var i,  
	    sun = 0;
	for (i = 0; i < arguments.length; i++) {
		sun += arguments[i];
	};
	return sun;
};
console.log( funcArgs(1,2,3) );
