import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PropTypes from "prop-types";
import { ImageIconClose } from '../imageIcon'

//  const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
//  const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

class InputGooglePlaces extends React.Component {
    constructor(props) {
      super(props);
    }

    static propTypes = {
      onPress: PropTypes.func
    };
    
    render(){
      return (
        <GooglePlacesAutocomplete
          ref={c => this.googlePlacesAutocomplete = c}
          placeholder='Search'
          minLength={2} // minimum length of text to search
          autoFocus={false}
          returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
          listViewDisplayed='auto'    // true/false/undefined
          fetchDetails={true}
          renderDescription={row => row.description} // custom description render
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            console.log(data, details);
            this.props.onPress(data, details);
          }}
          
          getDefaultValue={() => ''}
          
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyCzpgkMPSsLqOYgZIUHJZutlplmEvZGiBA',
            language: 'id', // language of the results
            types: '(cities)' // default: 'geocode'
          }}
          
          styles={{
            textInputContainer: {
              width: '100%',
              backgroundColor: '#FFF',
              borderTopWidth: 0,
              borderBottomWidth: 1
            },
            description: {
              fontWeight: 'bold',
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            }
          }}
          
          currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
          // currentLocationLabel="Current location"
          nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          GoogleReverseGeocodingQuery={{
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
          }}
          GooglePlacesSearchQuery={{
            // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
            rankby: 'distance',
            types: 'food'
          }}
    
          // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] 
          // if you want to display only cities
          //  filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} 
          //  predefinedPlaces={[homePlace, workPlace]}
    
          debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
          // renderLeftButton={()  => <FormLabel labelStyle={textStyles.body}>Venue Event</FormLabel>}
          renderRightButton={() => <ImageIconClose onPress={()=>{ this.googlePlacesAutocomplete._handleChangeText('') }} />}
        />
      );
    }
}

export default InputGooglePlaces;