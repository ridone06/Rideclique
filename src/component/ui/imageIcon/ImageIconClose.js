import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";

class ImageIconClose extends React.Component{

  static propTypes = {
    onPress: PropTypes.func
  };

  render(){
      return(
        <TouchableOpacity onPress={() => this.props.onPress()} style={{ paddingLeft: 10, justifyContent: 'center'}}>
            <Image source={require('../../../assets/img/icon-close-field-venue.png')} style={{width: 20, height: 20}} />
        </TouchableOpacity>
      );
  }
}

export default ImageIconClose;