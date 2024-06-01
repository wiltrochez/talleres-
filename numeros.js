var numero1;
var nunmero2;

numero1= parseFloat(prompt("Ingrese el primer número: "));
numero2= parseFloat(prompt("Ingrese el segundo número: "));

if (numero1 > numero2) {
  suma = numero1 + numero2;
  alert("La suma de los dos números es:" + suma);
} else if (numero2 > numero1) {
  cuadradoNumero1 = numero1 * numero1;
  cuadradoNumero2 = numero2 * numero2;
  sumaCuadrados = cuadradoNumero1 + cuadradoNumero2;
  alert("La suma de los cuadrados de los números es:" + sumaCuadrados);
} else {
  alert("Los números son iguales");
}