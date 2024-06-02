var monto ;
var descuento ;

monto = parseInt(prompt("ingrese el valor del monto"));
if (monto>100) {
    descuento=monto*0.01;
    alert("el descuento es: " + descuento);
} else if (monto<100) {
    descuento=monto*0.02;
    alert("el descuento es: " + descuento);
}

