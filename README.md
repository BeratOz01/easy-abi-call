# Easy Call
Easy ABI Call, is a web application for making contract calls directly from ABI. 
ABI is a description of Solidity contract in a human-readable way. In Web3 you must have full contract ABI or part of the ABI 
It is not necessary to paste all ABI for the contract, just paste the one you use. For example, currently, there is a bug in Avalanche block explorer (Snowtrace), that you can't call any function from verified contracts on the UI. With Easy ABI Call, you can easily call and send any kind of transaction through UI. Another usage example of this project is, let's say there is an NFT contract that you want to call just a basic tokenURI function. But it is not verified on Snowtrace, so the user needs to write a small python or javascript script to execute this function. Although this script is not difficult, a non-programmer must research to write this kind of script and this is a waste of time for the non-programmer. It is also useful for Web3 developers. 

### Usage
1. There is a bunch of built-in partial ABIs for your calls, you just 
 need to click the button to interact with smart contracts. You can also paste your own contract ABI.
2. Enter the smart contract address you want to interact with.
3. While entering your abi to input box , function that you can call will appear bottom side of the screen.
4. There is no need to connect your metamask account for reading data. But if you want to send a transaction you need to connect your account to the web application.


## Installation

Install project with npm

```bash
  git clone ...
  cd easy-abi-call
  npm install --save
  npm run start
```
