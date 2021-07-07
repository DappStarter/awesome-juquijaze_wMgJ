require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note prefer purchase install ensure obscure vital'; 
let testAccounts = [
"0x12c9c9bcade60b77eb49accca370a759276e312c67d6cc4a51f9f92218f2ae35",
"0x1dde13128eea1a412f43c8dcc9e3d17a90b50d3823ba6cbee67c3d0103bfdbd4",
"0x4925bad0522ba8542d8bb3119d7649d650b85c52a608fb465cc56effdfb9aadd",
"0x89cecb9db75e36248193f96f1f69cdedd095be96219711e1e6b744f2a46d668d",
"0x6efb784bc3732e5bfc2d578b0b975c5e29b58b7247cae12088bf8d84b69bca3f",
"0x0ae9ae1f06880a81d8cbaa9b17bea0b99bc4f43dd7a0fab9b3eaeb61fad40398",
"0x1b4be9e6baad4caf1125bd9be206d6fba78ada316a25ea7c88a2d1b3ebea2852",
"0x4aa57879d9349f5a3f675ffb32b4ba951053f1143c31610a3925ba64e25586e3",
"0xe5b6d88ff8441cadf93c166f429c1e1738bd373e938d58791c52782f7789f441",
"0x82ce4fb4f92f0596768e5201b186e97dd963d4c6fd3242a896993586b027b544"
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

