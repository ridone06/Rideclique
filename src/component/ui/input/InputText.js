import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { FormInput } from 'react-native-elements'
import { textStyles } from '../../TextStyles';

const heightDevice = Dimensions.get('window').height;

class InputText extends Component {
    static propTypes = {
        multiline: PropTypes.bool,
        value: PropTypes.string,
        maxlength: PropTypes.number,
        onChangeText: PropTypes.func
    };

    constructor(props){
        super(props);
        this.state = {
            maxlength: this.props.maxlength || 50,
            maxlengthOri: this.props.maxlength || 50,
            valueInput: this.props.value || ''
        }
    }

    _setInput(input){
        this.setState(previousState => {
            return { 
                maxlength: previousState.maxlengthOri - input.length,
                valueInput: input
             };
        });
    }

    render(){
        return(
            <View style={styles.SectionStyle}>
                <FormInput
                    value={this.props.value} 
                    multiline={this.props.multiline}
                    underlineColorAndroid="#fe6409"
                    maxLength={this.state.maxlengthOri}
                    inputStyle={[textStyles.input, {paddingRight: 30}]} 
                    onChangeText={(input) => { this._setInput(input); this.props.onChangeText(input) }} />
                <View style={styles.right}>
                    <Text style={textStyles.body}>{this.state.maxlength}</Text>
                </View>
            </View>
        );
    }
}

export default InputText;

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
    right:{
        height: 20, 
        width: 30, 
        alignItems: 'center',
        position: 'absolute', 
        right: 8
    }
});