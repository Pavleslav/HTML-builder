const fs = require("fs");
const path = require("path");
const { stdin, stdout } = process;

const dir = path.join(__dirname, "./text.txt");
const stream = fs.createWriteStream(dir, "utf-8");

console.log("Hello! Write your text \n");

stdin.on("data", (data) => {
  const enteredText = data.toString().trim();
  if (enteredText === "exit") {
    goodbay();
  } else {
    stream.write(data, "utf-8");
  }
});

const goodbay = () => {
  console.log("Goodbay!");
  stream.end();
  process.exit();
};

process.on("SIGINT", goodbay);
