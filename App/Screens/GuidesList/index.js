import * as React from 'react';
import {
  ScrollView,
  View,
  StyleSheet
} from 'react-native';
import Text from 'App/Components/Text';

import ListItem from 'App/Components/ListItem';

type Props = {
  guides: Array
}

class GuidesList extends React.Component {
  static navigationOptions = {
    title: 'Список гайдов',
  }

  render () {
    const { guides } = this.props.navigation.state.params;

    return (
      <ScrollView style={styles.wrapper} contentContainerStyle={styles.wrapperContent}>
        {guides.map( (item, index) => {
          return <ListItem key={index} onPress={()=>alert('clicked!')}>{item.name}</ListItem>
        })}
      </ScrollView>
    );
  }
}

export default GuidesList;


const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%'
  },
  wrapperContent: {
    padding: 20
  }
});
