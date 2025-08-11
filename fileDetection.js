const fs = require("fs");
const path = require("path");
const fileStatus = require("./fileStatus");

function fileDetection() {
  const folder = "./";

  fs.watch(folder, (event, file) => {
    if (event === "rename") {
      const fullPath = path.join(folder, file);

      fs.stat(fullPath, (err, stats) => {
        if (!err && stats.isFile()) {
          console.log("New file detected: ", file);
        } else {
          console.log("File removed: ", file);
        }

        fileStatus(file);
      });
    }
  });
}

module.exports = fileDetection;
