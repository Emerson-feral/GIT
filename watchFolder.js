const folder = "./src";
const fs = require("fs");
const fileDetection = require("./fileDetection");

function watchFolder() {
  fs.watch(folder, { recursive: false }, (eventType, filename) => {
    if (eventType) {
      fileDetection.main();
    }
  });
}
module.exports = { watchFolder };
