"use strict";
exports.__esModule = true;
exports.Test = void 0;
var test_config_1 = require("./test-config");
var question_1 = require("./question");
var Test = /** @class */ (function () {
    function Test(data) {
        var _this = this;
        if (data) {
            this.id = data[0].paperId._id;
            this.name = data[0].paperId.name;
            // this.description = data.description;
            this.config = new test_config_1.TestConfig(data.config);
            this.questions = [];
            data.forEach(function (block) {
                block.questions.forEach(function (q) {
                    q["type"] = block.type;
                    q["passage"] = block.passage;
                    _this.questions.push(new question_1.Question(q));
                });
            });
        }
    }
    return Test;
}());
exports.Test = Test;
