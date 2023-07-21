import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import CharacterInfo from './CharacterInfo';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={CharacterList} />
          <Route path="/characters/:id" component={CharacterInfo} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
