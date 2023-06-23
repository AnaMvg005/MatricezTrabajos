
function crearMatriz (n){
    let matriz=[]
    for(let i=0; i<n;i++){
        matriz[i]=[];
        for(let j=0; j<n;j++){
            matriz[i][j] = parseInt(prompt(`Ingrese el número para la posición: [${i}][${j}]:`))
        }
    }
    return matriz
}

// Función para sumar dos matrices y almacenar los resultados en otra matriz 
function sumarMatrices (matriz1, matriz2) {
    let n = matriz1.length;
    let resultado = [];
    for (let i = 0; i < n; i++) {
        resultado [i] = [];
        for (let j = 0; j < n; j++) {
            resultado [i][j] = matriz1[i][j] + matriz2[i][j];
        }
    }
    return resultado;
}

// Función para mostrar una matriz 
function mostrarMatriz (matriz, nombre) { 
    console.log(`Matriz ${nombre}:`); 
    for (let i = 0; i < matriz.length; i++) { 
        console.log(matriz[i].join("\t"));
    } 
}

// Solicitar la longitud de las matrices al usuario 
let n = parseInt(prompt ("Ingrese la longitud de las matrices:"));
// Crear y rellenar la primera matriz 
let matriz1 = crearMatriz (n);
// Crear y rellenar la segunda matriz 
let matriz2 = crearMatriz (n);
// Sumar las matrices
let resultado = sumarMatrices (matriz1, matriz2);
// Mostrar las matrices originales y el resultado
mostrarMatriz (matriz1, "A");
console.log("\n");
mostrarMatriz (matriz2, "B");
console.log("\n");
mostrarMatriz (resultado, "Resultado");