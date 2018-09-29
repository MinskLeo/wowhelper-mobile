import * as React from 'react';
import {
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Colors from 'App/Constants/Colors';

import TouchableComponent from 'App/Components/TouchableComponent';

type Props = {
  onPress: () => void
}

class HeaderBars extends React.PureComponent<Props> {
  render () {
    const { onPress } = this.props;

    return (
      <TouchableComponent
        type='android'
        onPress={onPress}
        style={styles.wrapper}
      >
        <Icon name='three-bars' size={30} color={Colors.darkBlue} />
      </TouchableComponent>
    );
  }
}

export default HeaderBars;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  }
});
