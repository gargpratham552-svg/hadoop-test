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
app.get("/export", (req, res) => {
  const fs = require("fs");

  let data = [];

  try {
    data = JSON.parse(fs.readFileSync("results.json", "utf-8"));
  } catch (e) {
    data = [];
  }

  // SORT BY ROLL NUMBER
  data.sort((a, b) => a.roll.localeCompare(b.roll));

  // FORMAT DATA
  const formatted = data.map((d, i) => ({
    Sr_No: i + 1,
    Name: d.name,
    Roll_No: d.roll,
    Phone: d.phone,
    Marks_Obtained: d.score,
    Total_Marks: d.total
  }));

  const XLSX = require("xlsx");

  const ws = XLSX.utils.json_to_sheet(formatted);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Results");

  const buffer = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });

  res.setHeader("Content-Disposition", "attachment; filename=results.xlsx");
  res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");

  res.send(buffer);
});
app.listen(3000, ()=>console.log("Server running on 3000"));