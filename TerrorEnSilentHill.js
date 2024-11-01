//BFS approach
function escapePyramidHead(room) {
    const directions = [
      [-1, 0],  // Up
      [1, 0],   // Down
      [0, -1],  // Left
      [0, 1]    // Right
    ];
  
    const rows = room.length;
    const cols = room[0].length;
    const startRow = room.findIndex(row => row.includes('▲'));
    const startCol = room[startRow].indexOf('▲');
    const startPosition = { row: startRow, col: startCol, distance: 0 };
  
    const queue = [startPosition];
    const visited = new Set([startRow * cols + startCol]);
  
    while (queue.length > 0) {
      const { row, col, distance } = queue.shift();
  
      if (room[row][col] === 'T') {
        return distance;
      }
  
      for (const [dRow, dCol] of directions) {
        const newRow = row + dRow;
        const newCol = col + dCol;
        const posKey = newRow * cols + newCol;
  
        if (newRow >= 0 && newRow < rows &&
            newCol >= 0 && newCol < cols &&
            room[newRow][newCol] !== '#' &&
            !visited.has(posKey)) {
          queue.push({ row: newRow, col: newCol, distance: distance + 1 });
          visited.add(posKey);
        }
      }
    }
  
    return -1;
  }


  const room = [
  ['.', '.', '#', '.', '▲'],
  ['#', '.', '#', '.', '#'],
  ['.', '.', '.', '.', '.'],
  ['#', '#', '#', '.', '#'],
  ['T', '.', '.', '.', '.'],
]

escapePyramidHead(room) // -> 8