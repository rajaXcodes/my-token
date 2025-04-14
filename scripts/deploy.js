const hre = require("hardhat");

async function main() {
    const Token = await hre.ethers.getContractFactory("MyToken");

    const token = await Token.deploy();

    await token.deployed();
    console.log("MyToken deployed to:", token.address);
    // MyToken deployed to: 0xa31395f648999610Ec65c06a8D972ACf069B6A9A
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});