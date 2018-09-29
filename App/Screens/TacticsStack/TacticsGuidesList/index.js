import * as React from 'react';
import {
  ScrollView,
  StyleSheet
} from 'react-native';
import ListItem from 'App/Components/ListItem';
import Colors from 'App/Constants/Colors';

class TacticsPage extends React.Component {
  static navigationOptions = {
    title: 'Список гайдов',
  }


  render() {
    const { navigation } = this.props;
    const { guides } = navigation.state.params;

    return (
      <ScrollView style={styles.wrapper} contentContainerStyle={styles.wrapperContent}>
        {guides.map((item, index) => {
          return <ListItem
            key={index}
            onPress={() => navigation.navigate('TacticsGuidePreview', { guide: item })}
          >{item.name}</ListItem>
        })}
      </ScrollView>
    );
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
