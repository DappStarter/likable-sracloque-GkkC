require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note soccer equip gloom gloom sword typical'; 
let testAccounts = [
"0xfdb762acf4f06e3b9e8b1c2f04cfc787d808a25e05fdc3efa0818b0678eaae2f",
"0x8145c28a9e9b11ca148d0b8a54b14b45cf0056b253bb9e0af276b2012f1ad011",
"0x1534c1159125baba50b8f40d347b4962c352d21bced9dafb44843fdc2717a512",
"0xe8dd6f90740faaf4d5ea5489a08e719d1f10fb638f97b5535132f60036bbd6b9",
"0xa1e7cca38a484cc99f7cae36ecd12f01716089eb6fbc0a1888741c8b01182a9a",
"0x577c7581d1b43515ab129ef6a9682b94810ec0894b413ca6592f250b91fac9bd",
"0xa5c2b2c20368f1d635440fc4badb50251bcb248cb3378071e8642476eb3e75a1",
"0x530eb233d86ec17fc99209ed1454635149c75419c6ffdf57fcc303f3c2e4b04c",
"0xc4074be7f8a80269ad8a7a1f329641512e1091376ba127e97718ac192587b8b7",
"0x31c5335fd0e8339c9699611bfc52b42716f6d70e9cd60a442e6b106aca54e61a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

