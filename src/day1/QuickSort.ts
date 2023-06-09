function qs (arr: number[], lo: number, hi: number) : void {
  if(lo >= hi) {
    return;
  }
  const pivotIndex = partition_by(arr, lo, hi);

  //inclusive ending

  qs(arr, lo, pivotIndex - 1);

  //not including the pivot
  qs(arr, pivotIndex + 1, hi);
}

function partition_by(arr:number[], lo:number , hi:number): number {
  //returns the pivot index 
  const pivot = arr[hi];

  let idx = lo - 1;

  for(let i = lo; i < hi; ++i) {
    if(arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }
  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

export default function quick_sort(arr: number[]): void {
  // we need to define a pivot 

  // split into two fucntions 
  //a partition that creates the pivot and moves items to left and right
  // 2nd is the sort , get the pivot and does the recurse
  
  qs(arr, 0, arr.length - 1 );
}