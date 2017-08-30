import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Thrive</Text>
    </View>
  ); 
};

const styles = {
  viewStyle: {
    backgroundColor: '#83cdd9'
  },
  textStyle: {
    fontSize: 25
  }
};

export default Header;
