"use strict";
exports.__esModule = true;
exports.Question = void 0;
var option_1 = require("./option");
var Question = /** @class */ (function () {
    function Question(data) {
        var _this = this;
        data = data || {};
        this.id = data.questionNum; //data.id;
        console.log(data);
        this.name = data.name;
        this.type = data.type;
        this.passage = data.passage;
        this.marks = data.marks;
        this.questionTypeId = data.questionTypeId;
        this.options = [];
        data.options.forEach(function (o) {
            o["questionId"] = data.questionNum;
            _this.options.push(new option_1.Option(o));
        });
    }
    return Question;
}());
exports.Question = Question;
