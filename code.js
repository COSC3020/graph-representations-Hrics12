function convertToAdjList(adjMatrix) {
    const adList ={};
    for (let i = 0; i < adjMatrix.lenght; i++){
        adList[i] = [];
        for ( let j = 0; j < adjMatrix[i].length;j++){
            if (adjMatrix[i][j] === 1) {
                adList[i].push(j);
            }
        }
    }
    return adjMatrix;
}
