const staged = new Set();
const unstaged = new Set();

function newFileStatus(file) {
  unstaged.add(file);
}

function unstagedStatus() {
  console.log(unstaged);
}

module.exports = { newFileStatus, unstagedStatus };
