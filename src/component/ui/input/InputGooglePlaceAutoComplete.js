import React, { Component } from 'react';
import { StyleSheet, Keyboard, Dimensions, View } from 'react-native';
import { FormInput } from 'react-native-elements'
import PropTypes from "prop-types";
import { ImageIconDropdown } from '../imageIcon'

import { textStyles } from '../../TextStyles';

const heightDevice = Dimensions.get('window').height;

class InputGooglePlaceAutoComplete extends Component {

    static propTypes = {
        valueInput: PropTypes.string,
        onChangeText: PropTypes.func
      };

    _showModal(){
        this.props.navigation.navigate('ModalGooglePlaces');
    }

    render(){
        return(
            <View style={styles.SectionStyle}>
                <FormInput onFocus={() => { this._showModal(); Keyboard.dismiss(); }} inputStyle={[textStyles.input, { paddingRight: 30 }]} underlineColorAndroid="#fe6409"
                    value={this.props.valueInput}
                    onChangeText={(input)=>{ this.props.onChangeText(input) }} />
                <View style={styles.SectionImage}>
                    <ImageIconDropdown style={styles.ImageStyle} onPress={()=>{this._showModal()}} />
                </View>
            </View>
        );
    }
}

export default InputGooglePlaceAutoComplete;

const styles = StyleSheet.create({
    SectionStyle:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0,
        marginBottom: 20,
        height: heightDevice / 20
    },
    SectionImage:{
        height: 20, 
        width: 20, 
        position: 'absolute', 
        right: 7
    },
});