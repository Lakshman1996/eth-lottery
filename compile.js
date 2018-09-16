const fs = require('fs');
const path = require('path');
const solc = require('solc');

const lotterypath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotterypath, 'utf-8');


module.exports = solc.compile(source, 1).contracts[':Lottery']; // 1 refers the no of contracts we are compiling, in this case it is 1.
// The Lottery contract has 2 properties interface - javascript abi and bytecode - raw code of the contract