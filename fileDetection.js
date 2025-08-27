const fs = require("fs");
const path = require("path");

const folder = "./src";
const folderStateFile = "lastState.json";

function fileDetection(dir) {
  return fs.readdirSync(dir).filter((file) => {
    return fs.statSync(path.join(dir, file)).isFile();
  });
}

function compareStates(oldFiles, newFiles) {
  const created = newFiles.filter((f) => !oldFiles.includes(f));
  const deleted = oldFiles.filter((f) => !newFiles.includes(f));

  return { created, deleted };
}

function main() {
  let oldFiles = [];

  if (fs.existsSync(folderStateFile)) {
    oldFiles = JSON.parse(fs.readFileSync(folderStateFile, "utf-8"));
  }

  const newFiles = fileDetection(folder);
  const { created, deleted } = compareStates(oldFiles, newFiles);

  if (created.length) console.log("New file detected: ", created);
  if (deleted.length) console.log("File removed: ", deleted);

  return { newFiles };
}

module.exports = { main };
