import * as React from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';
import Text from 'App/Components/Text';
import TouchableComponent from 'App/Components/TouchableComponent';

type Props = {
  img: string | Object,
  title: string,
  onPress: () => void
}

class GridButton extends React.PureComponent<Props> {
  render () {
    const { img, title, onPress } = this.props;
    let source = img;
    if (typeof img === 'string') {
      source = { uri: img }
    }

    return (
      <TouchableComponent
        type='android'
        style={styles.wrapper}
        onPress={onPress}
      >
        <Image style={styles.icon} source={source} />
        <Text style={styles.textContent}>{title}</Text>
      </TouchableComponent>
    );
  }
}

export default GridButton;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 120,
    height: 120
  },
  textContent: {
    width: '100%',
    fontSize: 20,
    textAlign: 'center',
    color: '#333'
  }
});
