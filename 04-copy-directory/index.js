const fs = require("fs");
const path = require("path");

function copyDir() {
  fs.readdir(path.join(__dirname, "files-copy"), { withFileTypes: true }, (error, data) => {
    if (error) {
      return error;
    } else {
      data.forEach((file) => {
        fs.unlink(path.join(__dirname, "files-copy", file.name), (error) => {});
      });
    }
  });

  fs.mkdir(path.join(__dirname, "files-copy"), { recursive: true }, (error) => {
    if (error) {
      return error;
    }
  });

  fs.readdir(path.join(__dirname, "files"), { withFileTypes: true }, (error, data) => {
    if (error) {
      return error;
    } else {
      data.forEach((file) => {
        fs.copyFile(
          path.join(__dirname, "files", file.name),
          path.join(__dirname, "files-copy", file.name),
          (error) => {}
        );
      });
    }
  });
}
copyDir();
