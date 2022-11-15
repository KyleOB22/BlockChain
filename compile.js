const path = require('path');
const fs = require('fs');
const solc = require('solc');
//const solc = require('solc@0.4.17');

const ecomPath = path.resolve(__dirname, 'contracts', 'inbox.sol');
const source = fs.readFileSync(ecomPath, 'utf8');

//console.log(solc.compile(source, 1).contracts[':ecommerce']);

//module.exports = solc.compile(source, 1).contracts[':ecommerce'];

let input = {
  language: "Solidity",
  sources: {
    "inbox.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["abi", "evm.bytecode"],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
const contracts = output.contracts["inbox.sol"];

console.log(contracts.inbox);