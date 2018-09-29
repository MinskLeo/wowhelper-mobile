import * as React from 'react';
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import Text from 'App/Components/Text';
import Colors from 'App/Constants/Colors';

type Props = {
  children: string
}

class TextBlock extends React.PureComponent {
  render() {
    const { children } = this.props;

    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>{children}</Text>
      </View>
    );
  }
}

export default TextBlock;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15
  },
  text: {
    width: '100%',
    fontSize: 18,
    textAlign: 'left',
    paddingHorizontal: 15,
    color: Colors.lightBlack
  }
});
