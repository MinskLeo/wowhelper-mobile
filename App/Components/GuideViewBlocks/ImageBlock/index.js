import * as React from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';

type Props = {
  children: string,
  img: string | Object
}

class ImageBlock extends React.PureComponent {
  render() {
    const { children, img } = this.props;

    return (
      <View style={styles.wrapper}>
        <Image style={styles.image} source={img}/>
      </View>
    );
  }
}

export default ImageBlock;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    maxHeight: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  image: {
    width: '100%',
    height: '100%'
  }
});
