function walk(curr: BinaryNode<number> | null, path: number[]){
  if(!curr) {
    return path;
  }

  //pre
  path.push(curr.value);
  //recurse
  walk(curr.left, path);
  walk(curr.right, path)
  //post

  return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
  // what we are given is a head to a tree
  // we want to retreave the order of our tree
  //if there is no child node  -> base case
  return walk(head, [])
}