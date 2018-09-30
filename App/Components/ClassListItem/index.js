import * as React from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import Text from 'App/Components/Text';
import TouchableComponent from 'App/Components/TouchableComponent';
import Colors from 'App/Constants/Colors';

type Props = {
  img: string | Object,
  title: string,
  onPress: () => void
}

class ClassListItem extends React.PureComponent<Props> {
  render () {
    const { img, title } = this.props;
    let source = img;
    if (typeof img === 'string') {
      source = { uri: img }
    }

    return (
      <View style={styles.wrapper}>
        <TouchableComponent
          type='ios'
          onPress={()=>alert('clicked!')}
          style={styles.button}
        >
          <Image style={styles.buttonImage} source={source} />
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableComponent>
        <View style={styles.separator} />
      </View>
    );
  }
}

export default ClassListItem;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  buttonImage: {
    width: 32,
    height: 32
  },
  buttonText: {

  },
  separator: {

  }
});
