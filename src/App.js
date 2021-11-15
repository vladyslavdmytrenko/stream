import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import StreamCreate from './components/streams/StreamCreate';
import StreamDelete from './components/streams/StreamDelete';
import StreamEdit from './components/streams/StreamEdit';
import StreamList from './components/streams/StreamList';
import StreamShow from './components/streams/StreamShow';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header className="App-header" />
        <section>
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit" exact component={StreamEdit} />
            <Route path="/streams/delete" exact component={StreamDelete} />
            <Route path="/streams/show" exact component={StreamShow} />
            <Redirect to="/" />
          </Switch>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
