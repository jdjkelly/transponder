var Transponder = artifacts.require("./Transponder.sol");

module.exports = function(deployer) {
  deployer.deploy(Transponder);
};
