export default function bubble_sort(arr: number[]): void {
  // a sort in place algorithm 

  // we an unordered array 
  // we are gonna start at the first element and compare it to firstElement + 1 
  // if the element is larger than element + 1 we swap, 
  // if not we continue 

  // since we are progressively getting smaller we can do n-1-i in the inner loop 
  

  for(let i =0; i< arr.length; i++){
    for(let j=0; j<arr.length-1-i; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp;
      }
    }
  }
}