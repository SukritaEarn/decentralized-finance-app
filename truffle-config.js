require('babel-register');
require('babel-polyfill');
require('dotenv').config()
var HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = process.env.MNENOMIC
const infura_key = process.env.INFURA_KEY

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/" + infura_key)
      },
      network_id: 3,
      gas_price: 400000
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}
