let nombre = "Juan";  // declaro la variable
let nombre2 = prompt ("ingresa tu nombre"); //la variable nombre2 contiene lo que ingres el usuario en prmpt
alert ("Bienvenido/a " + nombre2); // devuelvo un alerta un alerta
console.log(nombre2);
let dia = prompt("Ingrese dia de la semana:(1)Lunes - (2)Martes - (3)Miercoles -(4) Jueves - (5) Viernes -(6) Sabado - (7)Domingo");
let dia_semana;
switch (dia){
    case "1": dia_semana="Lunes"; break;
    case "2": dia_semana="Martes";break;
    case "3": dia_semana="Miercoles";break;
    case "4": dia_semana="Jueves";break;
    case "5": dia_semana="Viernes";break;
    case "6": dia_semana="Sabado";break;
    case "7": dia_semana="Domingo";break;
    default: alert("ERROR!")
}
/*
if (dia == "1"){ 
   document.write ("Que tengas un feliz comienzo de semana")}
else
    {document.write("Es el dia "+dia_semana)}
*/
document.write("Feliz "+dia_semana+" "+nombre2+"!");
console.log(dia)