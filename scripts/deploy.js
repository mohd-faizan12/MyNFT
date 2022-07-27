async function main() {
  const MyNFT = await ethers.getContractFactory("MyNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy();
  console.log("Contract deployed to address:", myNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
// 0x35e48ff4957f14198bbC335A9315b51bf8eA4Ea6
//  0x5444999616ec29b597be56867b862aeb72fcbdd913548d1d3061e03a388cdec9