
// You should implement your task here.

module.exports = function towelSort (matrix) {

    if( ! matrix  ) return [];

    let newMatrix = matrix.map( (item, index) => {

       if(index % 2 === 1) {

           return item.reverse();

       } else {

           return item;

       }

   });

  return newMatrix.flat();

}
