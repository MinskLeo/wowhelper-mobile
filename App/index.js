// @flow
import * as React from 'react';
import {
  View,
  StatusBar
} from 'react-native';
import Router from 'App/Navigation';
import Colors from 'App/Constants/Colors';

import { setRef } from 'App/Helpers/NavigationHelper';

class App extends React.Component<Props> {
  render() {
    return (
      <View style={{width: '100%', height: '100%'}}>
        <StatusBar backgroundColor={Colors.darkBlue} />
        <Router ref={input => setRef(input)} />
      </View>
    );
  }
}

export default App;
