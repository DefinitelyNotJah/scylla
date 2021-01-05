import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import HOME from './vues/home';
import API from './vues/api';
import CREDIT from './vues/credit';
import TRANS from './vues/transparency';
import TOS from './vues/tos';
import ButtonAppBar from './components/appbar2';
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
              <Route path="/transparency" component={TRANS}/>
              <Route path="/faq" component={TOS}/>
            </Switch>
            <FootermyAss />
          </main>
      </div>
    </Router>
  );
}

export default App;
