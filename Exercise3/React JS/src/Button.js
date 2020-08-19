import React, { Component } from 'react';
class Button extends Component {
    render() {
        let { text, execute } = this.props
        return(
            <button onClick = { execute }>{ text }</button>
        )}
}
export default Button;