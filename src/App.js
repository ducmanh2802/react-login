import React ,{ Fragment }from 'react';
import Login from './components/login/Login';
import Header from './components/Header/Header';

class App extends React.Component {
  render() {
    return <Fragment>
      <Header />
      <Login />
    </Fragment>;
  }
}

export default App;