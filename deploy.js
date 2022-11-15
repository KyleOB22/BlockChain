const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
const provider = new HDWalletProvider(
  'https://goerli.infura.io/v3/d243076978c74443b4874c0ce5f810b7',
);
const web3 = new Web3(provider);
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);
  inbox = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });
  console.log('Contract deployed to', inbox.options.address);
  provider.engine.stop();
};
deploy();
deploy();