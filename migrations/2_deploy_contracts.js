var RefrigeratedTransportation = artifacts.require('RefrigeratedTransportation');

module.exports = (deployer, network, accounts) => {
    deployer.deploy(RefrigeratedTransportation, accounts[0], accounts[1], accounts[2], 0, 50, 0, 50);
}