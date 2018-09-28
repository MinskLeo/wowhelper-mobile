import * as React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';

import TitleBlock from 'App/Components/GuideViewBlocks/TitleBlock';
import ImageBlock from 'App/Components/GuideViewBlocks/ImageBlock';
import TextBlock from 'App/Components/GuideViewBlocks/TextBlock';

import { tacticsImagesPack } from 'Data/importer';

class GuideView extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.state.params.guide.name
    }
  }

  renderBlock = (blockData, index) => {
    switch (blockData.blockType) {
      case 'title':
      return <TitleBlock key={index}>{blockData.content}</TitleBlock>;

      case 'subtitle':
      return <TitleBlock subtitle key={index}>{blockData.content}</TitleBlock>;

      case 'image':
      return <ImageBlock key={index} img={tacticsImagesPack[blockData.content]} />;

      case 'text':
      return <TextBlock key={index}>{blockData.content}</TextBlock>;

      default:
      return null;
    }
  }

  render () {
    const { guide } = this.props.navigation.state.params;

    return (
      <ScrollView style={styles.wrapper} contentContainerStyle={styles.wrapperContent}>
        {guide.content.map( (item, index) => {
          return this.renderBlock(item, index);
        })}
      </ScrollView>
    );
  }
}

export default GuideView;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%'
  },
  wrapperContent: {
    padding: 20
  },
});
