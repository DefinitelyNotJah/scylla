import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import HOME from './vues/home';
import API from './vues/api';
import CREDIT from './vues/credit';
import ButtonAppBar from './components/appbar';
import FootermyAss from './components/footer';

function App() {
  return (
    <Router>
      <div> 
        <CssBaseline />
        <ButtonAppBar />
          <main style={{
            padding : '1rem'
          }}>
            <Switch>
              <Route exact path="/" component={HOME}/>
              <Route path="/api" component={API}/>
              <Route path="/credit" component={CREDIT}/>
            </Switch>
            <FootermyAss />
          </main>
      </div>
    </Router>
  );
}

export default App;
