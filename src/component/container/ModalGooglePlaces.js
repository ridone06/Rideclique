import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { ButtonCLose } from '../ui/button';
import { InputGooglePlaces } from '../ui/input'
import { setData, clearData } from '../../actions/ModalGooglePlacesAction'

class HeaderElementRight extends React.Component{

  static propTypes = {
    onPress: PropTypes.func
  };

  render(){
      return(
        <TouchableOpacity onPress={() => this.props.onPress()} style={{ paddingRight: 15, justifyContent: 'center'}}>
            <Text style={{color: "#fe6409"}}>Done</Text>
        </TouchableOpacity>
      );
  }
}

class ModalGooglePlaces extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        inputTextValue: ''
      }
    };

   static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
        return {
          headerLeft: (<ButtonCLose onPress={()=>{ navigation.goBack() }} />),
          headerRight: (<HeaderElementRight onPress={()=>{ navigation.goBack() }} />),
          headerStyle: { backgroundColor: '#fff', elevation:0 },
        }
    }

    onPress(data, details){
      this.props.setData(data.description);
    }

    render() {

      return (
        <View style={{ flex: 1, backgroundColor: '#FFF', padding: 15, alignItems: 'center', justifyContent: 'center' }}>
          <InputGooglePlaces onPress={(data, details)=>{ this.onPress(data, details); }} />
        </View>
      );
    }
  }

function mapStateToProps(state, ownProps){
    return{
        inputTextValue: state.ModalGooglePlaces.inputTextValue
    }
}

function mapDispatchToProps(dispatch) {
  return {
    setData: (input) => dispatch(setData(input)),
    clearData: (input) => dispatch(clearData(input))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalGooglePlaces);