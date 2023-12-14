function allPairsShortestPaths(graph) {

    distMatrix = [];

    for (const vertex in graph){
        distMatrix[vertex] = []
        for (const vertex2 in graph){

            temp = graph[vertex][vertex2]

            if (vertex == vertex2) {
                distMatrix[vertex][vertex2] = 0
            }
            else if (!(temp == undefined)) {
                distMatrix[vertex][vertex2] = temp
            }
            else {
                distMatrix[vertex][vertex2] = Infinity
            }
        }

    }

    for(const k in graph){
        for(const i in graph){
            for(const j in graph){
                if (distMatrix[i][j] > distMatrix[i][k] + distMatrix[k][j]){
                    distMatrix[i][j] = distMatrix[i][k] + distMatrix[k][j]
                } 
            }
        }
    }

    return distMatrix;
}
