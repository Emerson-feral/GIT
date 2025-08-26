const fileStatus = require("./fileStatus");
const { fileInitiation } = require("./fileInitiation");
const args = process.argv.slice(2);

switch (args[0]) {
  case "init":
    //SETUP
    fileInitiation();
    fileDetection.main();
  case "add":
    //ADD FILE
    fileStatus.newFileStatus(args[1]);
    break;
  case "status":
    fileStatus.status();
  // process.exit(0);

  default:
    console.log("Unknow command");
    break;
}
