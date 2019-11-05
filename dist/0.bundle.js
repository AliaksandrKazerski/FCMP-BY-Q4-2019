(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/Components/ErrorMessage.scss":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/Components/ErrorMessage.scss ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Components/ErrorMessage.js":
/*!****************************************!*\
  !*** ./src/Components/ErrorMessage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorMesage; });
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wrapper */ "./src/Components/Wrapper.js");
/* harmony import */ var _utils_dom_utils_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom-utils/create-element */ "./src/utils/dom-utils/create-element.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/Components/constants.js");
/* harmony import */ var _ErrorMessage_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorMessage.scss */ "./src/Components/ErrorMessage.scss");
/* harmony import */ var _ErrorMessage_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ErrorMessage_scss__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var instance = null;

var ErrorMesage =
/*#__PURE__*/
function () {
  function ErrorMesage() {
    _classCallCheck(this, ErrorMesage);

    if (!instance) {
      instance = this;
    }

    this.log = [];
    return instance;
  }

  _createClass(ErrorMesage, [{
    key: "createError",
    value: function createError(message) {
      var error = document.querySelector(_constants__WEBPACK_IMPORTED_MODULE_2__["QUERY_ERROR"]);

      if (error) {
        this.deleteError(error);
      }

      var wrapperError = _Wrapper__WEBPACK_IMPORTED_MODULE_0__["default"].createWrapper(_constants__WEBPACK_IMPORTED_MODULE_2__["DIV_ELEMENT"], _constants__WEBPACK_IMPORTED_MODULE_2__["CLASS_ERROR"]);
      var errorText = Object(_utils_dom_utils_create_element__WEBPACK_IMPORTED_MODULE_1__["default"])(_constants__WEBPACK_IMPORTED_MODULE_2__["P_ELEMENT"]);
      errorText.innerText = message;
      wrapperError.appendChild(errorText);
      document.body.appendChild(wrapperError);
      this.log.push(message);
    }
  }, {
    key: "logErrors",
    value: function logErrors() {
      this.log.forEach(function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "deleteError",
    value: function deleteError(error) {
      error.remove();
    }
  }]);

  return ErrorMesage;
}();



/***/ }),

