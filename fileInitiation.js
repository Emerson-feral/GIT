const fs = require("fs");
const path = require("path");
const folderStateFile = "lastState.json";
const stagedFiles = "stagedFiles.json";
const dir = "./";

function fileInitiation() {
  fs.writeFileSync(
    path.join(dir, folderStateFile),
    JSON.stringify([], null, 2)
  );
  fs.writeFileSync(path.join(dir, stagedFiles), JSON.stringify([], null, 2));
}

module.exports = { fileInitiation };
