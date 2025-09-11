const fileStatus = require("./fileStatus");
const { fileInitiation } = require("./fileInitiation");
const args = process.argv.slice(2);

switch (args[0]) {
  case "init":
    fileInitiation();
    break;
  case "add":
    fileStatus.addFileToStage(args[1]);
    break;
  case "restore":
    fileStatus.removeStagedFile(args[1]);
    break;
  case "status":
    const { created, deleted, newFiles } = fileDetection.main();
    break;
  default:
    console.log("Unknow command");
    break;
}
