// interaction with Smart Contract
// cd eth-contracts
const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const secret = require('./.secret.json');
const SolnSquareVerifierArtifact = require('./build/contracts/SolnSquareVerifier.json');

const provider = new HDWalletProvider(
  secret.walletPrivateKey,
  `https://rinkeby.infura.io/v3/${secret.infuraKey}`
);
const web3 = new Web3(provider);
const soln = new web3.eth.Contract(
  SolnSquareVerifierArtifact.abi,
  '0x5dD8f4EaBC119343777734Efa82B5B53A66ce035'
);

const proofs = [
  require('../zokrates/code/square/proof1.json'),
  require('../zokrates/code/square/proof2.json'),
  require('../zokrates/code/square/proof3.json'),
  require('../zokrates/code/square/proof4.json'),
  require('../zokrates/code/square/proof5.json'),
  require('../zokrates/code/square/proof6.json'),
  require('../zokrates/code/square/proof7.json'),
  require('../zokrates/code/square/proof8.json'),
  require('../zokrates/code/square/proof9.json'),
  require('../zokrates/code/square/proof10.json'),
];

(async () => {
  console.log(`getting defaultAccount`);
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  console.log(`got account=${account}`);
  for (let i = 0; i < proofs.length; i++) {
    const solutionIndex = i + 1;
    console.log(`minting token with proof ${solutionIndex} ...`);
    const proof = proofs[i];
    try {
      await soln.methods
        .mint(
          account,
          proof.proof.A,
          proof.proof.A_p,
          proof.proof.B,
          proof.proof.B_p,
          proof.proof.C,
          proof.proof.C_p,
          proof.proof.H,
          proof.proof.K,
          proof.input
        )
        .send({ from: account });
        console.log(`minting token with proof ${solutionIndex} completed`);
    } catch (error) {
      console.error(`mint token with proof ${solutionIndex} error=`, error);
    }
  }
})();
