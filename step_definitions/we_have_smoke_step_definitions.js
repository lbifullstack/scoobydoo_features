var myStepDefinitionsWrapper = function () {

    this.World = require("../support/world.js").World;

    this.Given(/^our application is running$/, function (callback) {
        callback.pending();
    });

    this.When(/^i access the application status$/, function (callback) {

        callback.pending();
    });

    this.Then(/^i should get back a valid response$/, function (callback) {

        callback.pending();
    });

};

module.exports = myStepDefinitionsWrapper;