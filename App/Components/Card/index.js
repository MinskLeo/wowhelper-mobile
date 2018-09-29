import * as React from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';
import Text from 'App/Components/Text';
import Colors from 'App/Constants/Colors';
import TouchableComponent from 'App/Components/TouchableComponent';

type Props = {
  img: string | Object,
  title: string,
  onPress: () => void
}

class Card extends React.PureComponent<Props> {
  render() {
    const { img, title, onPress } = this.props;
    let source = img;
    if (typeof img === 'string') {
      source = { uri: img }
    }

    return (
      <TouchableComponent
        type='ios'
        style={styles.wrapper}
        onPress={onPress}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={source} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableComponent>
    );

  }
}

export default Card;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    maxHeight: 256,
    position: 'relative',
    borderWidth: 3,
    borderColor: '#c1c1c1',
    marginVertical: 20
  },
  image: {
    position: 'relative',
    width: '100%',
    maxWidth: '100%',
    maxHeight: 200
  },
  title: {
    position: 'relative',
    width: '100%',
    textAlign: 'left',
    paddingLeft: 20
  },
  titleContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee'
  },
  imageContainer: {
    width: '100%',
    height: 200
  }
});
