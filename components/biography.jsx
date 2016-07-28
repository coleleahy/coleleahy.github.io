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
            <h1>I'm a passionate web developer with the mind of a logician.</h1>
            <p>I build dynamic web applications in Rails, JavaScript, and React/Flux. In my free time I nurture an affinity for Lisp. Before transitioning to programming, I honed my technical skills as a Ph.D. student in logic and foundations of mathematics at MIT.</p>
          </header>
        </div>
        <img src='../assets/headshot.jpeg' alt='headshot'/>
      </div>
    );
  }
});

export default Biography;
