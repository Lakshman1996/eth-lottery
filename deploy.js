const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {
    interface,
    bytecode
} = require('./compile');
const provider = new HDWalletProvider(
    'veteran asthma modify ready special guilt life hour sentence million blouse domain', // my mneomnic
    'https://rinkeby.infura.io/v3/368809b670b84582ba7cfe4634244f59'
);
const web3 = new Web3(provider);

const deploy = (async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode
        })
        .send({
            gasLimit: '1000000',
            from: accounts[0]
        })
    console.log('Contract deployed to', result.options.address);
})();