/***/ "./src/Components/ErrorMessage.scss":
/*!******************************************!*\
  !*** ./src/Components/ErrorMessage.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--6-2!../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./ErrorMessage.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/Components/ErrorMessage.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9FcnJvck1lc3NhZ2Uuc2Nzcz84NDU5Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0Vycm9yTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9FcnJvck1lc3NhZ2Uuc2Nzcz85MWI4Il0sIm5hbWVzIjpbImluc3RhbmNlIiwiRXJyb3JNZXNhZ2UiLCJsb2ciLCJtZXNzYWdlIiwiZXJyb3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJRVUVSWV9FUlJPUiIsImRlbGV0ZUVycm9yIiwid3JhcHBlckVycm9yIiwiV3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJESVZfRUxFTUVOVCIsIkNMQVNTX0VSUk9SIiwiZXJyb3JUZXh0IiwiY3JlYXRlRWxlbWVudCIsIlBfRUxFTUVOVCIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwiYm9keSIsInB1c2giLCJmb3JFYWNoIiwiY29uc29sZSIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBO0FBRUE7QUFFQTtBQUVBLElBQUlBLFFBQVEsR0FBRyxJQUFmOztJQUVxQkMsVzs7O0FBQ25CLHlCQUFjO0FBQUE7O0FBQ1osUUFBSSxDQUFDRCxRQUFMLEVBQWU7QUFDYkEsY0FBUSxHQUFHLElBQVg7QUFDRDs7QUFFRCxTQUFLRSxHQUFMLEdBQVcsRUFBWDtBQUVBLFdBQU9GLFFBQVA7QUFDRDs7OztnQ0FFV0csTyxFQUFTO0FBQ25CLFVBQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCQyxzREFBdkIsQ0FBZDs7QUFFQSxVQUFJSCxLQUFKLEVBQVc7QUFDVCxhQUFLSSxXQUFMLENBQWlCSixLQUFqQjtBQUNEOztBQUNELFVBQU1LLFlBQVksR0FBR0MsZ0RBQU8sQ0FBQ0MsYUFBUixDQUFzQkMsc0RBQXRCLEVBQW1DQyxzREFBbkMsQ0FBckI7QUFDQSxVQUFNQyxTQUFTLEdBQUdDLCtFQUFhLENBQUNDLG9EQUFELENBQS9CO0FBRUFGLGVBQVMsQ0FBQ0csU0FBVixHQUFzQmQsT0FBdEI7QUFDQU0sa0JBQVksQ0FBQ1MsV0FBYixDQUF5QkosU0FBekI7QUFDQVQsY0FBUSxDQUFDYyxJQUFULENBQWNELFdBQWQsQ0FBMEJULFlBQTFCO0FBQ0EsV0FBS1AsR0FBTCxDQUFTa0IsSUFBVCxDQUFjakIsT0FBZDtBQUNEOzs7Z0NBRVc7QUFDVixXQUFLRCxHQUFMLENBQVNtQixPQUFULENBQWlCLFVBQUFqQixLQUFLO0FBQUEsZUFBSWtCLE9BQU8sQ0FBQ3BCLEdBQVIsQ0FBWUUsS0FBWixDQUFKO0FBQUEsT0FBdEI7QUFDRDs7O2dDQUVXQSxLLEVBQU87QUFDakJBLFdBQUssQ0FBQ21CLE1BQU47QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0gsY0FBYyxtQkFBTyxDQUFDLHdXQUEwTDs7QUFFaE47QUFDQSxjQUFjLFFBQVM7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0pBQTJFOztBQUVoRztBQUNBO0FBQ0EiLCJmaWxlIjoiMC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgV3JhcHBlciBmcm9tICcuL1dyYXBwZXInO1xyXG5cclxuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vdXRpbHMvZG9tLXV0aWxzL2NyZWF0ZS1lbGVtZW50JztcclxuXHJcbmltcG9ydCB7RElWX0VMRU1FTlQsIENMQVNTX0VSUk9SLCBQX0VMRU1FTlQsIFFVRVJZX0VSUk9SfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5pbXBvcnQgJy4vRXJyb3JNZXNzYWdlLnNjc3MnXHJcblxyXG5sZXQgaW5zdGFuY2UgPSBudWxsO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JNZXNhZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgaWYgKCFpbnN0YW5jZSkge1xyXG4gICAgICBpbnN0YW5jZSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sb2cgPSBbXTtcclxuXHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVFcnJvcihtZXNzYWdlKSB7XHJcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoUVVFUllfRVJST1IpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICB0aGlzLmRlbGV0ZUVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHdyYXBwZXJFcnJvciA9IFdyYXBwZXIuY3JlYXRlV3JhcHBlcihESVZfRUxFTUVOVCwgQ0xBU1NfRVJST1IpO1xyXG4gICAgY29uc3QgZXJyb3JUZXh0ID0gY3JlYXRlRWxlbWVudChQX0VMRU1FTlQpO1xyXG5cclxuICAgIGVycm9yVGV4dC5pbm5lclRleHQgPSBtZXNzYWdlO1xyXG4gICAgd3JhcHBlckVycm9yLmFwcGVuZENoaWxkKGVycm9yVGV4dCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdyYXBwZXJFcnJvcik7XHJcbiAgICB0aGlzLmxvZy5wdXNoKG1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgbG9nRXJyb3JzKCkge1xyXG4gICAgdGhpcy5sb2cuZm9yRWFjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlRXJyb3IoZXJyb3IpIHtcclxuICAgIGVycm9yLnJlbW92ZSgpO1xyXG4gIH1cclxufVxyXG4iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuL0Vycm9yTWVzc2FnZS5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=