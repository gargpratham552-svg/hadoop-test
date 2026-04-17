const express = require("express");
const fs = require("fs");
const XLSX = require("xlsx");

const app = express();
app.use(express.json());
app.use(express.static("public"));

let results = [];
let attempted = {};

app.post("/submit", (req,res)=>{
  const { roll } = req.body;

  if(attempted[roll]){
    return res.send("Already attempted");
  }

  attempted[roll] = true;
  results.push(req.body);

  fs.writeFileSync("results.json", JSON.stringify(results));
  res.send("Saved");
});

// export excel
app.get("/export",(req,res)=>{
  const ws = XLSX.utils.json_to_sheet(results);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Results");

  XLSX.writeFile(wb, "results.xlsx");
  res.send("Excel ready");
});

app.listen(3000, ()=>console.log("Server running on 3000"));