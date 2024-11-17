const imprimir = (x) => {
    if (x > 0){
        imprimir(x-1);
        console.log(x);
    }
}

const fibonnaci = (n) => {
    const fibonacciRecursive = (num) => {
        if (num === 0) {
          return [0];
        } else if (num === 1) {
          return [0, 1];
        } else {
          const series = fibonacciRecursive(num - 1);
          series.push(series[num - 1] + series[num - 2]);
          return series;
        }
      }
      const fibonacciSeries = fibonacciRecursive(n);
      console.log("Serie de Fibonacci: \n " + fibonacciSeries.join(", "));
}

const fact = (x) => {
    const factorial = (n) => {
        if ( n === 0 || n === 1){
            return 1;
        } else {
            return n * factorial (n - 1);
        }
    }
    const resultado = factorial (x);
    console.log(`El factorial de ${x} es: ${resultado}`)
}

const imprimirAlReves = () => {
  const palabra = document.getElementsByName("txtPalabra")[0].value;

  const invertirPalabra = (palabra) => {
      if (palabra === "") {
          return "";
      } else {
          return invertirPalabra(palabra.substring(1)) + palabra.charAt(0);
      }
  }
  console.log("La Palabra Invertida es: ", invertirPalabra(palabra));
}