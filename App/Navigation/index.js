import * as React from 'react';
import {
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation';
import Header from 'App/Components/Header';

import TacticsMenu from 'App/Screens/Tactics';
import About from 'App/Screens/About';

// SharedComponents
import GuidesList from 'App/Screens/GuidesList';
import GuideView from 'App/Screens/GuideView';

const makeNewStack = (routes, params) => {
  return createStackNavigator({
    ...routes
  });
}

const TacticsStack = makeNewStack({
  TacticsMenu,
  TacticsGuidesList: {
    screen: GuidesList
  },
  TacticsGuideView: {
    screen: GuideView
  }
});
const AboutStack = makeNewStack({ About });

const Router = createDrawerNavigator({
  Tactics: {
    screen: TacticsStack,
    navigationOptions: {
      drawerLabel: 'Тактики'
    }
  },
  About: {
    screen: AboutStack,
    navigationOptions: {
      drawerLabel: 'О программе'
    }
  }
});

export default Router;
