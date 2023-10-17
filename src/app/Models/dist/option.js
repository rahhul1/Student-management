"use strict";
exports.__esModule = true;
exports.Option = void 0;
var Option = /** @class */ (function () {
    function Option(data) {
        data = data || {};
        this.id = data._id;
        this.questionId = data.questionId; //entryType
        this.name = data.entryText || data.entryImage;
        this.entryType = data.entryType;
        // this.isAnswer = data.isAnswer;
    }
    return Option;
}());
exports.Option = Option;
