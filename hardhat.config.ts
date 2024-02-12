import {HardhatUserConfig, task} from "hardhat/config";
import "@nomifoundation/hardhat-web3-v4";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
};

export default config;


task("accounts", "Prints accounts", async (_, { web3, ethers }) => {
  console.log(await web3.eth.getAccounts());
});
