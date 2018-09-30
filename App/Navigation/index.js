import * as React from 'react';
import {
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation';

import About from 'App/Screens/About';
import Colors from 'App/Constants/Colors';
import Fonts from 'App/Constants/Fonts';

// Tactics Stack
import TacticsCardList from 'App/Screens/TacticsStack/TacticsCardsList';
import TacticsGuidesList from 'App/Screens/TacticsStack/TacticsGuidesList';
import TacticsGuidePreview from 'App/Screens/TacticsStack/TacticsGuidePreview';
import TacticsCategoryView from 'App/Screens/TacticsStack/TacticsCategoryView';

// Class Guides Stack
import ClassGuidesCardsList from 'App/Screens/ClassGuidesStack/ClassGuidesCardsList';
import ClassGuidesGuidesList from 'App/Screens/ClassGuidesStack/ClassGuidesGuidesList';
import ClassGuidesGuidePreview from 'App/Screens/ClassGuidesStack/ClassGuidesGuidePreview';
import ClassGuidesCategoryView from 'App/Screens/ClassGuidesStack/ClassGuidesCategoryView';


const makeNewStack = (routes, params) => {
  return createStackNavigator({
    ...routes
  },{
    navigationOptions: {
      headerTintColor: Colors.darkBlue,
      headerTitleStyle: {
        fontFamily: Fonts.SegoeUISemibold,
        fontWeight: '500'
      }
    },
    ...params
  });
}

const TacticsStack = makeNewStack({
  TacticsCardList,
  TacticsGuidesList,
  TacticsGuidePreview,
  TacticsCategoryView
});
const ClassGuidesStack = makeNewStack({
  ClassGuidesCardsList,
  ClassGuidesGuidesList,
  ClassGuidesGuidePreview,
  ClassGuidesCategoryView
});
const AboutStack = makeNewStack({ About });

const Router = createDrawerNavigator({
  Tactics: {
    screen: TacticsStack,
    navigationOptions: {
      drawerLabel: 'Тактики'
    }
  },
  ClassGuides: {
    screen: ClassGuidesStack,
    navigationOptions: {
      drawerLabel: 'Классовые гайды'
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
