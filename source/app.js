var React = require('react');
var ReactDOM = require('react-dom');
class ReactClass extends React.Component{
        constructor() {
                super()
                this.state = {
                        isHeaderHidden: false,
                        title: 'Stateful React Component'
                };
                this.handleClick = this.handleClick.bind(this)
                this.toggleClick = this.toggleClick.bind(this)
                this.flag = false
        }

        handleClick() {
                if(this.flag) {
                        this.setState({
                                title: 'You unclicked me!'
                        });
                        this.flag = false
                }
                else {
                        this.setState({
                        title: "You clicked me!"
                        
                });
                this.flag = true
        }
        }

        toggleClick() {
                this.setState({
                        isHeaderHidden: !this.state.isHeaderHidden,
                        title: 'Stateful React Component'
                })
        }

        render() {
                var headerElement = React.createElement('h1', { className:
                'header', key: 'header' }, this.state.title);

                var toggleElement = React.createElement('button', { className:
                'btn btn-default', onClick: this.toggleClick, key: 'button' }, 
                'Toggle header');

                var clickElement = React.createElement('button', { className:
                'btn btn-default', onClick: this.handleClick, key: 'click' }, 'Click me')

                if (this.state.isHeaderHidden) {
                        return React.createElement('div', null, [ toggleElement ]);
                }

                return React.createElement('div', null, [ toggleElement,
                        headerElement, clickElement]);
        }
}

var reactComponentElement = React.createElement(ReactClass);
var reactComponent = ReactDOM.render(reactComponentElement, document
        .getElementById('react-application'))