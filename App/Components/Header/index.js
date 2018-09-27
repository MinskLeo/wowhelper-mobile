import * as React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Colors from 'App/Constants/Colors';
import Text from 'App/Components/Text';
// import Icon from 'react-native-vector-icons/FontAwesome'
import TouchableComponent from 'App/Components/TouchableComponent';
import Navigationhelper, { _navRef } from 'App/Helpers/NavigationHelper';

import { HeaderBackButton } from 'react-navigation';

type Props = {
  navigation: Object
}

class CustomHeader extends React.PureComponent<Props> {
  canGoBack = () => {
    const history = Navigationhelper.getRaidViewHistory();
    if (history && history.length > 1) {
      return true;
    }

    return false;
  }

  goBack = () => {
    const { navigation } = this.props;

    navigation.goBack();
  }

  toggleDrawer = () => {
    const { navigation } = this.props;

    navigation.toggleDrawer();
  }

  render() {
    const canGoBack = this.canGoBack();

    return (
      <View style={styles.wrapper}>
        {canGoBack ?
          <HeaderBackButton onPress={this.goBack} tintColor='#eee' />
          :
          <TouchableComponent
            type='android'
            style={styles.barsContainer}
            onPress={this.toggleDrawer}
          >
            {/* <Icon name='bars' style={styles.bars} /> */}
            <Text>BARS</Text>
          </TouchableComponent>
        }
      </View>
    );
  }
}

export default CustomHeader;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 56,
    backgroundColor: Colors.blue,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  barsContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bars: {
    fontSize: 30,
    color: Colors.white,
  }
});
