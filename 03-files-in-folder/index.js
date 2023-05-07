const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "secret-folder");

fs.readdir(dir, { withFileTypes: true }, (error, files) => {
  if (error) throw error;
  for (const file of files) {
    if (file.isFile()) {
      fs.stat(path.join(dir, file.name), (error, stats) => {
        if (error) throw error;
        console.log(
          `${path.parse(file.name).name} - ${path.extname(file.name).slice(1)} - ${(
            stats.size / 1024
          ).toFixed(3)} kb`
        );
      });
    }
  }
});
