export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
  // know starting point
  // know what we look for
  // return path we took

  // define a previous array that tells us from whom the node came from 
  // define a seen array to capture whether or not we have visited the node
  // queue = has source node inside of it
  const prev = new Array(graph.length).fill(-1);
  const seen = new Array(graph.length).fill(false);
  seen[source] = true;
  const queue = [source];
  do {
    const curr = queue.shift() as number;
    if(curr === needle) {
      break;
    }

    const adjs = graph[curr];
    for(let i =0; i < adjs.length;i++){
      if(adjs[i] === 0) {
        continue;
      }

      if(seen[i]) {
        continue;
      }
      seen[i] = true;
      prev[i] = curr;

      queue.push(i);
    }
  } while(queue.length)

  //build it backwards

  let curr = needle;
  const out: number[] = []; //represents path through the graph

  while(prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }
  
  if(out.length) {
    return [source].concat(out.reverse()); //
  }

  return null;
}