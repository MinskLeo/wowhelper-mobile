import * as React from 'react';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import ListItem from 'App/Components/ListItem';
import Colors from 'App/Constants/Colors';
import NoContent from 'App/Components/NoContent';

class TacticsPage extends React.Component {
  static navigationOptions = {
    title: 'Список гайдов',
  }


  render() {
    const { navigation } = this.props;
    const { guides } = navigation.state.params;

    if(guides.length > 0) {
      return (
        <ScrollView style={styles.wrapper} contentContainerStyle={styles.wrapperContent}>
          {guides.length > 0 && guides.map((item, index) => {
            return <ListItem
              key={index}
              onPress={() => navigation.navigate('TacticsGuidePreview', { guide: item })}
            >{item.name}</ListItem>
          })}
          {guides.length <= 0 && <NoContent />}
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
