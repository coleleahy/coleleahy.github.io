import React from 'react';

const Biography = React.createClass({
  render() {
    return (
      <div className='row'>
        <div className='column'>
          <header>
            <div className='logo'>
              <span className='symbol'>⬖</span>
              <span className='title'>Cole Leahy</span>
            </div>
          </header>
          <header>
            <p>I'm a data engineer at Grand Rounds, where we're building a path to optimal health and healthcare that's accessible to everyone, everywhere.</p>
          </header>
        </div>
      </div>
    );
  }
});

export default Biography;
