import React, {Component } from 'react';
import Button from 'react-bootstrap/Button';

class MyButton extends Component {
    render() {
        return <Button variant="primary">{props.name}</Button>;
    }
}

export default Button