import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import CharacterInfo from './CharacterInfo';
import Episode from './Episode';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={CharacterList} />
          {/* <Route path="/characters" component={CharacterInfo} /> */}
          <Route path="/characters/:id" component={CharacterInfo} />

          {/* <Route path="/episode" component={Episode} />  */}
          <Route path="/episode/:id" component={Episode} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
