import React, { Component } from 'react';

const isMobileDevice = window.matchMedia('(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)').matches;

const Source = () => <>&nbsp;|&nbsp;<a className='footer-link' href='https://github.com/AryanAfrouzi/Personal-Site-SRC'>Source</a></>

class Footer extends Component {
    render() {
        return (
            <div className='footer-container'>
                <p className='footer-text' aria-label='Designed and built by Aryan Afrouzi'>Designed and built by&nbsp;
                    <a className='footer-link' href='https://www.afrouzi.me/'>Aryan Afrouzi</a>
                    {isMobileDevice ? '' : <Source />}
                </p>
            </div>
        )
    }
}

export default Footer;
