
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined) return [];
  let temp = [];
  let counter = 0;
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          if(i % 2 != 0) {
              temp[counter] = matrix[i][matrix[i].length-1-j];
              counter++;
          } else 
          {
            temp[counter] = matrix[i][j];
            counter++;
          }
      } 
  }
  return temp;
}
