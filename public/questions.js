const questions = [
  { q: "What is Hadoop?", options: ["DB", "Framework", "OS", "Compiler"], answer: 1 },
  { q: "HDFS stands for?", options: ["High DFS", "Hadoop Distributed File System", "Hybrid", "None"], answer: 1 },
];

// shuffle
function shuffle(arr){
  return arr.sort(()=>Math.random()-0.5);
}