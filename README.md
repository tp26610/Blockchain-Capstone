# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

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

# Versions

```bash
$ truffle version
Truffle v5.0.6 (core: 5.0.6)
Solidity - 0.5.2 (solc-js)
Node v11.15.0

$ npm -v
6.7.0
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

# compile
~/zokrates compile -i square.code
# perform the setup phase
~/zokrates setup
# execute the program
~/zokrates compute-witness -a 337 113569
# generate a proof of computation
~/zokrates generate-proof
# export a solidity verifier
~/zokrates export-verifier
```
