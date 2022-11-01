let nombre, horastrabajadas, valorhora;
let sueldo = 0;

nombre = prompt('Ingrese Nombre Del Trabajador');
horastrabajadas = prompt('Ingrese Horas Trabajadas');
valorhora = prompt('Ingrese Valor De Las Horas Trabajadas');

sueldo = valorhora * horastrabajadas;

alert(`${nombre} el sueldo obtenido por ${horastrabajadas} horas trabajadas con un valor de ${valorhora} la hora es ${sueldo}`);

