import * as React from 'react';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import ClassListItem from 'App/Components/ClassListItem';
import Card from 'App/Components/Card';

import Colors from 'App/Constants/Colors';
import Text from 'App/Components/Text';
import NoContent from 'App/Components/NoContent';
import HeaderBars from 'App/Components/HeaderBars';

import DATABASE from 'Data/index.json';
import { classImagesPack } from 'Data/importer';


class ClassGuidesList extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Классовые гайды',
      headerLeft: <HeaderBars onPress={() => navigation.toggleDrawer()} />
    }
  }


  render() {
    const { classGuides } = DATABASE;
    const { navigation } = this.props;

    if (Array.isArray(classGuides) && classGuides.length > 0) {
      return (
        <ScrollView style={styles.wrapper} contentContainerStyle={styles.wrapperContent}>
          {classGuides.map((item, index) => {
            return <Card
              key={index}
              img={classImagesPack[item.image]}
              title={item.name}
              imageResizeMode='contain'
              onPress={() => navigation.navigate('ClassGuidesGuidesList', { guides: item.guides })}
            />
          })}
        </ScrollView>
      );
    }

    return <View style={styles.wrapper}><NoContent /></View>;
  }
}

export default ClassGuidesList;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white
  },
  wrapperContent: {
    padding: 20,
    backgroundColor: Colors.white
  }
});
