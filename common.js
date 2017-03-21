var str = 'Halk Hogan',
    number = 2,
    numberSecond = 2.1,
	bool = true,
	undef,
    nuull = null;
var obj = {
	    prop: "yo",
	    fu: function () {

	    }
    },
    regexp = /baba/g,
    func = function(){},
    arr = [1,2,3];
    obj.prop = 'loftblog';
    arr[2] = 24;

   /* Обертки  */
   var num = String(124);
   num.prop = 'Строка в числе!!!';
   var numObj = new String(124);
   numObj.prop = 2352352;

   //console.log( typeof numObj.toString() );
   //console.log( num );
    
    console.log( numObj );
    console.log( numObj.toString());