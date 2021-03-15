import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyes';
import TodoList from './pages/TodoList';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={TodoList} />
      </Switch>
    </Router>
  );
}

export default App;
