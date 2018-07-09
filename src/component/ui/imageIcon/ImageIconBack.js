import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";

class ImageIconBack extends React.Component{

  static propTypes = {
    onPress: PropTypes.func
  };

  render(){
      return(
        <TouchableOpacity onPress={() => this.props.onPress()} style={{ paddingLeft: 10, width: 35, height: 35, justifyContent: 'center'}}>
            <Image source={require('../../../assets/img/icon-back.png')} style={{width: 20, height: 35}} />
        </TouchableOpacity>
      );
  }
}

export default ImageIconBack;