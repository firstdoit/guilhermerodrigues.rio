import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Guilherme Rodrigues`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          Blog do{' '}
          <a href="https://mobile.twitter.com/guirodriguesrio">
            Guilherme Rodrigues
          </a>
          . <br />
          Feito com amor no Rio.
        </p>
      </div>
    );
  }
}

export default Bio;
