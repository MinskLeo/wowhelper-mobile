import * as React from 'react';
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import Text from 'App/Components/Text';

type Props = {
  children: string,
  subtitle: boolean
}

class TitleBlock extends React.PureComponent<Props> {
  render () {
    const { children, subtitle } = this.props;

    return (
      <View style={[styles.wrapper, subtitle ? styles.wrapperSubtitle : null]}>
        <View style={styles.content}>
          <Text style={styles.text}>{children}</Text>          
        </View>
        {!subtitle && <View style={styles.separator} />}
      </View>
    );
  }
}

export default TitleBlock;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  content: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15
  },
  text: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  separator: {
    width: '90%',
    height: 1,
    backgroundColor: '#333'
  },
  wrapperSubtitle: {
    marginVertical: 0,
    marginBottom: 10
  }
});
