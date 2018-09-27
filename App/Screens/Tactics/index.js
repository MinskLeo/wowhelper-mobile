import * as React from 'react';
import {
  ScrollView,
  View,
  StyleSheet
} from 'react-native';
import Text from 'App/Components/Text';
import Card from 'App/Components/Card';

import DATABASE from 'Data/index.json';
import { tacticsImagesPack } from 'Data/importer';

class TacticsPage extends React.Component {
  static navigationOptions = {
    title: 'Тактики',
  }


  render () {
    const { tactics } = DATABASE;
    const { navigation } = this.props;

    return (
      <ScrollView style={styles.wrapper} contentContainerStyle={styles.wrapperContent}>
      {tactics.map( (item, index) => {
          return <Card
            key={index}
            img={tacticsImagesPack[item.image]}
            title={item.name}
            onPress={() => navigation.navigate('TacticsGuidesList', { guides: item.guides })}
          />
      })}
      </ScrollView>
    );
  }
}

export default TacticsPage;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%'
  },
  wrapperContent: {
    padding: 20
  }
});
