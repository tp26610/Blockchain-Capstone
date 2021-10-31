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
