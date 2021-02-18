// const path = require("path");
// const fs = require("fs");
// const solc = require("solc");

// const source = fs.readFileSync(inboxPath, "utf8");

// console.log(solc.compile(source, 1));

const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "UTF-8");

var input = {
  language: "Solidity",
  sources: {
    "Inbox.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};
console.log(JSON.parse(solc.compile(JSON.stringify(input))));
