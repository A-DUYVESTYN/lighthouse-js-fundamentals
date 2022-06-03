const finalPosition = function (moves) {
  let position = [0,0]; // position [x,y]
  for (let index = 0; index < moves.length; index++) {
    if (moves[index] === 'north') {
      position[1]++; // increment y coordinate by 1
      //console.log(position)
    }
    else if (moves[index] === 'east') {
      position[0]++; // increment x coordinate by 1
      //console.log(position)
    }
    else if (moves[index] === 'south') {
      position[1]--; // decrease y coordinate by 1
      //console.log(position)
    }
    else if (moves[index] === 'west') {
      position[0]--; // decrease x coordinate by 1
      //console.log(position)
    }
  }
  return position;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']; 

finalPosition(moves);
// console.log(finalPosition(moves));