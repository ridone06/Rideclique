import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    StyleSheet, 
    View, 
    Text, 
    KeyboardAvoidingView, 
    ScrollView,
} from 'react-native';
import { FormLabel } from 'react-native-elements'
import { InputText, InputDate, InputGooglePlaceAutoComplete } from '../ui/input'

import Header from '../ui/Header'
import { ButtonFooter } from '../ui/button'
import { textStyles } from '../TextStyles';
import { setEventName, setDateEvent, setVenueEvent } from '../../actions/CreateEventAction'

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

class CreateEvent extends Component {
    constructor(props){
        super(props);
    }

    static navigationOptions = {
        headerLeft: <Header />,
        headerStyle: { backgroundColor: '#fff', elevation:0 }
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView scrollEnabled={true}>
                    <KeyboardAvoidingView behavior="padding" style={styles.body}>
                        <Text style={[textStyles.title1, {display: 'flex'}]}>
                            Let's create your event details
                        </Text>
                        <View style={{left: -10, marginTop: 15}}>
                            <FormLabel labelStyle={[textStyles.body, {left: -10}]}>Event Name</FormLabel>
                            <InputText maxlength={50} multiline={true} onChangeText={(input) => { this.props.setEventName(input)}} />

                            <FormLabel labelStyle={[textStyles.body, {left: -10}]}>Date and Time Event</FormLabel>
                            <InputDate onChangeText={(input) => { this.props.setDateEvent(input)}} />

                            <FormLabel labelStyle={[textStyles.body, {left: -10}]}>Venue Event</FormLabel>
                            <InputGooglePlaceAutoComplete valueInput={this.props.venueEvent} {...this.props} />
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
                <View style={styles.footer}>
                    <ButtonFooter title="NEXT" onPress={()=>{ alert(JSON.stringify(this.props)) }} />
                </View>
            </View>
        );
    }
}

function mapStateToProps(state, ownProps){
    return{
        eventName: state.createEvent.eventName,
        dateEvent: state.createEvent.dateEvent,
        venueEvent: state.ModalGooglePlaces.inputValue
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setEventName: (input) => dispatch(setEventName(input)),
        setDateEvent: (input) => dispatch(setDateEvent(input)),
        setVenueEvent: (input) => dispatch(setVenueEvent(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    body:{
        flex: 1,
    },
    footer:{
        flex: 0.3,
        alignItems: 'center',
    }
});