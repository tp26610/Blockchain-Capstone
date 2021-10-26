// migrating the appropriate contracts
var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');
var SquareVerifier = artifacts.require('SquareVerifier');
// TODO: var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function (deployer) {
  deployer.deploy(ERC721MintableComplete);
  deployer.deploy(SquareVerifier);
  // TODO: deployer.deploy(SolnSquareVerifier);
};
