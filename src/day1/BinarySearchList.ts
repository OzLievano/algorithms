export default function bs_list(haystack: number[], needle: number): boolean {
  // search(arr, lo , hi)
  // mid = lo + (hi-lo / 2)
  // v = arr[m]

  //if v === needle 
  // return true

  // if v > m ... go right 
  // mid +=1 ?
  // if v < m ... go left 
  // mid -=1
  let min = 0;
  let max = haystack.length - 1;
  let index;
  let element;

  while(min <= max) {
    index = Math.floor((min+max) /2)
    element = haystack[index];

    if(element === needle) {
      return true
    }


    if(element < needle) {
      min = index + 1;
    }
    
    if(element > needle) {
      max = index - 1;
    }
  }

  return false;

}