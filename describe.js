import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

class Describe extends Component{
    render() {
        const text=this.props.text;
        return (
            <View style={styles.describe}>
                <Text style={styles.describeText}>{text}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    describe:{
        marginBottom:40,
    },
    describeText:{
        color:'#292f33',
        fontSize:26,
    },
})

export default Describe;