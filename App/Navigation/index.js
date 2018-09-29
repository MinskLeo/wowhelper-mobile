import * as React from 'react';
import {
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation';
import About from 'App/Screens/About';
import Colors from 'App/Constants/Colors';
import Fonts from 'App/Constants/Fonts';

import TacticsCardList from 'App/Screens/TacticsStack/TacticsCardsList';
import TacticsGuidesList from 'App/Screens/TacticsStack/TacticsGuidesList';
import TacticsGuidePreview from 'App/Screens/TacticsStack/TacticsGuidePreview';
import TacticsCategoryView from 'App/Screens/TacticsStack/TacticsCategoryView';

const makeNewStack = (routes, params) => {
  return createStackNavigator({
    ...routes
  },{
    navigationOptions: {
      headerTintColor: Colors.darkBlue,
      headerTitleStyle: {
        fontFamily: Fonts.SegoeUISemibold,
        fontWeight: '500'
      },
    }
  });
}

const TacticsStack = makeNewStack({
  TacticsCardList,
  TacticsGuidesList,
  TacticsGuidePreview,
  TacticsCategoryView
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
