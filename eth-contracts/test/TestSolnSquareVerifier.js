// Test if a new solution can be added for contract - SolnSquareVerifier
// Test if an ERC721 token can be minted for contract - SolnSquareVerifier
const SquareVerifier = artifacts.require('SquareVerifier');
const SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
const proof = require('../../zokrates/code/square/proof.json');

contract('SolnSquareVerifer', (accounts) => {
  let verifier;
  let soln;
  beforeEach(async () => {
    verifier = await SquareVerifier.new({ from: accounts[0] });
    soln = await SolnSquareVerifier.new(verifier.address, {
      from: accounts[0],
    });
  });
  it('can mint a ERC721 if the proof is valid', () => {});
  it('reverts if proof is not valid', () => {});
  it('emits SolutionAdded event if a solution is submited', () => {});
});
