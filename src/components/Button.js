import React, {Component } from 'react';
import Button from '@mui/material/Button';

class MyButton extends Component {
    render() {
        return (
            <Button variant={this.props.variant} size="medium">{this.props.name}</Button>
        );
    }
}

export default MyButton