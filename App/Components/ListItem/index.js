import * as React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Colors from 'App/Constants/Colors';
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
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.blue,
  },
  content: {
    width: '100%',
    fontSize: 20,
    paddingLeft: 10,
    textAlign: 'left',
    color: Colors.textWhite
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.white
  }
});
