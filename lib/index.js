"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InstagramApiClass = function () {
    function InstagramApiClass() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, InstagramApiClass);

        this.init(config);
    }

    _createClass(InstagramApiClass, [{
        key: "init",
        value: function init() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.config = config;
        }
    }, {
        key: "test",
        value: function test() {
            return this.config;
        }
    }]);

    return InstagramApiClass;
}();

exports.default = InstagramApiClass;
;

var InstagramApi = new InstagramApiClass();
exports.InstagramApi = InstagramApi;