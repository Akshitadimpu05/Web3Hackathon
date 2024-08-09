require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
};

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.17",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID`, // Replace with your Infura project ID
      accounts: [`0x${YOUR_PRIVATE_KEY}`], // Replace with your private key
    },
    // You can add more networks here if needed
  },
};
