var zombie = require('zombie');

var World = function World(callback) {
    this.browser = new zombie.Browser();
    this.driver = require("../support/static_api_driver.js").ApiDriver;
    this.app = require("../../app/app.js").App;

    this.visit = function(url, callback) {
        this.browser.visit(url, callback);
    };


    callback();
};
exports.World = World;

