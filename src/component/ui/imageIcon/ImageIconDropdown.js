import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from "prop-types";

class ImageIconDropdown extends React.Component{

  static propTypes = {
    onPress: PropTypes.func
  };

  render(){
      return(
        <TouchableOpacity onPress={() => this.props.onPress()} style={styles.SectionImage}>
            <Image source={require('../../../assets/img/icon-arrow-dropdown.png')} style={styles.ImageStyle} />
        </TouchableOpacity>
      );
  }
}

export default ImageIconDropdown;

const styles = StyleSheet.create({
    SectionImage:{
        height: 20, 
        width: 20,
    },
    ImageStyle: {
        height: 10,
        width: 15,
        position:'absolute',
        resizeMode : 'stretch',
        alignItems: 'center'
    },
});