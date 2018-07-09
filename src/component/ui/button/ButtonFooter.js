import React, { Component } from 'react';
import PropTypes from "prop-types";
import {
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    Dimensions,
} from 'react-native';
import { textStyles } from '../../TextStyles';

const widhtDevice = Dimensions.get('window').width;

class ButtonFooter extends Component {

    static propTypes = {
        title: PropTypes.string,
        onPress: PropTypes.func
      };

    render(){

        return(
            <TouchableOpacity onPress={()=>{ this.props.onPress() }} style={styles.buttonFooter}>
                <Text style={textStyles.headline}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

export default ButtonFooter;

const styles = StyleSheet.create({
    buttonFooter:{
        width: widhtDevice / 1.1,
        backgroundColor: '#fe6409',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
    }
});