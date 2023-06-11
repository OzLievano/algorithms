function walk(curr: BinaryNode<number> | null, path: number[]){
  if(!curr) {
    return path;
  }

  //pre
  
  //recurse
  walk(curr.left, path);
  walk(curr.right, path)
  //post
  path.push(curr.value);

  return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
  // what we are given is a head to a tree
  // we want to retreave the order of our tree
  //if there is no child node  -> base case
  return walk(head, [])
}