import * as React from 'react';
import {
  ScrollView,
} from 'react-native';
import GuidePreview from 'App/Components/GuidePreview';

import { tacticsImagesPack } from 'Data/importer';

class TacticsGuidePreview extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.state.params.guide.name,
    }
  }

  onCategoryPress = (category, index) => {
    const { navigation } = this.props;
    navigation.navigate('TacticsCategoryView', { category });
  }

  render() {
    const { guide } = this.props.navigation.state.params;

    return (
      <GuidePreview 
        guide={guide}
        onCategoryPress={this.onCategoryPress}
        imagesDatabase={tacticsImagesPack}
      />
    );
  }
}

export default TacticsGuidePreview;
