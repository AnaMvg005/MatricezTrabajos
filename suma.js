// function suma (matriz1, matriz2){
//     let resultado = []
//     for (let i=0; i<matriz1.length; i++){
//         let fila=[]
//         for (let j=0; j<matriz1[i].length; j++){
//             fila.push(matriz1[i][j]+matriz2[i][j])
//         }
//         resultado.push(fila)
//     }
//     return resultado;
// }
// let matriz1= [[1,2,3],[4,5,6],[7,8,9]];
// let matriz2= [[1,2,3],[4,5,6],[7,8,9]];
// let sumas= suma(matriz1, matriz2)
// console.log(sumas)

// function suma (vector1, vector2){
//     let resultado = []
//     for (let i=0; i<vector1.length; i++){
//         let fila=[]
//         for (let x=0; x<vector1[i].length; x++){
//             fila.push(vector1[i][x]+vector2[i][x])
//         }
//         resultado.push(fila)
//     }
//     return resultado;
// }
// let vector1= [[3,5,7,8]];
// let vector2= [[1,2,3,4]];
// let sumas= suma(vector1, vector2)
// console.log(sumas)


function suma (vector1, vector2){
    let resultado = []
    for (let i=0; i<vector1.length; i++){
        let fila=[]
        for (let x=0; x<vector1[i].length; x++){
            fila.push(vector1[i][x]+vector2[i][x])
        }
        resultado.push(fila)
    }
    return resultado;
}
let vector1= [[3,5,7,8]];
let vector2= [[1,2,3]];
let sumas= suma(vector1, vector2)
console.log(sumas)