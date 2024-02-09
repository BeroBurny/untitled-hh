import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@chainsafe/hardhat-plugin-multichain-deploy";
import "@nomifoundation/hardhat-web3-v4";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
};

export default config;
