var World = function World(callback) {

    this.driver = require("../support/static_api_driver.js").ApiDriver;

    callback();
};
exports.World = World;

