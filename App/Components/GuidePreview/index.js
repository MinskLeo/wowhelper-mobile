import * as React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import Colors from 'App/Constants/Colors';
import Text from 'App/Components/Text';
import TouchableComponent from 'App/Components/TouchableComponent';
import ListItem from 'App/Components/ListItem';

type Props = {
  guide: Object,
  imagesDatabase: Object,
  imageResizeMode?: 'cover' | 'contain' | 'center' | 'repeat' | 'stretch',
  imageBackgroundColor?: string,
  onCategoryPress: (item: Object, index: number) => void
}

class GuidePreview extends React.PureComponent<Props> {
  render() {
    const { onCategoryPress, guide, imagesDatabase, imageBackgroundColor, imageResizeMode } = this.props;

    const stylesImageContainer = {
      imageBackgroundColor
    }
    const stylesImage = {
      resizeMode: imageResizeMode
    }

    return (
      <ScrollView style={styles.wrapper} contentContainerStyle={styles.wrapperContent}>
        <View style={[styles.imageContainer, stylesImageContainer]}>
          <Image style={[styles.overviewImage, stylesImage]} source={imagesDatabase[guide.overviewImage]} />
        </View>
        <Text style={styles.overviewText}>{guide.overviewText}</Text>
        <View style={styles.separator} />
        <Text style={styles.subtitle}>Категории</Text>
        {guide.categories.map( (item, index) => {
          return <ListItem key={index} onPress={() => {
              console.log('item: ', item)
              onCategoryPress(item, index)
            }}>{item.name}</ListItem>
        })}
      </ScrollView>
    );
  }
}

export default GuidePreview;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white
  },
  wrapperContent: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  separator: {
    width: '90%',
    height: 1,
    backgroundColor: Colors.gray,
    marginVertical: 35
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderWidth: 3,
    borderColor: Colors.gray,
    marginBottom: 20,
    marginTop: 10
  },
  overviewImage: {
    position: 'relative',
    width: '100%',
    maxWidth: '100%',
    maxHeight: 200,
    overflow: 'hidden'
  },
  overviewText: {
    fontSize: 18,
    color: Colors.textBlack,
    width: '90%',
    textAlign: 'left',
    marginVertical: 15
  },
  subtitle: {
    fontSize: 22,
    color: Colors.textBlack,
    width: '100%',
    textAlign: 'center',
    marginBottom: 25
  }
});
