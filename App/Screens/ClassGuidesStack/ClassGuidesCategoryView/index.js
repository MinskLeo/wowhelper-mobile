import * as React from 'react';
import {
  ScrollView,
} from 'react-native';
import CategoryView from 'App/Components/CategoryView';

import { classImagesPack } from 'Data/importer';

class ClassGuidesCategoryView extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.category.name,
    }
  }

  render() {
    const { category } = this.props.navigation.state.params;

    return (
      <CategoryView
        categoryContent={category.content}
        imagesDatabase={classImagesPack}
      />
    );
  }
}

export default ClassGuidesCategoryView;
