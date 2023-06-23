function matriz0Diagonal(matriz){
    for(let i=0; i<matriz.length; i++){
        for(j=0;j<matriz[i].length;j++){
            if(i !== j && matriz[i][j] !== 0){
                return false
            }
        }
    }
    return true
}
let matriz =[[1,0,0],[0,2,0],[0,0,3]]
console.log(matriz0Diagonal(matriz))
let otraMatriz=[[1,0,1],[0,2,1],[1,0,3]]
console.log(matriz0Diagonal(otraMatriz))


