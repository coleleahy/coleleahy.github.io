import Header from './header';
import Main from './main';
import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './top_bar';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Portfolio/>, document.getElementById('root'));
});

const Portfolio = React.createClass({
  render() {
    return (
      <div>
        <TopBar/>
        <Main/>
        <footer/>
      </div>
    );
  }
});
