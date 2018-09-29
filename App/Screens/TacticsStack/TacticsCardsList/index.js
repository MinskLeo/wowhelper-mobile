import * as React from 'react';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import Card from 'App/Components/Card';
import Colors from 'App/Constants/Colors';
import Text from 'App/Components/Text';
import NoContent from 'App/Components/NoContent';

import DATABASE from 'Data/index.json';
import { tacticsImagesPack } from 'Data/importer';

class TacticsPage extends React.Component {
  static navigationOptions = {
    title: 'Рейды',
  }


  render() {
    const { tactics } = DATABASE;
    const { navigation } = this.props;

    if (tactics.length > 0) {
      return (
        <ScrollView style={styles.wrapper} contentContainerStyle={styles.wrapperContent}>
          {tactics.map((item, index) => {
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

    return <View style={styles.wrapper}><NoContent /></View>;
  }
}

export default TacticsPage;

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
