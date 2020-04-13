// If and '?'

if (2 > 5){
    alert("el 5 es mayor a 3")
} else {
    alert("el 5 es menor a 3")
}

let hora = prompt("Digite hora") // 0 a 23 horas
// buenos dias -> horas < 12 
// buenas tardes -> 12 <= horas <= 18
// buenas noches cualquiera que no sea buenos dias ni buenas noches

if(horas < 12){
    alert("buenos dias!")
} else if( 12 <= horas && horas <= 18 ){
    alert("buenas tardes")
} else {
    alert("buenas noches")
}

// Logical operators

// || (OR)    && (AND)      ! (NOT)
// || (OR) -> expresion1 || expresion2 -> haga algo si Cualquiera de las 2 es verdadera
// && (AND) -> expresion1 && expresion2 -> haga algo si ambas expresiones son verdaderas
// ! (NOT) -> !true -> false -> niega la expresion


// operadores ternarios "ternary operators"
// '?'

let result = condition ? value1 : value2

let age = 17
let accesoPermitido = age >= 18 ? "Si lo deja entrar " : "No lo deja entrar"

