import * as React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Text from 'App/Components/Text';
import TouchableComponent from 'App/Components/TouchableComponent';

type Props = {
  children: string,
  onPress: () => void
}

class ListItem  extends React.PureComponent<Props> {
  render () {
    const { children, onPress } = this.props;

    return (
      <View style={styles.wrapper}>
        <TouchableComponent
          style={styles.button}
          onPress={onPress}
        >
          <Text style={styles.content}>{children}</Text>
        </TouchableComponent>
        <View style={styles.separator} />
      </View>
      
    );
  }
}

export default ListItem;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  button: {
    width: '100%',
    paddingVertical: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    fontSize: 20,
    paddingLeft: 10,
    textAlign: 'left'
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#333'
  }
});
