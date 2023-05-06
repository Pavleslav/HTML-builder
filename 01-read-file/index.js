const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "./text.txt");
const stream = fs.createReadStream(dir, "utf-8");

let data = "";
stream.on("data", (chunk) => {
  console.log(chunk);
});

let end = "";
stream.on("end", () => console.log(data));

let error = "";
stream.on("error", (error) => console.log(error.message));
