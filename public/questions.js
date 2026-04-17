const questions = [
  { q: "What is Apache Hadoop?", options: ["RDBMS", "Distributed computing framework", "Programming language", "Operating System"], answer: 1 },
  { q: "HDFS stands for?", options: ["High Data File System", "Hadoop Distributed File System", "Hybrid DFS", "None"], answer: 1 },
  { q: "Which component stores data in Hadoop?", options: ["YARN", "MapReduce", "HDFS", "Hive"], answer: 2 },
  { q: "NameNode is responsible for?", options: ["Storing actual data", "Managing metadata", "Processing jobs", "Scheduling"], answer: 1 },
  { q: "DataNode is used for?", options: ["Metadata storage", "Actual data storage", "Job scheduling", "None"], answer: 1 },
  { q: "Default block size in HDFS?", options: ["32MB", "64MB", "128MB", "256MB"], answer: 2 },
  { q: "Replication factor in HDFS?", options: ["1", "2", "3", "5"], answer: 2 },
  { q: "Which processes data in Hadoop?", options: ["HDFS", "MapReduce", "YARN", "Hive"], answer: 1 },
  { q: "MapReduce consists of?", options: ["Map & Sort", "Map & Reduce", "Reduce & Shuffle", "Sort & Reduce"], answer: 1 },
  { q: "YARN stands for?", options: ["Yet Another Resource Negotiator", "Your Application Resource Node", "Yes Application Runtime Node", "None"], answer: 0 },

  { q: "Which daemon runs on master node?", options: ["DataNode", "NodeManager", "NameNode", "TaskTracker"], answer: 2 },
  { q: "Secondary NameNode is used for?", options: ["Backup", "Checkpointing", "Data storage", "Processing"], answer: 1 },
  { q: "Hadoop is written in?", options: ["Python", "Java", "C++", "Go"], answer: 1 },
  { q: "Which tool is used for SQL-like queries?", options: ["Pig", "Hive", "Sqoop", "Flume"], answer: 1 },
  { q: "Apache Pig uses which language?", options: ["SQL", "Pig Latin", "Java", "Python"], answer: 1 },
  { q: "Sqoop is used for?", options: ["Data storage", "Data transfer", "Data processing", "Scheduling"], answer: 1 },
  { q: "Flume is used for?", options: ["Data ingestion", "Processing", "Storage", "Querying"], answer: 0 },
  { q: "Hadoop runs on?", options: ["Single machine", "Cluster", "Mobile", "None"], answer: 1 },
  { q: "Which file system does Hadoop use?", options: ["NTFS", "EXT4", "HDFS", "FAT"], answer: 2 },
  { q: "Which is NOT Hadoop component?", options: ["HDFS", "YARN", "MapReduce", "Oracle"], answer: 3 },

  { q: "Map function does?", options: ["Aggregation", "Filtering & Sorting", "Joining", "Reducing"], answer: 1 },
  { q: "Reduce function does?", options: ["Mapping", "Aggregation", "Sorting", "Filtering"], answer: 1 },
  { q: "Shuffle phase occurs between?", options: ["Map & Reduce", "Reduce & Output", "Input & Map", "None"], answer: 0 },
  { q: "HDFS follows which architecture?", options: ["Peer-to-peer", "Master-slave", "Centralized", "Distributed"], answer: 1 },
  { q: "Which is master in HDFS?", options: ["DataNode", "NameNode", "NodeManager", "Client"], answer: 1 },

  { q: "YARN manages?", options: ["Storage", "Resources", "Queries", "Security"], answer: 1 },
  { q: "NodeManager runs on?", options: ["Master", "Slave", "Client", "None"], answer: 1 },
  { q: "ResourceManager runs on?", options: ["Master", "Slave", "Client", "None"], answer: 0 },
  { q: "Which tool moves data between Hadoop & RDBMS?", options: ["Flume", "Sqoop", "Hive", "Pig"], answer: 1 },
  { q: "Which is data warehouse tool?", options: ["Pig", "Hive", "Flume", "Sqoop"], answer: 1 },

  { q: "Fault tolerance in Hadoop is achieved by?", options: ["Replication", "Backup", "Snapshots", "None"], answer: 0 },
  { q: "Which handles job scheduling?", options: ["YARN", "HDFS", "Hive", "Pig"], answer: 0 },
  { q: "Hadoop ecosystem includes?", options: ["Hive", "Pig", "Sqoop", "All"], answer: 3 },
  { q: "Which command uploads file to HDFS?", options: ["put", "get", "ls", "mkdir"], answer: 0 },
  { q: "Which command lists files?", options: ["ls", "put", "get", "rm"], answer: 0 },

  { q: "Which command deletes file?", options: ["rm", "ls", "put", "get"], answer: 0 },
  { q: "Which command creates directory?", options: ["mkdir", "ls", "rm", "put"], answer: 0 },
  { q: "Which command downloads file?", options: ["get", "put", "ls", "rm"], answer: 0 },
  { q: "Hadoop is best for?", options: ["Small data", "Big data", "Mobile apps", "Games"], answer: 1 },
  { q: "Which language commonly used with Hadoop?", options: ["Java", "Python", "Scala", "All"], answer: 3 },

  { q: "HDFS stores files as?", options: ["Whole file", "Blocks", "Tables", "Rows"], answer: 1 },
  { q: "Which ensures reliability?", options: ["Replication", "Encryption", "Compression", "None"], answer: 0 },
  { q: "Cluster means?", options: ["Single PC", "Group of machines", "Mobile network", "None"], answer: 1 },
  { q: "Hadoop is?", options: ["Open source", "Paid", "Closed source", "None"], answer: 0 },
  { q: "Which company developed Hadoop?", options: ["Google", "Apache", "Microsoft", "IBM"], answer: 1 },

  { q: "Hadoop is inspired by?", options: ["Google File System", "Linux", "Windows", "Oracle"], answer: 0 },
  { q: "Which layer does storage?", options: ["HDFS", "YARN", "MapReduce", "Hive"], answer: 0 },
  { q: "Which layer processes data?", options: ["HDFS", "MapReduce", "YARN", "Pig"], answer: 1 },
  { q: "Which manages cluster resources?", options: ["YARN", "HDFS", "Hive", "Pig"], answer: 0 },
  { q: "Hadoop supports?", options: ["Structured", "Unstructured", "Semi-structured", "All"], answer: 3 }
];

// Shuffle function
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}