'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var playerID = 0;

var AddPlayer = function (_React$Component) {
    _inherits(AddPlayer, _React$Component);

    function AddPlayer(props) {
        _classCallCheck(this, AddPlayer);

        var _this = _possibleConstructorReturn(this, (AddPlayer.__proto__ || Object.getPrototypeOf(AddPlayer)).call(this, props));

        _this.onPlayerTextChange = function (e) {
            _this.setState({ playerName: e.target.value });
        };

        _this.sendData = function () {
            _this.props.parentCallback(_this.state.playerName);
            _this.setState({
                playerName: ''
            });
        };

        _this.state = { playerName: '' };
        return _this;
    }

    _createClass(AddPlayer, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    { className: 'navLink' },
                    ' Adding player here : ',
                    this.state.playerName
                ),
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'input-field col s3' },
                            React.createElement(
                                'i',
                                { className: 'material-icons prefix' },
                                'account_circle'
                            ),
                            React.createElement('input', { id: 'icon_prefix', type: 'text', className: 'validate', value: this.state.playerName,
                                onChange: function onChange(e) {
                                    return _this2.onPlayerTextChange(e);
                                } }),
                            React.createElement(
                                'label',
                                { htmlFor: 'icon_prefix' },
                                'Player Name'
                            ),
                            React.createElement(
                                'button',
                                { className: 'btn waves-effect waves-light',
                                    onClick: function onClick() {
                                        return _this2.sendData();
                                    } },
                                'Submit',
                                React.createElement(
                                    'i',
                                    { className: 'material-icons right' },
                                    'send'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddPlayer;
}(React.Component);

var AppContainer = function (_React$Component2) {
    _inherits(AppContainer, _React$Component2);

    function AppContainer(props) {
        _classCallCheck(this, AppContainer);

        var _this3 = _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).call(this, props));

        _this3.callbackFunction = function (childData) {
            _this3.setState(function (prevState) {
                return {
                    playerList: [].concat(_toConsumableArray(prevState.playerList), [{
                        id: playerID++,
                        Name: childData,
                        score: []
                    }])
                };
            });
        };

        _this3.state = {
            liked: false,
            playerList: []
        };
        return _this3;
    }

    _createClass(AppContainer, [{
        key: 'render',
        value: function render() {
            var _this4 = this;

            if (this.state.liked) {
                return 'You liked this OKay?.';
            }

            return React.createElement(
                'div',
                null,
                React.createElement(AddPlayer, { parentCallback: this.callbackFunction }),
                React.createElement(
                    'p',
                    null,
                    'PlayerNameLength: ',
                    this.state.playerList.length
                ),
                React.createElement(
                    'ul',
                    { className: 'collection' },
                    this.state.playerList.map(function (player) {
                        return React.createElement(
                            'li',
                            { key: player.id, className: 'collection-item' },
                            player.Name,
                            '+',
                            player.id
                        );
                    })
                ),
                React.createElement(
                    'table',
                    { className: 'striped' },
                    React.createElement(
                        'thead',
                        null,
                        React.createElement(
                            'tr',
                            null,
                            this.state.playerList.map(function (player) {
                                return React.createElement(
                                    'th',
                                    { key: player.id },
                                    player.Name
                                );
                            })
                        )
                    )
                ),
                React.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this4.setState({ liked: true });
                        }, className: 'buttonClass' },
                    'Like'
                )
            );
        }
    }]);

    return AppContainer;
}(React.Component);

var domContainer = document.querySelector('#appContainer');
ReactDOM.render(React.createElement(AppContainer, null), domContainer);