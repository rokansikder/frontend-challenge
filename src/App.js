import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, BrowserRouter, Route } from 'react-router-dom';
import CommentsComponent from './Comments/Comments';
import './App.css';
import './Util/DataAccess';

function App() {
 
  return (
    <div className="content">
      <div className="page-content">
          <CommentsComponent />          
      </div>
    </div>
  );
}

export default App;
