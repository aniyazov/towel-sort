
// You should implement your task here.

module.exports = function towelSort (matrix) {
 let result = [];
  if(arguments.length == 0){
		result = [];
	}
	else if(matrix.length == 0){result = []}
  else{
  	result = matrix[0];
  	for(let i = 1; i < matrix.length; i++){
			if( i % 2 > 0){
				for(let j = matrix[i].length - 1; j >= 0 ; j--){
					result.push(matrix[i][j])
				}
			}
    	else{
      	for(let k = 0; k <= matrix[i].length - 1 ; k++){
					result.push(matrix[i][k])
				}
    	}
		}
  }	
	return result;
}
