import * as React from 'react';
import {
  View,
  StyleSheet,
  StatusBar
} from 'react-native';
import Text from 'App/Components/Text';
import Colors from 'App/Constants/Colors';
import TouchableComponent from 'App/Components/TouchableComponent';
import HeaderBars from 'App/Components/HeaderBars';

class About extends React.Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'О программе',
      headerLeft: <HeaderBars onPress={() => navigation.toggleDrawer()} />
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar backgroundColor={Colors.darkBlue} />
        <Text style={styles.textLogo}>{`<EpicMuffins/>`}</Text>
        <Text style={styles.text}>Данная программа была разработана с целью более простого и комфортного изучения тактик</Text>
        <Text style={styles.text}>
          <Text style={{ color: Colors.blue }}>ЦЛК, </Text>
          <Text style={{ color: Colors.red }}>РС, </Text>
          <Text style={{ color: Colors.yellow }}>Ульдуар </Text>
          <Text>и т.п.</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.text}>Создана членом гильдии Feikelol   </Text>
          <Text style={styles.textLineThrough}>за 20 000 еп</Text>
        </Text>
      </View>
    );
  }
}

export default About;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: Colors.white
  },
  textLogo: {
    fontSize: 32,
    marginVertical: 20,
    color: Colors.blue
  },
  text: {
    marginVertical: 5,
    maxWidth: '90%',
    fontSize: 18
  },
  textLineThrough: {
    textDecorationLine: 'line-through'
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftColor: Colors.blue,
    borderLeftWidth: 1,
    borderRightColor: Colors.blue,
    borderRightWidth: 1,
    marginTop: 20
  },
  vk: {
    fontSize: 50,
    color: Colors.blue
  }
});
