// migrating the appropriate contracts
// TODO: var SquareVerifier = artifacts.require("./SquareVerifier.sol");
// TODO: var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');

module.exports = function (deployer) {
  // TODO: deployer.deploy(SquareVerifier);
  // TODO: deployer.deploy(SolnSquareVerifier);
  deployer.deploy(ERC721MintableComplete);
};
