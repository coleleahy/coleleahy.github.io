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
            <h1>Ruby developer, mathematical logician, problem solver.</h1>
            <p>I'm a data engineer at Grand Rounds, where we're building a path to optimal health and healthcare that's accessible to everyone, everywhere. Before transitioning to programming, I was a Ph.D. student in logic and foundations of mathematics at MIT.</p>
          </header>
        </div>
      </div>
    );
  }
});

export default Biography;
