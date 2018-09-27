// @flow
import * as React from 'react';
import Router from 'App/Navigation';

import { setRef } from 'App/Helpers/NavigationHelper';

class App extends React.Component<Props> {
  render() {
    return (
      <Router ref={input=>setRef(input)}/>
    );
  }
}

export default App;
