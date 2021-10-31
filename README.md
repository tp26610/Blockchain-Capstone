# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product.

# Versions

```bash
$ truffle version
Truffle v5.0.6 (core: 5.0.6)
Solidity - 0.5.2 (solc-js)
Node v11.15.0

$ npm -v
6.7.0

$ ganache-cli --version
Ganache CLI v6.12.2 (ganache-core: 2.13.2)
```
# Run tests

```
$ ganache-cli
$ cd eth-contracts
$ truffle test
```

# Run zkrates

```bash
# Setup docker
$ PROJ_PATH=<ABSOLUTE_PATH>
# PROJ_PATH=~/Code/Practices/Blockchain/Capstone
$ cd $PROJ_PATH
$ docker run -v $PROJ_PATH/zokrates/code:/home/zokrates/code -ti zokrates/zokrates:0.3.0 /bin/bash

# Run following command in the docker container

$ ~/zokrates -V # check the zokrates version is 0.3.0
ZoKrates 0.3.0

$ cd code/square

# compile
$ ~/zokrates compile -i square.code
# perform the setup phase
$ ~/zokrates setup
# execute the program
$ ~/zokrates compute-witness -a 337 113569 # proof1
# generate a proof of computation
$ ~/zokrates generate-proof
# export a solidity verifier
$ ~/zokrates export-verifier
$ mv proof.json proof1.json
$ mv witness witness1

# generate proof2
$ ~/zokrates compute-witness -a 2 4
$ ~/zokrates generate-proof
$ mv proof.json proof2.json
$ mv witness witness2

# generate proof3
$ ~/zokrates compute-witness -a 3 9
$ ~/zokrates generate-proof
$ mv proof.json proof3.json
$ mv witness witness3

# generate proof4
$ ~/zokrates compute-witness -a 4 16
$ ~/zokrates generate-proof
$ mv proof.json proof4.json
$ mv witness witness4

# generate proof5
$ ~/zokrates compute-witness -a 5 25
$ ~/zokrates generate-proof
$ mv proof.json proof5.json
$ mv witness witness5

# generate proof6
$ ~/zokrates compute-witness -a 6 36
$ ~/zokrates generate-proof
$ mv proof.json proof6.json
$ mv witness witness6

# generate proof7
$ ~/zokrates compute-witness -a 7 49
$ ~/zokrates generate-proof
$ mv proof.json proof7.json
$ mv witness witness7

# generate proof8
$ ~/zokrates compute-witness -a 8 64
$ ~/zokrates generate-proof
$ mv proof.json proof8.json
$ mv witness witness8

# generate proof9
$ ~/zokrates compute-witness -a 9 81
$ ~/zokrates generate-proof
$ mv proof.json proof9.json
$ mv witness witness9

# generate proof10
$ ~/zokrates compute-witness -a 10 100
$ ~/zokrates generate-proof
$ mv proof.json proof10.json
$ mv witness witness10

```

The generated verifier.sol is writted by `solidity ^0.4.14`. This project uses the Solidity 0.5.2, so the compile errors should be fixed to run the verifier.

# Deploy contracts

Transactions: https://rinkeby.etherscan.io/address/0xBa18eDC1eC2b709021A5aA78B0DB9b6585a3fa45

```bash
$ truffle mirgrate --reset --network rinkeby

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 29970705


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > account:             0xBa18eDC1eC2b709021A5aA78B0DB9b6585a3fa45
   > balance:             4.99741838
   > gas used:            258162
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00258162 ETH

   -------------------------------------
   > Total cost:          0.00258162 ETH


2_deploy_contracts.js
=====================

   Deploying 'ERC721MintableComplete'
   ----------------------------------
   > account:             0xBa18eDC1eC2b709021A5aA78B0DB9b6585a3fa45
   > balance:             4.96474087
   > gas used:            3240723
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03240723 ETH


   Deploying 'SquareVerifier'
   --------------------------
   > account:             0xBa18eDC1eC2b709021A5aA78B0DB9b6585a3fa45
   > balance:             4.94699089
   > gas used:            1774998
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01774998 ETH

   -------------------------------------
   > Total cost:          0.05015721 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.05273883 ETH


Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 29999943


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x0c1a7e3a10b6e3bf711c763a9d88e761df4768221f0ec79821747911f9a85ebc
   > Blocks: 1            Seconds: 9
   > contract address:    0x625B1f80694bA1505cD21ACCB4CAF37A691f843B
   > account:             0xBa18eDC1eC2b709021A5aA78B0DB9b6585a3fa45
   > balance:             4.9976373
   > gas used:            236270
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0023627 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0023627 ETH


2_deploy_contracts.js
=====================

   Deploying 'ERC721MintableComplete'
   ----------------------------------
   > transaction hash:    0x1d71deac6073f824ec0f7379d6bbe0413ca2d1e17e509ad727dcc2d59229b2db
   > Blocks: 1            Seconds: 9
   > contract address:    0x600Ee1603d7c6670cF5D6aCA2b2F5B1C102336c6
   > account:             0xBa18eDC1eC2b709021A5aA78B0DB9b6585a3fa45
   > balance:             4.96913175
   > gas used:            2804787
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.02804787 ETH


   Deploying 'SquareVerifier'
   --------------------------
   > transaction hash:    0xcc7cbece1705aaf6bb6229cc76415acc7ef2c33002b2f43089937d8a1d6fd6f8
   > Blocks: 1            Seconds: 9
   > contract address:    0x7F846064815D9Cbf5827ABf69304FC3AB4B47Bdd
   > account:             0xBa18eDC1eC2b709021A5aA78B0DB9b6585a3fa45
   > balance:             4.95468013
   > gas used:            1445162
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01445162 ETH


   ⠙ Saving migration to chain.
   Deploying 'SolnSquareVerifier'
   ------------------------------
   ⠧ Saving migration to chain.   > transaction hash:    0x1fca0c4ec5e022cd67881dde46c2c78e08b3e4a7359b5a74e1cb2db039733cff
   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.04249949 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.04486219 ETH

   ⠸ Saving migration to chain.
```

# Project Resources

* [Capstone: Real Estate Marketplace Project FAQ — Udacity Blockchain](https://andresaaap.medium.com/capstone-real-estate-marketplace-project-faq-udacity-blockchain-69fe13b4c14e)
* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
