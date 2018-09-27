import * as React from 'react';
import {
  View,
  ImageBackground
} from 'react-native';

type Props = {
  children: any,
  img: string | Object
}

class DashboardLayout extends React.PureComponent<Props> {
  render () {
    const { children, img } = this.props;
    let source = img;
    if(typeof img==='string') {
      source = {uri: img}
    }

    return (
      <ImageBackground source={source} style={{width: '100%', height: '100%'}}>
        {children}
      </ImageBackground>
    );
  }
}

export default DashboardLayout;
