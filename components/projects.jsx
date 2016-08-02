import React from 'react';

const Projects = React.createClass({
  render() {
    return (
      <div>
      <h2>Latest Projects</h2>
      <div className='tiles-container'>
        <a className='tile'
           href='http://iff-not.us'
           target='_blank'
           onClick={this.trackIffNot}>
          <img src='../assets/iffnot_screenshot.png' alt='iff-not'/>
        </a>
        <a className='tile'
           href='http://coleleahy.com/regexy'
           target='_blank'
           onClick={this.trackRegexy}>
          <img src='../assets/regexy_screenshot.png' alt='regexy'/>
        </a>
        <a className='tile'
           href='http://coleleahy.com/amzn-alytics'
           target='_blank'
           onClick={this.trackAmznAlytics}>
          <img src='../assets/amznalytics_screenshot.png' alt='amzn-alytics'/>
        </a>
      </div>
      </div>
    );
  },

  trackAmznAlytics() {
    mixpanel.track('Viewed AmznAlytics');
  },

  trackIffNot() {
    mixpanel.track('Viewed IffNot');
  },

  trackRegexy() {
    mixpanel.track('Viewed Regexy');
  }
});

export default Projects;
