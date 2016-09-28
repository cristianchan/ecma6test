"use strict";
//ES5
(function() {
    //console.log(x); // x no está definida aún.
    if(true) {
        var x = "hola mundo";
    }
    console.log(x);
    // Imprime "hola mundo", porque "var" hace que sea global
    // a la función;
})();

//ES6
(function() {
    if(true) {
        let x = "hola mundo";
        console.log(x);
    }

    //Da error, porque "x" ha sido definida dentro del "if"
})();


//Const

(function() {
    if(true){
      const PI = 3.1416 ;
      console.log(PI);
    }

    // ERROR, porque ha de asignarse un valor en la
    // declaración
})();
