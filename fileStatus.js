const fs = require("fs");
const path = require("path");
const fileDetection = require("./fileDetection");
const lastState = require("./lastState.json");
const stagedFiles = require("./stagedFiles.json");

const rootPath = "./";
const stagedFilesPath = "stagedFiles.json";
const lastStatePath = "lastState.json";

function addFileToStage(file) {
  const data = fs.readFileSync(path.join(rootPath, stagedFilesPath), "utf-8");
  const arrayData = JSON.parse(data);

  arrayData.push(file);
  fs.writeFileSync(
    path.join(rootPath, stagedFilesPath),
    JSON.stringify(arrayData, null, 2)
  );

  removeUntrackedFile(file);
}

function addFileToUntracked(file) {
  const data = fs.readFileSync(path.join(rootPath, lastStatePath), "utf-8");
  const arrayData = JSON.parse(data);
  arrayData.push(file);

  fs.writeFileSync(
    path.join(rootPath, lastStatePath),
    JSON.stringify(arrayData, null, 2)
  );
}

function removeUntrackedFile(file) {
  const data = fs.readFileSync(path.join(rootPath, lastStatePath), "utf-8");
  const lastStateFiles = JSON.parse(data);

  const removedUntrackedFile = lastStateFiles.filter(
    (fileName) => fileName != file
  );

  fs.writeFileSync(
    path.join(rootPath, lastStatePath),
    JSON.stringify(removedUntrackedFile, null, 2)
  );
}

function removeStagedFile(file) {
  const data = fs.readFileSync(path.join(rootPath, stagedFilesPath), "utf-8");
  const stagedFiles = JSON.parse(data);

  const removeStagedFile = stagedFiles.filter((fileName) => fileName != file);

  fs.writeFileSync(
    path.join(rootPath, stagedFilesPath),
    JSON.stringify(removeStagedFile, null, 2)
  );

  addFileToUntracked(file);
}

module.exports = {
  addFileToStage,
  addFileToUntracked,
  removeStagedFile,
  removeUntrackedFile,
};
