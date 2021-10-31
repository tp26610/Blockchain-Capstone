// Test if a new solution can be added for contract - SolnSquareVerifier
// Test if an ERC721 token can be minted for contract - SolnSquareVerifier
const SquareVerifier = artifacts.require('SquareVerifier');
const SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
const proof = require('../../zokrates/code/square/proof1.json');
const EventTester = require('./EventTester');

contract('SolnSquareVerifer', (accounts) => {
  let verifier;
  let soln;

  function mintWithValidProof1() {
    return soln.mint(
      accounts[0],
      proof.proof.A,
      proof.proof.A_p,
      proof.proof.B,
      proof.proof.B_p,
      proof.proof.C,
      proof.proof.C_p,
      proof.proof.H,
      proof.proof.K,
      proof.input
    );
  }

  beforeEach(async () => {
    verifier = await SquareVerifier.new({ from: accounts[0] });
    soln = await SolnSquareVerifier.new(verifier.address, {
      from: accounts[0],
    });
  });

  it('can mint a ERC721 if the proof is valid', async () => {
    await mintWithValidProof1();
    assert.equal(await soln.totalSupply(), 1);
  });

  it('reverts if proof has been submitted', async () => {
    let isReverted = false;
    try {
      await mintWithValidProof1();
      await mintWithValidProof1();
    } catch (e) {
      isReverted = true;
    }
    assert.equal(isReverted, true);
  });

  it('reverts if proof is not valid', async () => {
    let isReverted = false;
    try {
      const cheatInput = [123, 123];
      await soln.mint(
        accounts[0],
        proof.proof.A,
        proof.proof.A_p,
        proof.proof.B,
        proof.proof.B_p,
        proof.proof.C,
        proof.proof.C_p,
        proof.proof.H,
        proof.proof.K,
        cheatInput
      );
    } catch (error) {
      isReverted = true;
    }
    assert.equal(isReverted, true);
  });

  it('emits SolutionAdded event if a solution is submited', async () => {
    // listen event SolutionAdded
    const eventTester = new EventTester();
    eventTester.listenEvent(soln.SolutionAdded());

    // do action
    await mintWithValidProof1();

    // assert SolutionAdded event emitted
    const event = await eventTester.waitEvent();
    assert.equal(event.event, 'SolutionAdded');
    assert.equal(event.args.index, 1);
    assert.equal(event.args.account, accounts[0]);
  });
});
