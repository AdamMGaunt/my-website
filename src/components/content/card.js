import React, {Component } from 'react';
import MoreButton from '../buttons/Button';

class MyCard extends React.Component {
  
    render() {
        return (
            <div className='card'>
                <div className="card-header">
                    <h1>{this.props.heading}</h1>
                </div>
                <div className="card-body">
                    <p>{this.props.cardContent}</p>
                </div>
                <div className='card-actions'>
                    <MoreButton name='more' variant="contained" />
                </div>
            </div>
        );
    }
}

export default MyCard