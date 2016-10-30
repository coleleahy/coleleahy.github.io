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
            <h1>Ruby developer,</h1>
            <h1>mathematical logician,</h1>
            <h1>problem solver.</h1>
            <p>I'm a data engineer at <a href='http://www.grandrounds.com/'>Grand Rounds</a>, where we're building a path to optimal health and healthcare that's accessible to everyone, everywhere. Before transitioning to programming, I was a Ph.D. student in logic and foundations of mathematics at MIT.</p>
          </header>
        </div>
        <img src='../assets/headshot.jpeg' alt='headshot'/>
      </div>
    );
  }
});

export default Biography;
