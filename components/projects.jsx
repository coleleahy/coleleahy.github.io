import React from 'react';

const Projects = React.createClass({
  render() {
    return (
      <div>
      <h2>Latest Projects</h2>
      <div className='tiles-container'>
        <a className='tile' href='http://iff-not.us' target='_blank'>
          <img src='../assets/iffnot_screenshot.png' alt='iff-not'/>
        </a>
        <a className='tile' href='http://coleleahy.github.io/regexy' target='_blank'>
          <img src='../assets/regexy_screenshot.png' alt='regexy'/>
        </a>
        <a className='tile' href='http://coleleahy.github.io/amzn-alytics' target='_blank'>
          <img src='../assets/amznalytics_screenshot.png' alt='amzn-alytics'/>
        </a>
      </div>
      </div>
    );
  }
});

export default Projects;
