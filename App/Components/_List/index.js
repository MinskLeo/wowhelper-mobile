import * as React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Colors from 'App/Constants/Colors';
import ListItem from 'App/Components/ListItem';

type Props = {
  items: Array<string>,
  nameField?: string,
  onPress: () => void
}

class List extends React.PureComponent<Props> {
  renderItem = (name, key) => {
    const { nameField } = this.props;

    return <ListItem key={key}>{nameField ? item[nameField] : item}</ListItem>
  }

  render () {
    const { onPress, items } = this.props;

    return (
      <View style={styles.wrapper}>
        {items.map( (item, index) => {
          return this.renderItem(item, index);
        })}
      </View>
    );
  }
}

export default List;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%'
  },
  listItem: {
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  listItemContent: {
    backgroundColor: Colors.blue,
    color: Colors.textWhite
  }
});
