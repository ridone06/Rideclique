import React, { Component } from 'react';
import { StyleSheet, Keyboard, Dimensions, TouchableOpacity, View, Image } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker'
import PropTypes from "prop-types";
import { FormInput } from 'react-native-elements'
import { ImageIconDropdown } from '../imageIcon'
import moment from 'moment';
import { textStyles } from '../../TextStyles';

const heightDevice = Dimensions.get('window').height;

class InputDate extends Component {
    static propTypes = {
        onChangeText: PropTypes.func
    };

    state = {
        isDateTimePickerVisible: false,
        valueDate: null
    };
    
    _showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
        Keyboard.dismiss();
    };

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    
    _handleDatePicked = (date) => {
        let dateStr = moment(date).format('dddd, DD MMMM YYYY at H:mm').toString();
        this.setState({ valueDate: dateStr.replace('amt', 'at').replace('pmt', 'at') });
        this._hideDateTimePicker();
        
        this.props.onChangeText(date);
    };



    render(){
        return(
            <View style={styles.SectionStyle}>
                <FormInput onFocus={this._showDateTimePicker} inputStyle={[textStyles.input, {paddingRight: 30}]} underlineColorAndroid="#fe6409"
                    value={this.state.valueDate}
                    onChangeText={()=>{ }} />
                <View style={styles.SectionImage}>
                    <ImageIconDropdown onPress={this._showDateTimePicker} />
                    <DateTimePicker mode="datetime"
                        isVisible={this.state.isDateTimePickerVisible}
                        is24Hour={true}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                        />
                </View>
            </View>
        );
    }
}

export default InputDate;

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
    }
});