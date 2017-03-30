//var obj = new Object();
 var obj = {
 	super : 'string' ,
 	func : function() {
 		console.log( this.super );
 	}
 };
 //console.log( typeof obj['super'] || 'fuck' );
 obj.ddd = 'Gans';
 obj.super = 'Banan';
 //console.log( obj );
 var a ={prop: 1}, b = {prop: 2}, c = {prop: 3};

 a = b = c = {prop: 'allTheSame'};

 //console.log(a, b, c);
 var y = obj;
 //console.log( y.super);
 //delete obj.super;
 console.log( obj );
 obj.func();