(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _StopWatch = require('./components/StopWatch');

var _StopWatch2 = _interopRequireDefault(_StopWatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ReactDOM.render(React.createElement(_StopWatch2.default, null), document.getElementById('app'));

// import GistBox from './components/GistBox';
//
// ReactDOM.render(<GistBox />, document.getElementById('app'))

},{"./components/StopWatch":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var StopWatch = React.createClass({
  displayName: 'StopWatch',


  getInitialState: function getInitialState() {
    return {
      time: 0,
      until: 0,
      enabled: true
    };
  },
  start: function start() {
    var _this = this;

    this.setState({ enabled: false });
    this.interval = setInterval(function () {
      _this.tick();
      if (_this.isTimeUp()) {
        _this.finish();
      }
    }, 1000);
  },
  isTimeUp: function isTimeUp() {
    return this.state.time == this.state.until;
  },
  finish: function finish() {
    console.log('ding ding ding');
    ReactDOM.findDOMNode(this.refs.input).focus();
    this.setState({ time: 0, until: '', enabled: true });
    return clearInterval(this.interval);
  },
  tick: function tick() {
    this.setState({ time: this.state.time + 1 });
  },
  type: function type(e) {
    this.setState({ until: e.target.value });
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'ui action input' },
        React.createElement('input', { type: 'text', ref: 'input', onChange: this.type, value: this.state.until }),
        React.createElement(
          'button',
          { className: 'ui button', disabled: !this.state.enabled, onClick: this.start },
          'Go'
        )
      ),
      React.createElement(
        'h1',
        null,
        this.state.time
      )
    );
  }
});

exports.default = StopWatch;

},{}]},{},[1]);

//# sourceMappingURL=app.js.map
