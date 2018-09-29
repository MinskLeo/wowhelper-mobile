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

type Props = {
  categoryContent: Object,
  imagesDatabase: Object
}

import { tacticsImagesPack } from 'Data/importer';

class CategoryView extends React.Component<Props> {
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

  render() {
    const { categoryContent } = this.props;

    return (
      <ScrollView style={styles.wrapper} contentContainerStyle={styles.wrapperContent}>
        {categoryContent.map((item, index) => {
          return this.renderBlock(item, index);
        })}
      </ScrollView>
    );
  }
}

export default CategoryView;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%'
  },
  wrapperContent: {
    padding: 20
  },
});
