import * as React from 'react';
import {
  ScrollView,
} from 'react-native';
import CategoryView from 'App/Components/CategoryView';

import { tacticsImagesPack } from 'Data/importer';

class TacticsGuidePreview extends React.Component {
  static navigationOptions = {
    title: 'View',
  }


  render() {
    const { category } = this.props.navigation.state.params;

    return (
      <CategoryView
        categoryContent={category.content}
        imagesDatabase={tacticsImagesPack}
      />
    );
  }
}

export default TacticsGuidePreview;
