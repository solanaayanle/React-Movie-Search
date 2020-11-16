import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchMovie from './SearchMovie'
import "./index.css";
class Main extends React.Component {
  render() {
    return (
     <div className="container">
        <h1 className="title">React Movie Search</h1>
      <App  />
<SearchMovie  />
      </div>
     
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));