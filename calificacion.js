var nombre;
var calificación ;
var asistencias ;
var numeroAsistencias ;


calificacion=parseInt(prompt( "Ingrese la nota del alumno" ));
asistencias=parseInt(prompt( "Ingrese la cantidad de asistencias del alumno" ));

if (calificacion>=30 && asistencias>=80) {
    alert("el estudiante fue aprobado")
    
} else {
    alert("el estudiante fue reprobado");
}