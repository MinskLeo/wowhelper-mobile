import * as React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Linking,
  Alert
} from 'react-native';
import Colors from 'App/Constants/Colors';
import Text from 'App/Components/Text';
import TouchableComponent from 'App/Components/TouchableComponent';

import Config from 'App/Config';


class NoContent extends React.PureComponent {
  openEmail = () => {
    Linking.canOpenURL(`mailto:${Config.myEmail}`)
    .then( can => Linking.openURL(`mailto:${Config.myEmail}`) )
    .catch( error => Alert.alert('Ошибчанский', 'Что-то пошло не так... Сообщите разработчику)'));
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>Пока тут ничего нету :(</Text>
        <Text style={styles.note}>Если хочешь помочь наполнить:</Text>
        <TouchableComponent
          type='android'
          onPress={this.openEmail}
          style={styles.linkContainer}
        >
          <Text style={[styles.note, styles.link]}>2119930@gmail.com (тык)</Text>
        </TouchableComponent>
        <Text style={styles.note}>Либо пиши в игре: {Config.myNickName}</Text>
      </View>
    );
  }
}

export default NoContent;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.blue,
    width: '100%',
    textAlign: 'center',
    fontSize: 22
  },
  note: {
    color: Colors.blue,
    width: '100%',
    textAlign: 'center',
    fontSize: 18
  },
  linkContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    color: Colors.blue,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: Colors.darkBlue
  }
});
