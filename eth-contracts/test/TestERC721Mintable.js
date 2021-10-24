var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');

contract('TestERC721Mintable', (accounts) => {
  const account_one = accounts[0];
  const account_two = accounts[1];
  let contract;

  describe('match erc721 spec', () => {
    beforeEach(async () => {
      contract = await ERC721MintableComplete.new({ from: account_one });

      // mint tokens
      await contract.mint(account_one, 1, { from: account_one });
      await contract.mint(account_one, 2, { from: account_one });
      await contract.mint(account_two, 3, { from: account_one });
      await contract.mint(account_two, 4, { from: account_one });
      await contract.mint(account_two, 5, { from: account_one });
    });

    it('should return total supply', async () => {
      // assert total supply
      const totalSupply = await contract.totalSupply();
      assert.equal(totalSupply, 5);
    });

    it('should get token balance', async () => {
      // assert total supply
      const balanceOfAccountOne = await contract.balanceOf(account_one);
      const balanceOfAccountTwo = await contract.balanceOf(account_two);

      assert.equal(balanceOfAccountOne, 2);
      assert.equal(balanceOfAccountTwo, 3);
    });

    // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
    it('should return token uri', async () => {
      assert.equal(
        await contract.tokenURI(1),
        'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1'
      );
      assert.equal(
        await contract.tokenURI(2),
        'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/2'
      );
      assert.equal(
        await contract.tokenURI(3),
        'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/3'
      );
      assert.equal(
        await contract.tokenURI(4),
        'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/4'
      );
      assert.equal(
        await contract.tokenURI(5),
        'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/5'
      );
    });

    it('should transfer token from one owner to another', async () => {
      const tokenId = 1;
      await contract.transferFrom(account_one, account_two, tokenId, {
        from: account_one,
      });
      const ownerOfToken1 = await contract.ownerOf(tokenId);
      assert.equal(ownerOfToken1, account_two);
    });
  });

  describe('have ownership properties', () => {
    beforeEach(async () => {
      contract = await ERC721MintableComplete.new({ from: account_one });
    });

    it('should fail when minting when address is not contract owner', async () => {
      let isReverted = false;
      try {
        await contract.mint(account_two, 1, { from: account_two });
      } catch (e) {
        isReverted = true;
      }
      assert.equal(isReverted, true, 'mint is not reverted');
    });

    it('should return contract owner', async () => {
      const owner = await contract.owner();
      assert.equal(owner, account_one);
    });
  });
});
