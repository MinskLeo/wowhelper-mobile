import * as React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Fonts from 'App/Constants/Fonts';
import Colors from 'App/Constants/Colors';

type Props = {
  children: any,
  style: Object
}

class TextCustom extends React.PureComponent<Props> {
  render() {
    const { children, style } = this.props;

    return <Text style={[styles.content, style]}>{children}</Text>;
  }
}

export default TextCustom;

const styles = StyleSheet.create({
  content: {
    fontSize: 20,
    color: Colors.textBlack,
    fontWeight: '400',
    fontFamily: Fonts.SegoeUI
  }
});
