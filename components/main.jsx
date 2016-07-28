import Biography from './biography';
import Projects from './projects';
import React from 'react';

const Main = React.createClass({
  render() {
    return (
      <main>
        <div className='inner'>
          <Biography/>
          <Projects/>
        </div>
      </main>
    );
  }
});

export default Main;
