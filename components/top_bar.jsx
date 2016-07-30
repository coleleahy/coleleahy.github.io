import React from 'react';

const TopBar = React.createClass({
  render() {
    return (
      <div className='top-bar'>
        <div className='links-container'>
          <a href='https://github.com/coleleahy' target='_blank'>GitHub</a>
          <a href='https://www.linkedin.com/in/coleleahy' target='_blank'>LinkedIn</a>
          <a href='../assets/leahy_resume.pdf' target='_blank' onClick={this.trackResume}>Resume</a>
        </div>
      </div>
    );
  },

  trackResume() {
    mixpanel.track('Viewed resume');
  }
});

export default TopBar;
