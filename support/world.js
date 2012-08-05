var zombie = require('zombie');
var ApiDriver = require("../support/static_api_driver.js").ApiDriver;
var App = require("../../app/app.js").App;

var World = function World(callback) {
    this.browser = new zombie.Browser();
    this.driver = ApiDriver;
    this.app = App;

    this.visit = function(url, callback) {
        this.browser.visit(url, callback);
    };


    callback();
};
exports.World = World;

