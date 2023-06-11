function walk(curr: BinaryNode<number> | null, path: number[]){
  if(!curr) {
    return path;
  }

  //pre
  
  //recurse
  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path)
  //post

  return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
  // what we are given is a head to a tree
  // we want to retreave the order of our tree
  //if there is no child node  -> base case
  return walk(head, [])
}