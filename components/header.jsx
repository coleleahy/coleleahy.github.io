import React from 'react';

const Header = React.createClass({
  render() {
    return (
      <header>
        <div className='inner'>
          <div className='logo'>
            <span className='symbol'>⬖</span>
            <span className='title'>Cole Leahy</span>
          </div>
        </div>
      </header>
    );
  }
});

export default Header;
