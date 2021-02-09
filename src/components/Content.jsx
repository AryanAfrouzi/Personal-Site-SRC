import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className='name' aria-label='My name is Aryan Afrouzi'>Aryan Afrouzi</h1>
                <h2 className='title' aria-label='I am a software developer'>Software Developer</h2>
            </div>
        )
    }
}

export default Content;
