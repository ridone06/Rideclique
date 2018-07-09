import React, { Component } from 'react';
import {
    StyleSheet, 
    View, 
    TouchableOpacity, 
    Dimensions, 
} from 'react-native';

import { ImageIconBack } from './imageIcon'

const widhtDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

class Header extends Component{
    render(){
        return(
            <View style={{flex: 1, flexDirection: 'row', width: widhtDevice}}>
                <ImageIconBack onPress={()=>{ alert('Press..'); }} />
                <View style={styles.stepLayout}>
                    <TouchableOpacity style={styles.stepButton}>
                        <View style={styles.stepViewOrange}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.stepButton}>
                        <View style={styles.stepViewSilver}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.stepButton}>
                        <View style={styles.stepViewSilver}></View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Header;

const styles = StyleSheet.create({
    stepLayout:{ 
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        // marginLeft: 5, 
        justifyContent: 'center'
    },
    SectionStyle:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0,
        marginBottom: 20,
        height: heightDevice / 20
    },
    stepViewOrange:{
        height: (widhtDevice / 60), 
        width: (widhtDevice / 4), 
        backgroundColor: '#fe6409', 
        borderRadius: 10
    },
    stepViewSilver:{
        height: (widhtDevice / 60), 
        width: (widhtDevice / 4), 
        backgroundColor: 'silver', 
        borderRadius: 10
    },
    stepButton:{
        alignItems: 'center', 
        marginLeft: 10, 
        justifyContent: 'center'
    }
});