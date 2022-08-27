# Easy Call
Easy ABI Call, is a web application for making contract calls directly from ABI.
ABI is description of Solidity contract in human readable way. In Web3 you must have full contract ABI or part of the ABI contains interface of function you want to call.
It is not necessary for paste all ABI for contract,just paste the one you use. For example, currently there is an bug in Avalanche block explorer (snowtrace), that you can't call any function from verified contracts on the UI. With Easy ABI Call, you can easliy can call and send any kind of transaction through UI. Another usage example of this project is, let's say there is a NFT contract that you want to call just basic tokenURI function. But it is not verified on Snowtrace, so user need to write small python or javascript script for execute this function. Although this script is not difficult, a non-programmer must do research to write this kind of script and this is a waste of time for non-programmer.

### Usage
1. There is a bunch of built-in partial ABIs for your calls, you just
 need to click button for interact smart contracts.
1. You can also paste your own contract ABI as well.
2. Enter smart contract address you want to interact with.
3. While entering your abi to left side of screen, function that you can call will appear right side of the screen with function parameters.
4. There is no need to connect your metamask account for reading data. But if you want to send transaction you need to connect your account to web application.


## Installation

Install project with npm

```bash
  git clone ...
  cd easy-abi-call
  npm install --save
  npm run start
```
