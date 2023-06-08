export default function two_crystal_balls(breaks: boolean[]): number {
  // given two crystal balls that will break if dropped from high enough
  // distance, determine the exact spot in which it will break in the most optimized way
  

  // questios how high is the dropped distance?
  // a point where the crystal ball breaks every single time

  // constraints = two crystal balls 
  // this array is ordered 

  // jumping the square root of N until it breaks 
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jumpAmount;

  for(; i < breaks.length; i+=jumpAmount){
    if(breaks[i]){
      break;
    }
  }

  i -= jumpAmount;

  for(let j =0; j < jumpAmount && i < breaks.length; ++j, ++i){
    if(breaks[i]){
      return i
    }
  }

  return -1;
}