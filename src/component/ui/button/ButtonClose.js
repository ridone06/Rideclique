import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { textStyles } from '../../TextStyles';
import PropTypes from "prop-types";

class ButtonClose extends React.Component{

  static propTypes = {
    onPress: PropTypes.func
  };

  render(){
      return(
        <TouchableOpacity onPress={() => this.props.onPress()} style={{ paddingLeft: 15, justifyContent: 'center'}}>
            <Text style={textStyles.body}>X</Text>
        </TouchableOpacity>
      );
  }
}


export default ButtonClose;