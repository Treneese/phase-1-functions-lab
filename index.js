//const block = '42 street';
//function distanceFromHqInBlocks(someValue) {
  //returns the number of blocks given a value
 // distance = number(block) - 43;
//}
function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}
//function distanceFromHqInFeet(someValue) {
 // distanceFromHqInBlocks(someValue);
//}
function distanceFromHqInFeet (blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}
function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
//  distanceFromHqInBlocks()
//       1) returns a distance in blocks
//       2) returns a distance in blocks
//       3) calculates distances below 42nd street
//     distanceFromHqInFeet()
//       4) returns a distance in feet
//       5) returns a distance in feet
//       6) calculates distances below 42nd street
//     distanceTravelledInFeet()
//       7) returns the distance travelled in feet
//       8) returns a distance in feet
//       9) returns distance when destination is below distance
//     calculatesFarePrice(start, destination)
//       10) gives customers a free sample
//       11) charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
//       12) charges 25 dollars for a distance over 2000 feet
//       13) does not allow rides over 2500 feet