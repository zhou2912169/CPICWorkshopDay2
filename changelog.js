import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

class Changelog extends Component{
    render() {
        const {bigTitle,image,title,link,description}=this.props.previewBox;
        return (
            <View style={styles.changelog}>
                <Text style={[styles.describeText,{flex:1}]}>{bigTitle}</Text>
                <View style={[styles.changelogContainer,styles.row]}>
                    <Image style={styles.changelogImage} source={{uri:image}}></Image>
                    <View style={styles.changelogTextContainer}>
                        <Text style={[styles.changelogText,{fontWeight:'bold'}]}>
                            facebook/react
                        </Text>
                        <Text style={styles.changelogText}>
                            {description}
                        </Text>
                        <Text style={[styles.changelogText,{color:'#8899a6'}]}>
                            {link}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    describeText:{
        color:'#292f33',
        fontSize:26,
    },
    changelog:{
        marginBottom:20,
    },
    changelogContainer:{
        flex:3,
        borderColor:'#e1e8ed',
        borderWidth:1,
        borderRadius:5,
        marginBottom:10,
        marginTop:10,
    },
    changelogImage:{
        flex:1,
        borderRadius:5,
        marginRight:10,
    },
    changelogTextContainer:{
        flex:2,
        justifyContent:'center'
    },
    changelogText:{
        color:'#000000',
        fontSize:16,
    },
    row:{
        flexDirection:'row',
    },
})

export default Changelog;
