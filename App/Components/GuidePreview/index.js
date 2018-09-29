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
  onCategoryPress: (item: Object, index: number) => void
}

class GuidePreview extends React.PureComponent<Props> {
  render() {
    const { onCategoryPress, guide, imagesDatabase } = this.props;

    return (
      <ScrollView style={styles.wrapper} contentContainerStyle={styles.wrapperContent}>
        <Text style={styles.title}>{guide.name}</Text>
        <View style={styles.separator} />
        <Image style={styles.overviewImage} source={imagesDatabase[guide.overviewImage]} />
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
    height: '100%'
  },
  wrapperContent: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  title: {
    fontSize: 20,
    color: Colors.textBlack,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    marginTop: 15
  },
  separator: {
    width: '90%',
    height: 1,
    backgroundColor: Colors.black,
    marginVertical: 35
  },
  overviewImage: {
    width: '100%',
    maxWidth: '100%',
    height: 200,
    maxHeight: 200,
    borderWidth: 3,
    borderColor: Colors.gray,
    marginBottom: 20
  },
  overviewText: {
    fontSize: 16,
    color: Colors.textBlack,
    width: '90%',
    textAlign: 'left',
    marginVertical: 15
  },
  subtitle: {
    fontSize: 20,
    color: Colors.textBlack,
    width: '100%',
    textAlign: 'center',
    marginBottom: 25
  }
});
