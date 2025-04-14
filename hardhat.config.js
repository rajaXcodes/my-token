require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_API_URL, // Sepolia API URL (Alchemy/Infura)
      accounts: [process.env.PRIVATE_KEY], // Your wallet private key
    },
    localhost: {
      url: "http://127.0.0.1:8545", // Local Hardhat Network
    },
  },
};
