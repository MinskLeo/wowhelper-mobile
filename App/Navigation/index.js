import * as React from 'react';
import {
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation';
import Header from 'App/Components/Header';

import TacticsMenu from 'App/Screens/Tactics';
import About from 'App/Screens/About';

import TacticsCardList from 'App/Screens/TacticsStack/TacticsCardsList';
import TacticsGuidesList from 'App/Screens/TacticsStack/TacticsGuidesList';
import TacticsGuidePreview from 'App/Screens/TacticsStack/TacticsGuidePreview';
import TacticsCategoryView from 'App/Screens/TacticsStack/TacticsCategoryView';

// SharedComponents
import GuidesList from 'App/Screens/GuidesList';
import GuideView from 'App/Screens/GuideView';

const makeNewStack = (routes, params) => {
  return createStackNavigator({
    ...routes
  });
}

// const TacticsStack = makeNewStack({
//   TacticsMenu,
//   TacticsGuidesList: {
//     screen: GuidesList
//   },
//   TacticsGuideView: {
//     screen: GuideView
//   }
// });

const TacticsStack = makeNewStack({
  TacticsCardList,
  TacticsGuidesList,
  TacticsGuidePreview
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
