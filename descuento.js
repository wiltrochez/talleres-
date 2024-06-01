var monto ;
var descuento ;

monto = parseInt(prompt("ingrese el valor del monto"));
for (var i = 0; i < 5; i++) { 
    if (monto>100) {
        descuento = monto * 0.01
    } else {
        descuento = monto * 0.02; 
    } 
monto=monto-descuento;
    alert("Descuento aplicado:"+ descuento);
    alert("Monto actual:"+ monto);
}
