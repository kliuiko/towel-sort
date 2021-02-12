
// You should implement your task here.

module.exports = function towelSort (matrix) {

    if( ! matrix || matrix.length === 0 ) return [];

    let newMatrix = matrix.map( (item, index) => {

       if(index % 2 === 1) {

           return item.reverse();

       } else {

           return item;

       }

   });

   let result = newMatrix.join(',').split(',').map( (item) => {

       return Number(item);

   });

  return result;

}
