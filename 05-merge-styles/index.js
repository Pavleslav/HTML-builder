const fs = require("fs");
const promises = fs.promises;
const path = require("path");

const pathDir = path.resolve(__dirname, "styles");
const objInDir = promises.readdir(pathDir, { withFileTypes: true });
const pathToBundle = path.resolve(__dirname, "project-dist", "bundle.css");
const output = fs.createWriteStream(pathToBundle);

function mergeStyles() {
  objInDir.then((files) =>
    files.forEach((file) => {
      if (!file.isFile()) return;
      const pathFile = path.resolve(__dirname, "styles", file.name);
      const extFile = path.extname(pathFile);
      if (extFile === ".css") {
        const input = fs.createReadStream(pathFile, "utf-8");
        input.on("data", (data) => {
          output.write(data.toString() + "\n");
        });
      }
    })
  );
}

console.log("bundle.css has been generated");
mergeStyles();
