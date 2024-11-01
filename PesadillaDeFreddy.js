function findSafestPath(dream) {
    const length = dream.length;
    const height = dream[0].length;
  
    const matrix2d = Array(height).fill(0);
    
    matrix2d[0] = dream[0][0];
    
    for (let j = 1; j < height; j++) {
      matrix2d[j] = matrix2d[j - 1] + dream[0][j];
    }
    
    for (let i = 1; i < length; i++) {
      matrix2d[0] += dream[i][0];
      
      for (let j = 1; j < height; j++) {
        matrix2d[j] = Math.min(matrix2d[j], matrix2d[j - 1]) + dream[i][j];
      }
    }
  
    return matrix2d[height - 1];
  }