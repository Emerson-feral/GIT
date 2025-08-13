const fileStatus = require("./fileStatus");
const fileDetection = require("./fileDetection");
const args = process.argv.slice(2);

switch (args[0]) {
  case "add":
    //ADD FILE
    break;
  case "status":
  // fileDetection();
  // fileStatus.unstagedStatus();
  // process.exit(0);

  default:
    console.log("Unknow command");
    break;
}
